### A Pluto.jl notebook ###
# v0.19.27

using Markdown
using InteractiveUtils

# ╔═╡ 05aeff39-5221-4261-9732-a20893f92335
using Pkg

# ╔═╡ 97c93b24-f145-4814-a733-92cca1e9d142
Pkg.add(url="https://github.com/njericha/Sediment-Source-Analysis.jl")

# ╔═╡ f7acb584-bdbc-4fa7-a96a-e5e217454af7
begin
	Pkg.add("XLSX")
	Pkg.add("NamedArrays")
	Pkg.add("Plots")
	Pkg.add("Printf")
	Pkg.add("Random")
	Pkg.add("OrderedCollections")
end

# ╔═╡ da27d62e-84e9-499d-afe1-90ccd61ae5f8
using SedimentSourceAnalysis

# ╔═╡ 0d218304-0758-41d7-8f2f-580c46553769
# note: depending on the environment that Pluto links to (and what packages are already installed there) you may need to also run Pkg.add("package_name") before running this cell.

begin
	using XLSX
	using NamedArrays
	using Plots
	using Printf
	using Random
	#using Statistics: mean
	using OrderedCollections: OrderedDict
end

# ╔═╡ 9eb825f8-1bc7-411e-ac73-9ed77ab69013
begin
	# Import data from excel file
	filename = "./data/sundell2022/20sinks from 3Sources from Sundell et al 2022.xlsx"
	sinks = read_raw_data(filename)::Vector{Sink}
end

# ╔═╡ 3ad8323d-f53c-447d-9d1c-3793d707b3c5
begin
	## Look at a grain
	sink1 = sinks[begin]
	grain1 = sink1[begin]
	println("Grain 1 in Sink 1")
	display(grain1)
end

# ╔═╡ 96de5d2c-e15f-4c74-bc91-4077fe7bb667
begin
	## Select the bandwidth for the estimation
	## Uses Silverman's rule of thumb
	#sink1 = sinks[begin]
	inner_percentile = 95 # Filter outliers; ignore values outside the inner percentile
	alpha_ = 0.9 # bandwidth "alpha" smooths the density estimate, 0.9 is the default
             # this can denoise estimation
	bandwidths = default_bandwidth.(collect(eachmeasurement(sink1)), alpha_, inner_percentile)
end

# ╔═╡ 2fcc2b74-c4a3-400a-a8fe-681a180650ba
begin
	## Obtain the raw densities estimates
	## The same measurement could (and likely!) have different supports for different sinks...
	raw_densities = make_densities.(sinks; bandwidths, inner_percentile)

	## ...so we standardize them by resampling the densities on the same domain,
	## which is the union of all intervels.
	densities, domains = standardize_KDEs(raw_densities)

	# Package the densities into a single order-3 tensor
	densitytensor = DensityTensor(densities, domains, sinks);
	setsourcename!(densitytensor, "sink");
end

# ╔═╡ 0616b104-98d4-45e9-b75f-6525940ce24e


# ╔═╡ 4484a7b5-17c6-4551-90ff-005da8b291a1
# Set parameters
begin
	rank = 3 # best rank for this data set
	maxiter = 7000
	tol = 1e-5
end

# ╔═╡ 75f05c85-931a-479c-abd6-59b85e01c591
begin
	Y = copy(array(densitytensor));
	Y_lateral_slices = eachslice(Y, dims=2)
	Y_lateral_slices .*= getstepsizes(densitytensor)
end

# ╔═╡ de6b747c-4a73-4117-a5db-3efc3acd0e45
C, F, rel_errors, norm_grad, dist_Ncone = nnmtf(Y, rank; maxiter, tol, rescale_Y=false)

# ╔═╡ 45c6160d-bc1a-423b-b7c8-1fb13fa1f40f
begin
	# Compare learned C and F to the known sources
	# Import data for ground truth F
	#source_filename = "./data/sundell2022/3Sources from Sundell et al 2022.xlsx"
	sources = read_raw_data(filename)::Vector{Source}
end

# ╔═╡ ea481d7c-4b0b-4813-9280-581c756ea651
## Confirm the measurements are the same and in the same order
@assert getmeasurements(sources[begin]) == getmeasurements(sinks[begin])

# ╔═╡ ca51b1ef-d348-4ccb-9ee6-29014b447257
## Estimate densities for the known sources
## We pass in the previously calculated domains to ensure the densities are
## estimated on the same grid.
## They are wrapped in a tuple so the broadcasting is only on the sources.
true_densities = make_densities.(sources, (domains,); bandwidths, inner_percentile)

# ╔═╡ e861c3a5-fa55-448f-9b18-6342680265e9
begin
	## Wrap in DensityTensor
	factortensor_true = DensityTensor(true_densities, domains, getmeasurements(densitytensor));
	setsourcename!(factortensor_true, "true source")
end

# ╔═╡ 581299c2-7344-4429-9ec8-d9a8b358b50b
begin
	# Import data for ground truth C
	source_filename = "./data/sundell2022/20sinks from 3Sources from Sundell et al 2022.xlsx"
	source_amounts = XLSX.readdata(source_filename,"Source proportions","B2:D21")
	C_true = source_amounts / 75 # 75 Grains in each sink
	coefficientmatrix_true = NamedArray(C_true, dimnames=("sink", "true source"))

	# Ensure the factors in C and F are in the same order as the true densities
	match_sources!(C, F, coefficientmatrix_true, factortensor_true)

	## Package F into a DensityTensor with the same domain and measurements as Y
	## Each collection of measurements is no longer a sink and is now a "factor"
	factortensor = DensityTensor(F, domains, getmeasurements(densitytensor))
	setsourcename!(factortensor, "learned source")

	## Package C into a NamedArray to label the dimentions
	coefficientmatrix = NamedArray(C, dimnames=("sink", "learned source"))
end

# ╔═╡ 8455eba8-9975-43e6-87b7-ccdc938f8a56
coefficientmatrix

# ╔═╡ 95e7aba4-a2ee-4f0c-a9cd-e5fd2dc861b3
coefficientmatrix_true

# ╔═╡ adb3667e-b778-4c87-b04f-068574c0c91b
begin
	# Visualize and compare the coefficientmatrix and factortensor
	# Note display should be called after all plots have been finalized
	options = (:xlabel => "source", :ylabel => "sink")
	p1 = heatmap(coefficientmatrix; title="Learned Coefficients", clims = (0,1), options...);
	display(p1)
	#savefig(p1, "learned_c_heatmap.png")
end

# ╔═╡ 4a1d4ef8-91ff-453f-b458-0c08c14fb1b8
begin
	p2 = heatmap(coefficientmatrix_true; title="True Coefficients", clims = (0,1), options...);
	display(p2)
	savefig(p2,"true_c_heatmap.png")
end

# ╔═╡ cee7e1e3-ca84-4289-8d36-07c46a356ad0
begin
	learned_source_plots = source_heatmaps(factortensor; title="Learned Densities for ");
	true_source_plots = source_heatmaps(factortensor_true; title="True Densities for ");


	count = 1
	# Alternate learned and true plot so you can compare similar plots side-by-side
	for (l, t) in zip(learned_source_plots, true_source_plots)
    	display(l)
		savefig(l,"learned_$count.png")
    	display(t)
		savefig(t,"true_$count.png")
		count+=1
	end

	#plots = measurement_heatmaps(factortensor; title="Learned Densities for ");
	#display.(plots);
end

# ╔═╡ 83cb4123-eeb6-4605-a577-7d4e69d6a753
count

# ╔═╡ Cell order:
# ╠═05aeff39-5221-4261-9732-a20893f92335
# ╠═97c93b24-f145-4814-a733-92cca1e9d142
# ╠═da27d62e-84e9-499d-afe1-90ccd61ae5f8
# ╠═f7acb584-bdbc-4fa7-a96a-e5e217454af7
# ╠═0d218304-0758-41d7-8f2f-580c46553769
# ╠═9eb825f8-1bc7-411e-ac73-9ed77ab69013
# ╠═3ad8323d-f53c-447d-9d1c-3793d707b3c5
# ╠═96de5d2c-e15f-4c74-bc91-4077fe7bb667
# ╠═2fcc2b74-c4a3-400a-a8fe-681a180650ba
# ╠═0616b104-98d4-45e9-b75f-6525940ce24e
# ╠═4484a7b5-17c6-4551-90ff-005da8b291a1
# ╠═75f05c85-931a-479c-abd6-59b85e01c591
# ╠═de6b747c-4a73-4117-a5db-3efc3acd0e45
# ╠═45c6160d-bc1a-423b-b7c8-1fb13fa1f40f
# ╠═ea481d7c-4b0b-4813-9280-581c756ea651
# ╠═ca51b1ef-d348-4ccb-9ee6-29014b447257
# ╠═e861c3a5-fa55-448f-9b18-6342680265e9
# ╠═581299c2-7344-4429-9ec8-d9a8b358b50b
# ╠═8455eba8-9975-43e6-87b7-ccdc938f8a56
# ╠═95e7aba4-a2ee-4f0c-a9cd-e5fd2dc861b3
# ╠═adb3667e-b778-4c87-b04f-068574c0c91b
# ╠═4a1d4ef8-91ff-453f-b458-0c08c14fb1b8
# ╠═cee7e1e3-ca84-4289-8d36-07c46a356ad0
# ╠═83cb4123-eeb6-4605-a577-7d4e69d6a753
