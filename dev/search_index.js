var documenterSearchIndex = {"docs":
[{"location":"SedimentTools/#Sediment-Analysis-Tools","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"","category":"section"},{"location":"SedimentTools/#Types","page":"Sediment Analysis Tools","title":"Types","text":"","category":"section"},{"location":"SedimentTools/","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"Grain\nDensityTensor\nRock\nSink\nSource","category":"page"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.Grain","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.Grain","text":"Grain(v::AbstractVector{T}, measurement_names::AbstractVector{String})\n\nStruct to hold grain level data\n\n\n\n\n\n","category":"type"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.DensityTensor","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.DensityTensor","text":"DensityTensor(KDEs, domains, sinks)\nDensityTensor(array, domains, measurement_names; kw...)\n\nAn order 3 array to hold the density distributions for multiple sinks.\n\nKDEs is a Vector{Vector{Vector{T}}} like type whereas array is an Array{T,3} like type.\n\nCall setsourcename! to set the source name (name of first dimention).\n\n\n\n\n\n","category":"type"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.Rock","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.Rock","text":"Alias for Sink\n\n\n\n\n\n","category":"type"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.Sink","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.Sink","text":"Sink(grain1, grain2, ...)\nSink([grain1, grain2, ...])\n\nCollects a list of Grains into a Rock/Sink.\n\nEnsures all Grains have the same names and are in the same order. Struct to hold sink level data\n\n\n\n\n\n","category":"type"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.Source","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.Source","text":"Alias for Sink\n\n\n\n\n\n","category":"type"},{"location":"SedimentTools/#Constants","page":"Sediment Analysis Tools","title":"Constants","text":"","category":"section"},{"location":"SedimentTools/","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"DEFAULT_ALPHA\nDEFAULT_N_SAMPLES","category":"page"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.DEFAULT_ALPHA","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.DEFAULT_ALPHA","text":"Smoothing parameter for calculating a kernel's bandwidth\n\n\n\n\n\n","category":"constant"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.DEFAULT_N_SAMPLES","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.DEFAULT_N_SAMPLES","text":"Number of samples to use when standardizing a vector of density estimates.\n\n\n\n\n\n","category":"constant"},{"location":"SedimentTools/#Method-Extentions","page":"Sediment Analysis Tools","title":"Method Extentions","text":"","category":"section"},{"location":"SedimentTools/","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"getindex(::Sink, ::String)\nnames(::NamedArray, ::Union{String,Symbol})\nheatmap(::NamedMatrix)","category":"page"},{"location":"SedimentTools/#Base.getindex-Tuple{Vector{NamedVector{T} where T<:Real}, String}","page":"Sediment Analysis Tools","title":"Base.getindex","text":"Gets all values of the measurement k in the Sink.\n\n\n\n\n\n","category":"method"},{"location":"SedimentTools/#Base.names-Tuple{NamedArray, Union{String, Symbol}}","page":"Sediment Analysis Tools","title":"Base.names","text":"names(n::NamedArray, dimname::Union{String,Symbol})\n\nExtend the names function from NamedArray to get the names given the axis name rather than the axis number.\n\n\n\n\n\n","category":"method"},{"location":"SedimentTools/#Plots.heatmap-Tuple{NamedMatrix}","page":"Sediment Analysis Tools","title":"Plots.heatmap","text":"Plots.heatmap(M::NamedMatrix; kwargs...)\n\nAutomatically grabs the names in axis to label the x and y plot axis\n\n\n\n\n\n","category":"method"},{"location":"SedimentTools/#Functions","page":"Sediment Analysis Tools","title":"Functions","text":"","category":"section"},{"location":"SedimentTools/#Importers","page":"Sediment Analysis Tools","title":"Importers","text":"","category":"section"},{"location":"SedimentTools/","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"read_raw_data","category":"page"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.read_raw_data","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.read_raw_data","text":"read_raw_data(filename)\nread_raw_data(filename; skip_sheets)\n\nImports excel data to a Vector{Sink}.\n\nExcel file must have one element per page where different columns correspond to different sinks. Each sink can have a different number of grains (length of the column), but a sink must have a consistant length across different measurements (sheets).\n\nOptionaly provide a collection skip_sheets to blacklist sheet names from the excel file.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#Getters","page":"Sediment Analysis Tools","title":"Getters","text":"","category":"section"},{"location":"SedimentTools/","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"array\ngetdomain\ngetdomains\ngetmeasurements\ngetsourcename\ngetsourcenames\ngetstepsizes\nnamedarray\ngetsink\ngetsource","category":"page"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.array","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.array","text":"Turn a DensityTensor or NamedArray into a plain Array type.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.getdomain","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.getdomain","text":"getdomain(D::DensityTensor, measurement::String)\ngetdomain(D::DensityTensor, j::Integer)\n\nGets the domain for the measurement density, the locations where the density was sampled. See getdomains.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.getdomains","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.getdomains","text":"getdomains(D::DensityTensor{T})::Vector{Vector{T}}\n\nGets the domain for every measurement's density, the locations where each density was sampled. See getdomains.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.getmeasurements","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.getmeasurements","text":"getmeasurements(g::Grain)\ngetmeasurements(s::Sink)\ngetmeasurements(D::DensityTensor)\n\nGetter for the measurement names.\n\n\n\n\n\nGets the names of measurements from a Sink\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.getsourcename","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.getsourcename","text":"getsourcename(D::DensityTensor)\n\nGets the name for the grouping of measurements. Usually \"Sink\" or \"Source\". See getsourcename.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.getsourcenames","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.getsourcenames","text":"getsourcenames(D::DensityTensor)\n\nGets the list of all sources' names. For example, [\"Sink 1\", \"Sink 2\", ...]. See getsourcenames.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.getstepsizes","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.getstepsizes","text":"getstepsizes(D::DensityTensor)\n\nGets the step sizes used for each domain. See getdomains.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.namedarray","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.namedarray","text":"Turn a DensityTensor into a NamedArray type.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.getsink","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.getsink","text":"Alias for getsource\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.getsource","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.getsource","text":"getsource(D::DensityTensor, i::Integer)\ngetsink(D::DensityTensor, i::Integer)\n\nGets source/sink i from D. See eachsource.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#Setters-and-Manipulators","page":"Sediment Analysis Tools","title":"Setters and Manipulators","text":"","category":"section"},{"location":"SedimentTools/","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"normalize_density_sums!\nnormalize_density_sums\nsetsourcename!","category":"page"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.normalize_density_sums!","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.normalize_density_sums!","text":"normalize_density_sums!(D::DensityTensor)\n\nRescales the densities so that the sum of the density samples is 1.\n\nThis is in constrast to the usualy normalization for density functions where the area of the density curve is 1. In the case of an evenly sampled density, this area is sum(density_samples)*step_size.\n\nUse normalize_density_sums to avoid mutation.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.normalize_density_sums","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.normalize_density_sums","text":"See normalize_density_sums!\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.setsourcename!","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.setsourcename!","text":"setsourcename!(D::DensityTensor, name::String)\n\nSets the name of the source used by getsourcename and getsourcenames.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#Iterators","page":"Sediment Analysis Tools","title":"Iterators","text":"","category":"section"},{"location":"SedimentTools/","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"eachdensity\neachmeasurement\neachsink\neachsource","category":"page"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.eachdensity","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.eachdensity","text":"eachdensity(D::DensityTensor)\n\nIterates D over each density vector. These are the 3 fibers of D.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.eachmeasurement","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.eachmeasurement","text":"Iterator for a list of values of each measurement\n\n\n\n\n\neachmeasurement(D::DensityTensor)\n\nIterates D over each measurement slice. These are the lateral slices.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.eachsink","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.eachsink","text":"Alias for eachsource.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.eachsource","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.eachsource","text":"eachsource(D::DensityTensor)\neachsink(D::DensityTensor)\n\nIterates D over each source/sink slice. These are the horizontal slices. See getsource.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#Density-and-Source-Estimation","page":"Sediment Analysis Tools","title":"Density and Source Estimation","text":"","category":"section"},{"location":"SedimentTools/","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"default_bandwidth\nestimate_which_source\nlabel_accuracy\nmake_densities\nmatch_sources!\nstandardize_KDEs","category":"page"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.default_bandwidth","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.default_bandwidth","text":"default_bandwidth(data; alpha=0.9, inner_percentile=100)\n\nCoppied from KernelDensity since this function is not exported. I want access to it so that the same bandwidth can be used for different densities for the same measurements.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.estimate_which_source","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.estimate_which_source","text":"estimate_which_source(grain::Grain, F::DensityTensor; kwargs...)\n\nReturns the likelihood and source index of the mostly likely factor the grain vector came from.\n\nReturns\n\n(Default) source_index::Integer: The index of the most likely source\n(when max_likelihoods==true) (maxlikelihood, source_index): The most likely source and its likelihood\n(when all_likelihoods==true) likelihoods::Vector{Real}: Likelihood grain came from each source\n(when both are true) ((maxlikelihood, source_index), likelihoods)\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.label_accuracy","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.label_accuracy","text":"label_accuracy(labels, true_amounts::AbstractArray{T,3})\n\nCalculates the number of correctly labeled grains and percentage of correct labels\n\nArguments\n\nlabels: Iterable of iterables with the labels for each grain (Vector{Vector{T}} or Tuple{Tuple})\ntrue_amounts: Number of grains from each source for every sink\n\nOutputs\n\nn_correct_eachsink::Integer\nn_total_labels::Integer\naccuracy::Real`\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.make_densities","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.make_densities","text":"make_densities(s::Sink; kwargs...)\nmake_densities(s::Sink, domains::AbstractVector{<:AbstractVector}; kwargs...)\n\nEstimates the densities for each measurement in a Sink.\n\nWhen given domains, a list where each entry is a domain for a different measurement, resample the kernel on this domain.\n\nParameters\n\nbandwidths::AbstractVector{<:Real}: list of bandwidths used for each measurement's\n\ndensity estimation\n\ninner_percentile::Integer=100: value between 0 and 100 that filters out each measurement\n\nby using the inner percentile range. This can help remove outliers and focus in on where the bulk of the data is.\n\nReturns\n\ndensity_estimates::Vector{UnivariateKDE}\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.match_sources!","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.match_sources!","text":"match_sources!(C, F, C_true, F_true)\n\nPermute sources in C and F to match the ground truth Ctrue and Ftrue.\n\nSimilarity is checked by finding the source that minimizes norm(c - c_true) where c is the column of C.\n\nParameters\n\ndouble_check::Bool: When true, repeat for F and F_true with their horizontal slices, and assert the ordering is the same as before.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.standardize_KDEs","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.standardize_KDEs","text":"standardize_KDEs(KDEs::AbstractVector{UnivariateKDE}; n_samples=DEFAULT_N_SAMPLES,)\n\nResample the densities so they all are smapled from the same domain.\n\n\n\n\n\nResample the densities within each sink/source so that like-measurements use the same scale.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#Visualizers","page":"Sediment Analysis Tools","title":"Visualizers","text":"","category":"section"},{"location":"SedimentTools/","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"measurement_heatmaps\nplot_densities\nsource_heatmaps\nplot_convergence\nplot_source_index","category":"page"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.measurement_heatmaps","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.measurement_heatmaps","text":"measurement_heatmaps(D::DensityTensor; kw...)\n\nReturns heatmaps for each measurement (lateral slices) of D.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.plot_densities","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.plot_densities","text":"distributions_plot(D::DensityTensor, measurement::String; kw...)\n\nReturns one plot will all distributions for a given measurement (lateral slice) of D.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.source_heatmaps","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.source_heatmaps","text":"source_heatmaps(D::DensityTensor; title=\"\", kw...)\n\nReturns heatmaps for each source (horizontal slices) of D.\n\nThe source name/index for each source will be appended to title.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.plot_convergence","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.plot_convergence","text":"plot_convergence(rel_errors, norm_grad, dist_Ncone)\n\nReturns 3 separate plots for the three convergence metrics on a log10-y scale.\n\n\n\n\n\nplot_convergence((rel_errors, norm_grad, dist_Ncone))\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#SedimentAnalysis.SedimentTools.plot_source_index","page":"Sediment Analysis Tools","title":"SedimentAnalysis.SedimentTools.plot_source_index","text":"plot_source_index(\nindexes::AbstractVector{<:Integer},\nloglikelihood_ratios::AbstractVector{<:Real};\nkwargs...\n)\n\nReturns one scatter plot of dots (eachindex(indexes), indexes) with brighter colours corresponding to higher loglikelihood_ratios.\n\n\n\n\n\n","category":"function"},{"location":"SedimentTools/#Index","page":"Sediment Analysis Tools","title":"Index","text":"","category":"section"},{"location":"SedimentTools/","page":"Sediment Analysis Tools","title":"Sediment Analysis Tools","text":"","category":"page"},{"location":"MTF/#Matrix-Tensor-Factorization","page":"Matrix Tensor Factorization","title":"Matrix Tensor Factorization","text":"","category":"section"},{"location":"MTF/#Types","page":"Matrix Tensor Factorization","title":"Types","text":"","category":"section"},{"location":"MTF/","page":"Matrix Tensor Factorization","title":"Matrix Tensor Factorization","text":"Abstract3Tensor","category":"page"},{"location":"MTF/#SedimentAnalysis.MTF.Abstract3Tensor","page":"Matrix Tensor Factorization","title":"SedimentAnalysis.MTF.Abstract3Tensor","text":"Alias for an AbstractArray{T, 3}.\n\n\n\n\n\n","category":"type"},{"location":"MTF/#Functions","page":"Matrix Tensor Factorization","title":"Functions","text":"","category":"section"},{"location":"MTF/","page":"Matrix Tensor Factorization","title":"Matrix Tensor Factorization","text":"*(::AbstractMatrix, ::Abstract3Tensor)\ncombined_norm\nd2_dx2\ndist_to_Ncone\nnnmtf\nplot_factors\nrel_error\nmean_rel_error","category":"page"},{"location":"MTF/#Base.:*-Tuple{AbstractMatrix, AbstractArray{T, 3} where T}","page":"Matrix Tensor Factorization","title":"Base.:*","text":"Base.*(A::AbstractMatrix, B::Abstract3Tensor)\n\nComputes the Abstract3Tensor C where C_ijk = sum_l=1^L A_il * B_ljk.\n\nWhen the third dimention of B has length 1, this is equivilent to the usual matrix-matrix multiplication. For this reason, we resuse the same symbol.\n\nThis is equivilent to the 1-mode product B times_1 A.\n\n\n\n\n\n","category":"method"},{"location":"MTF/#SedimentAnalysis.MTF.combined_norm","page":"Matrix Tensor Factorization","title":"SedimentAnalysis.MTF.combined_norm","text":"combined_norm(u, v, ...)\n\nCompute the combined norm of the arguments as if all arguments were part of one large array.\n\nThis is equivilent to norm(cat(u, v, ...)), but this implimentation avoids creating an intermediate array.\n\nu = [3 0]\nv = [0 4 0]\ncombined_norm(u, v)\n\n# output\n\n5.0\n\n\n\n\n\n","category":"function"},{"location":"MTF/#SedimentAnalysis.MTF.d2_dx2","page":"Matrix Tensor Factorization","title":"SedimentAnalysis.MTF.d2_dx2","text":"d2_dx2(y::AbstractVector{<:Real})\n\nApproximates the 2nd derivative of a function using only given samples y of that function.\n\nAssumes y came from f(x) where x was an evenly sampled, unit intervel grid. Note the approximation uses centered three point finite differences for the next-to-end points, and foward/backward three point differences for the begining/end points respectively. The remaining interior points use five point differences.\n\nForce only the third order approximation with third_order=true.\n\n\n\n\n\n","category":"function"},{"location":"MTF/#SedimentAnalysis.MTF.dist_to_Ncone","page":"Matrix Tensor Factorization","title":"SedimentAnalysis.MTF.dist_to_Ncone","text":"dist_to_Ncone(grad_C, grad_F, C, F)\n\nCalculate the distance of the -gradient to the normal cone of the positive orthant.\n\n\n\n\n\n","category":"function"},{"location":"MTF/#SedimentAnalysis.MTF.nnmtf","page":"Matrix Tensor Factorization","title":"SedimentAnalysis.MTF.nnmtf","text":"nnmtf(Y::Abstract3Tensor, R::Integer; kwargs...)\n\nNon-negatively matrix-tensor factorizes an order 3 tensor Y with a given \"rank\" R.\n\nFactorizes Y approx C F where displaystyle Yijk approx sum_r=1^R Cir*Frjk and the factors C F geq 0 are nonnegative.\n\nNote there may NOT be a unique optimal solution\n\nArguments\n\nY::Abstract3Tensor: tensor to factorize\nR::Integer: rank to factorize Y (size(C)[2] and size(F)[1])\n\nKeywords\n\nmaxiter::Integer=100: maxmimum number of iterations\ntol::Real=1e-3: desiered tolerance for the -gradient's distance to the normal cone\nrescale_CF::Bool=true: scale F at each iteration so that the factors (horizontal slices) have similar 3-fiber sums.\nrescale_Y::Bool=true: Preprocesses the input Y to have normalized 3-fiber sums (on average), and rescales the final F so Y=C*F.\nplot_F::Integer=0: if not 0, plot F every plot_F iterations\nnames::AbstractVector{String}=String[]: names of the slices of F to use for ploting\n\nReturns\n\nC::Matrix{Float64}: the matrix C in the factorization Y ≈ C * F\nF::Array{Float64, 3}: the tensor F in the factorization Y ≈ C * F\nrel_errors::Vector{Float64}: relative errors at each iteration\nnorm_grad::Vector{Float64}: norm of the full gradient at each iteration\ndist_Ncone::Vector{Float64}: distance of the -gradient to the normal cone at each iteration\n\n\n\n\n\n","category":"function"},{"location":"MTF/#SedimentAnalysis.MTF.plot_factors","page":"Matrix Tensor Factorization","title":"SedimentAnalysis.MTF.plot_factors","text":"plot_factors(F, names; appendtitle=\"\")\n\nPlot each horizontal slice of F. Names give the name of each vertical slice.\n\n\n\n\n\n","category":"function"},{"location":"MTF/#SedimentAnalysis.MTF.rel_error","page":"Matrix Tensor Factorization","title":"SedimentAnalysis.MTF.rel_error","text":"rel_error(x, xhat)\n\nCompute the relative error between x (true value) and xhat (its approximation).\n\nThe relative error is given by:\n\nfraclVert hatx - x rVertlVert x rVert\n\nSee also mean_rel_error.\n\n\n\n\n\n","category":"function"},{"location":"MTF/#SedimentAnalysis.MTF.mean_rel_error","page":"Matrix Tensor Factorization","title":"SedimentAnalysis.MTF.mean_rel_error","text":"mean_rel_error(X, Xhat; dims=2)\n\nCompute the mean relative error between the dims-order slices of X and Xhat.\n\nThe mean relative error is given by:\n\nfrac1Nsum_j=1^NfraclVert hatX_j - X_j rVertlVert X_j rVert\n\nSee also rel_error.\n\n\n\n\n\n","category":"function"},{"location":"MTF/#Index","page":"Matrix Tensor Factorization","title":"Index","text":"","category":"section"},{"location":"MTF/","page":"Matrix Tensor Factorization","title":"Matrix Tensor Factorization","text":"","category":"page"},{"location":"#Sediment-Source-Analysis","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"","category":"section"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"Depth = 3","category":"page"},{"location":"#How-setup-the-environment","page":"Sediment Source Analysis","title":"How setup the environment","text":"","category":"section"},{"location":"#In-Browser","page":"Sediment Source Analysis","title":"In Browser","text":"","category":"section"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"Go to https://github.com/codespaces/njericha-expert-space-goggles-96w695j9q5g274r7\nOpen the command palett with Ctrl+Shift+P (Windows) or Cmd+Shift+P (Mac)\nEnter >Julia: Start REPL\nIn the REPL, resolve any dependency issues with pkg> resolve (use julia> ] to get to the package manager)","category":"page"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"Run one of the example files by opening the file and pressing the triangular \"run\" button, or >Julia: Execute active File in REPL.","category":"page"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"OR","category":"page"},{"location":"#On-your-own-device","page":"Sediment Source Analysis","title":"On your own device","text":"","category":"section"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"Clone the repo at https://github.com/njericha/Sediment-Source-Analysis.jl\nNavigate to the root of the repository in a terminal and run julia\nActivate the project with pkg> activate . (use julia> ] to get to the package manager)\nresolve any dependency issues with pkg> resolve","category":"page"},{"location":"#Importing-the-package","page":"Sediment Source Analysis","title":"Importing the package","text":"","category":"section"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"Type julia> using SedimentAnalysis load both submodules (MTF and SedimentTools), or if only one of the modules is desired, type using SedimentAnalysis.XXX.","category":"page"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"The modules are built to be independent of each other so that (eventually) the MTF could be moved to an separate package altogether.","category":"page"},{"location":"#Examples","page":"Sediment Source Analysis","title":"Examples","text":"","category":"section"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"knownsources.jl: Uses data from Sundel et al where we know the sources of each Grain. Use this to see how well the factorization performs with realistic data. unknownsources.jl: Uses data from Lee et al where we don't have a ground truth. Showcases how the method would be used in practice. randomtensor: Factorizes a random 50x50x50 tensor. See how the factorization performs in theory when a perfect factorization exists.","category":"page"},{"location":"#Submodules","page":"Sediment Source Analysis","title":"Submodules","text":"","category":"section"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"The two main submodules are MTF (Matrix Tensor Factorization) and SedimentTools.","category":"page"},{"location":"#MTF","page":"Sediment Source Analysis","title":"MTF","text":"","category":"section"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"Defines the main factorization function nnmtf and related mathematical functions. See the full documentation here Matrix Tensor Factorization.","category":"page"},{"location":"#SedimentTools","page":"Sediment Source Analysis","title":"SedimentTools","text":"","category":"section"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"Holds various types at the [Grain], and [Sink] level, importing ([read_raw_data]) and processing data ([make_densities]) functions, and additional methods of some Plots.jl functions for visualization with these custom types.","category":"page"},{"location":"#Index","page":"Sediment Source Analysis","title":"Index","text":"","category":"section"},{"location":"","page":"Sediment Source Analysis","title":"Sediment Source Analysis","text":"","category":"page"}]
}
