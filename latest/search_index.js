var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#NLPModels.jl-documentation-1",
    "page": "Home",
    "title": "NLPModels.jl documentation",
    "category": "section",
    "text": "This package provides general guidelines to represent optimization problems in Julia and a standardized API to evaluate the functions and their derivatives. The main objective is to be able to rely on that API when designing optimization solvers in Julia."
},

{
    "location": "index.html#Introduction-1",
    "page": "Home",
    "title": "Introduction",
    "category": "section",
    "text": "The general form of the optimization problem isbeginalign*\nmin quad  f(x) \n c_i(x) = 0 quad i in E \n c_L_i leq c_i(x) leq c_U_i quad i in I \n ell leq x leq u\nendalign*where fmathbbR^nrightarrowmathbbR, cmathbbR^nrightarrowmathbbR^m, Ecup I = 12dotsm, Ecap I = emptyset, and c_L_i c_U_i ell_j u_j in mathbbRcuppminfty for i = 1dotsm and j = 1dotsn.For computational reasons, we writebeginalign*\nmin quad  f(x) \n c_L leq c(x) leq c_U \n ell leq x leq u\nendalign*defining c_L_i = c_U_i for all i in E. The Lagrangian of this problem is defined asL(xlambdaz^Lz^Usigma) = sigma f(x) + c(x)^Tlambda  + sum_i=1^n z_i^L(x_i-l_i) + sum_i=1^nz_i^U(u_i-x_i)where sigma is a scaling parameter included for computational reasons. Notice that, for the Hessian, the variables z^L and z^U are not used.Optimization problems are represented by an instance/subtype of AbstractNLPModel. Such instances are composed ofan instance of NLPModelMeta, which provides information about the problem, including the number of variables, constraints, bounds on the variables, etc.\nother data specific to the provenance of the problem."
},

{
    "location": "index.html#Nonlinear-Least-Squares-1",
    "page": "Home",
    "title": "Nonlinear Least Squares",
    "category": "section",
    "text": "A special type of NLPModels are the NLSModels, i.e., Nonlinear Least Squares models. In these problems, the function f(x) is given by frac12Vert F(x)Vert^2, where F is referred as the residual function. The individual value of F, as well as of its derivatives are also available."
},

{
    "location": "index.html#Tools-1",
    "page": "Home",
    "title": "Tools",
    "category": "section",
    "text": "There are a few tools to use on NLPModels, for instance to query whether the problem is constrained or not, and to get the number of function evaluations."
},

{
    "location": "index.html#Install-1",
    "page": "Home",
    "title": "Install",
    "category": "section",
    "text": "Install NLPModels.jl with the following commands.Pkg.add(\"NLPModels\")If you want the automatic differentiations models or the MathProgNLPModel, you also needPkg.add(\"ForwardDiff\")\nPkg.add(\"MathProgBase\")respectively. In addition, if you want to create a MathProgNLPModel from a JuMP model, you\'ll needPkg.add(\"JuMP\")"
},

{
    "location": "index.html#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "See the models, the tools, the tutorial, or the API."
},

{
    "location": "index.html#Internal-Interfaces-1",
    "page": "Home",
    "title": "Internal Interfaces",
    "category": "section",
    "text": "ADNLPModel: Uses ForwardDiff to compute the derivatives. It has a very simple interface, though it isn\'t very efficient for larger problems.\nMathProgNLPModel: Uses a MathProgModel, derived from a AbstractMathProgModel model. For instance, JuMP.jl models can be used.\nSimpleNLPModel: Only uses user defined functions.\nSlackModel: Creates an equality constrained problem with bounds  on the variables using an existing NLPModel.\nLBFGSModel: Creates a model using a LBFGS approximation to the Hessian using an existing NLPModel.\nLSR1Model: Creates a model using a LSR1 approximation to the Hessian using an existing NLPModel.\nADNLSModel: Similar to ADNLPModel, but for nonlinear least squares.\nFeasibilityResidual: Creates a nonlinear least squares model from an equality constrained problem in which the residual function is the constraints function.\nLLSModel: Creates a linear least squares model.\nSimpleNLSModel: Similar to SimpleNLPModel, but for nonlinear least squares."
},

{
    "location": "index.html#External-Interfaces-1",
    "page": "Home",
    "title": "External Interfaces",
    "category": "section",
    "text": "AmplModel: Defined in AmplNLReader.jl for problems modeled using AMPL\nCUTEstModel: Defined in CUTEst.jl for problems from CUTEst.If you want your interface here, open a PR."
},

{
    "location": "index.html#Attributes-1",
    "page": "Home",
    "title": "Attributes",
    "category": "section",
    "text": "NLPModelMeta objects have the following attributes:Attribute Type Notes\nnvar Int number of variables\nx0 Array{Float64,1} initial guess\nlvar Array{Float64,1} vector of lower bounds\nuvar Array{Float64,1} vector of upper bounds\nifix Array{Int64,1} indices of fixed variables\nilow Array{Int64,1} indices of variables with lower bound only\niupp Array{Int64,1} indices of variables with upper bound only\nirng Array{Int64,1} indices of variables with lower and upper bound (range)\nifree Array{Int64,1} indices of free variables\niinf Array{Int64,1} indices of visibly infeasible bounds\nncon Int total number of general constraints\nnlin Int number of linear constraints\nnnln Int number of nonlinear general constraints\nnnet Int number of nonlinear network constraints\ny0 Array{Float64,1} initial Lagrange multipliers\nlcon Array{Float64,1} vector of constraint lower bounds\nucon Array{Float64,1} vector of constraint upper bounds\nlin Range1{Int64} indices of linear constraints\nnln Range1{Int64} indices of nonlinear constraints (not network)\nnnet Range1{Int64} indices of nonlinear network constraints\njfix Array{Int64,1} indices of equality constraints\njlow Array{Int64,1} indices of constraints of the form c(x) ≥ cl\njupp Array{Int64,1} indices of constraints of the form c(x) ≤ cu\njrng Array{Int64,1} indices of constraints of the form cl ≤ c(x) ≤ cu\njfree Array{Int64,1} indices of \"free\" constraints (there shouldn\'t be any)\njinf Array{Int64,1} indices of the visibly infeasible constraints\nnnzj Int number of nonzeros in the sparse Jacobian\nnnzh Int number of nonzeros in the sparse Hessian\nminimize Bool true if optimize == minimize\nislp Bool true if the problem is a linear program\nname String problem name"
},

{
    "location": "index.html#License-1",
    "page": "Home",
    "title": "License",
    "category": "section",
    "text": "This content is released under the MIT License. (Image: ) "
},

{
    "location": "index.html#Contents-1",
    "page": "Home",
    "title": "Contents",
    "category": "section",
    "text": ""
},

{
    "location": "models.html#",
    "page": "Models",
    "title": "Models",
    "category": "page",
    "text": ""
},

{
    "location": "models.html#Models-1",
    "page": "Models",
    "title": "Models",
    "category": "section",
    "text": "The following general models are implemented in this package:ADNLPModel\nMathProgNLPModel\nSimpleNLPModel\nDerived Models\nSlackModel\nLBFGSModel\nLSR1ModelIn addition, the following nonlinear least squares models are implemented in this package:ADNLSModel\nFeasibilityResidual\nLLSModel\nSimpleNLSModelThere are other external models implemented. In particular,AmplModel\nCUTEstModelThere are currently three models implemented in this package, besides the external ones."
},

{
    "location": "models.html#NLPModels.ADNLPModel",
    "page": "Models",
    "title": "NLPModels.ADNLPModel",
    "category": "Type",
    "text": "ADNLPModel is an AbstractNLPModel using ForwardDiff to compute the derivatives. In this interface, the objective function f and an initial estimate are required. If there are constraints, the function cmathbbR^nrightarrowmathbbR^m  and the vectors c_L and c_U also need to be passed. Bounds on the variables and an inital estimate to the Lagrangian multipliers can also be provided.\n\nADNLPModel(f, x0; lvar = [-∞,…,-∞], uvar = [∞,…,∞], y0 = zeros,\n  c = NotImplemented, lcon = [-∞,…,-∞], ucon = [∞,…,∞], name = \"Generic\")\n\nf :: Function - The objective function f;\nx0 :: Vector - The initial point of the problem;\nlvar :: Vector - ell, the lower bound of the variables;\nuvar :: Vector - u, the upper bound of the variables;\nc :: Function - The constraints function c;\ny0 :: Vector - The initial value of the Lagrangian estimates;\nlcon :: Vector - c_L, the lower bounds of the constraints function;\nucon :: Vector - c_U, the upper bounds of the constraints function;\nname :: String - A name for the model.\n\nThe functions follow the same restrictions of ForwardDiff functions, summarised here:\n\nThe function can only be composed of generic Julia functions;\nThe function must accept only one argument;\nThe function\'s argument must accept a subtype of Vector;\nThe function should be type-stable.\n\nFor contrained problems, the function c is required, and it must return an array even when m = 1, and c_L and c_U should be passed, otherwise the problem is ill-formed. For equality constraints, the corresponding index of c_L and c_U should be the same.\n\n\n\n"
},

{
    "location": "models.html#ADNLPModel-1",
    "page": "Models",
    "title": "ADNLPModel",
    "category": "section",
    "text": "NLPModels.ADNLPModel"
},

{
    "location": "models.html#Example-1",
    "page": "Models",
    "title": "Example",
    "category": "section",
    "text": "using NLPModels\nf(x) = sum(x.^4)\nx = [1.0; 0.5; 0.25; 0.125]\nnlp = ADNLPModel(f, x)\ngrad(nlp, x)"
},

{
    "location": "models.html#NLPModels.MathProgNLPModel",
    "page": "Models",
    "title": "NLPModels.MathProgNLPModel",
    "category": "Type",
    "text": "Construct a MathProgNLPModel from a MathProgModel.\n\n\n\nConstruct a MathProgNLPModel from a JuMP Model.\n\n\n\n"
},

{
    "location": "models.html#MathProgNLPModel-1",
    "page": "Models",
    "title": "MathProgNLPModel",
    "category": "section",
    "text": "NLPModels.MathProgNLPModel"
},

{
    "location": "models.html#Example-2",
    "page": "Models",
    "title": "Example",
    "category": "section",
    "text": "using NLPModels, MathProgBase, JuMP\nm = Model()\n@variable(m, x[1:4])\n@NLobjective(m, Min, sum(x[i]^4 for i=1:4))\nnlp = MathProgNLPModel(m)\nx0 = [1.0; 0.5; 0.25; 0.125]\ngrad(nlp, x0)"
},

{
    "location": "models.html#NLPModels.SimpleNLPModel",
    "page": "Models",
    "title": "NLPModels.SimpleNLPModel",
    "category": "Type",
    "text": "SimpleNLPModel is an AbstractNLPModel that uses only user-defined functions. In this interface, the objective function f and an initial estimate are required. If the user wants to use derivatives, they need to be passed. The same goes for the Hessian and Hessian-Vector product. For constraints, cmathbbR^nrightarrowmathbbR^m  and the vectors c_L and c_U also need to be passed. Bounds on the variables and an inital estimate to the Lagrangian multipliers can also be provided. The user can also pass the Jacobian and the Lagrangian Hessian and Hessian-Vector product.\n\nSimpleNLPModel(f, x0; lvar = [-∞,…,-∞], uvar = [∞,…,∞], y0=zeros,\n  lcon = [-∞,…,-∞], ucon = [∞,…,∞], name = \"Generic\",\n  [list of functions])\n\nf :: Function - The objective function f;\nx0 :: Vector - The initial point of the problem;\nlvar :: Vector - ell, the lower bound of the variables;\nuvar :: Vector - u, the upper bound of the variables;\ny0 :: Vector - The initial value of the Lagrangian estimates;\nlcon :: Vector - c_L, the lower bounds of the constraints function;\nucon :: Vector - c_U, the upper bounds of the constraints function;\nname :: String - A name for the model.\n\nAll functions passed have a direct correlation with a NLP function. You don\'t have to define any more than you need, but calling an undefined function will throw a NotImplementedError. The list is\n\ng and g!: nabla f(x), the gradient of the objective function; see grad.\ngx = g(x) gx = g!(x, gx)\nH: The lower triangle of the Hessian of the objective function or of the Lagrangian; see hess.\nHx = H(x; obj_weight=1.0) # if the problem is unconstrained Hx = H(x; obj_weight=1.0, y=zeros) # if the problem is constrained\nHcoord - The lower triangle of the Hessian of the objective function or of the Lagrangian, in triplet format; see hess_coord.\n(rows,cols,vals) = Hcoord(x; obj_weight=1.0) # if the problem is unconstrained (rows,cols,vals) = Hcoord(x; obj_weight=1.0, y=zeros) # if the problem is constrained\nHp and Hp! - The product of the Hessian of the objective function or of the Lagrangian by a vector; see hprod.\nHv = Hp(x, v, obj_weight=1.0) # if the problem is unconstrained Hv = Hp!(x, v, Hv, obj_weight=1.0) # if the problem is unconstrained Hv = Hp(x, v, obj_weight=1.0, y=zeros) # if the problem is constrained Hv = Hp!(x, v, Hv, obj_weight=1.0, y=zeros) # if the problem is constrained\nc and c! - c(x), the constraints function; see cons.\ncx = c(x) cx = c!(x, cx)\nJ - J(x), the Jacobian of the constraints; see jac.\nJx = J(x)\nJcoord - J(x), the Jacobian of the constraints, in triplet format; see jac_coord.\n(rows,cols,vals) = Jcoord(x)\nJp and Jp! - The Jacobian-vector product; see jprod.\nJv = Jp(x, v) Jv = Jp!(x, v, Jv)\nJtp and Jtp! - The Jacobian-transposed-vector product; see jtprod.\nJtv = Jtp(x, v) Jtv = Jtp!(x, v, Jtv)\n\nFor contrained problems, the function c is required, and it must return an array even when m = 1, and c_L and c_U should be passed, otherwise the problem is ill-formed. For equality constraints, the corresponding index of c_L and c_U should be the same.\n\n\n\n"
},

{
    "location": "models.html#SimpleNLPModel-1",
    "page": "Models",
    "title": "SimpleNLPModel",
    "category": "section",
    "text": "NLPModels.SimpleNLPModel"
},

{
    "location": "models.html#Example-3",
    "page": "Models",
    "title": "Example",
    "category": "section",
    "text": "using NLPModels\nf(x) = sum(x.^4)\ng(x) = 4*x.^3\nx = [1.0; 0.5; 0.25; 0.125]\nnlp = SimpleNLPModel(f, x, g=g)\ngrad(nlp, x)"
},

{
    "location": "models.html#Derived-Models-1",
    "page": "Models",
    "title": "Derived Models",
    "category": "section",
    "text": "The following models are created from any given model, making some modification to that model."
},

{
    "location": "models.html#NLPModels.SlackModel",
    "page": "Models",
    "title": "NLPModels.SlackModel",
    "category": "Type",
    "text": "A model whose only inequality constraints are bounds.\n\nGiven a model, this type represents a second model in which slack variables are introduced so as to convert linear and nonlinear inequality constraints to equality constraints and bounds. More precisely, if the original model has the form\n\n\\[ \\min f(x)  \\mbox{ s. t. }  c_L \\leq c(x) \\leq c_U \\mbox{ and } \\ell \\leq x \\leq u, \\]\n\nthe new model appears to the user as\n\n\\[ \\min f(X)  \\mbox{ s. t. }  g(X) = 0 \\mbox{ and } L \\leq X \\leq U. \\]\n\nThe unknowns X = (x s) contain the original variables and slack variables s. The latter are such that the new model has the general form\n\n\\[ \\min f(x)  \\mbox{ s. t. }  c(x) - s = 0, c_L \\leq s \\leq c_U \\mbox{ and } \\ell \\leq x \\leq u, \\]\n\nalthough no slack variables are introduced for equality constraints.\n\nThe slack variables are implicitly ordered as [s(low), s(upp), s(rng)], where low, upp and rng represent the indices of the constraints of the form c_L leq c(x)  infty, -infty  c(x) leq c_U and c_L leq c(x) leq c_U, respectively.\n\n\n\n"
},

{
    "location": "models.html#SlackModel-1",
    "page": "Models",
    "title": "SlackModel",
    "category": "section",
    "text": "NLPModels.SlackModel"
},

{
    "location": "models.html#Example-4",
    "page": "Models",
    "title": "Example",
    "category": "section",
    "text": "using NLPModels\nf(x) = x[1]^2 + 4x[2]^2\nc(x) = [x[1]*x[2] - 1]\nx = [2.0; 2.0]\nnlp = ADNLPModel(f, x, c=c, lcon=[0.0])\nnlp_slack = SlackModel(nlp)\nnlp_slack.meta.lvar"
},

{
    "location": "models.html#NLPModels.LBFGSModel",
    "page": "Models",
    "title": "NLPModels.LBFGSModel",
    "category": "Type",
    "text": "Construct a LBFGSModel from another type of model.\n\n\n\n"
},

{
    "location": "models.html#LBFGSModel-1",
    "page": "Models",
    "title": "LBFGSModel",
    "category": "section",
    "text": "NLPModels.LBFGSModel"
},

{
    "location": "models.html#NLPModels.LSR1Model",
    "page": "Models",
    "title": "NLPModels.LSR1Model",
    "category": "Type",
    "text": "Construct a LSR1Model from another type of nlp.\n\n\n\n"
},

{
    "location": "models.html#LSR1Model-1",
    "page": "Models",
    "title": "LSR1Model",
    "category": "section",
    "text": "NLPModels.LSR1Model"
},

{
    "location": "models.html#NLPModels.ADNLSModel",
    "page": "Models",
    "title": "NLPModels.ADNLSModel",
    "category": "Type",
    "text": "ADNLSModel is an Nonlinear Least Squares model using ForwardDiff to compute the derivatives.\n\nADNLSModel(F, x0, m; lvar = [-∞,…,-∞], uvar = [∞,…,∞], y0 = zeros,\n  c = NotImplemented, lcon = [-∞,…,-∞], ucon = [∞,…,∞], name = \"Generic\")\n\nF :: Function - The residual function F;\nx0 :: Vector - The initial point of the problem;\nm :: Int - The dimension of F(x), i.e., the number of\n\nequations in the nonlinear system.\n\nThe other parameters are as in ADNLPModel.\n\n\n\n"
},

{
    "location": "models.html#ADNLSModel-1",
    "page": "Models",
    "title": "ADNLSModel",
    "category": "section",
    "text": "NLPModels.ADNLSModelusing NLPModels\nF(x) = [x[1] - 1; 10*(x[2] - x[1]^2)]\nnlp = ADNLSModel(F, [-1.2; 1.0], 2)\nresidual(nlp, nlp.meta.x0)"
},

{
    "location": "models.html#NLPModels.FeasibilityResidual",
    "page": "Models",
    "title": "NLPModels.FeasibilityResidual",
    "category": "Type",
    "text": "A feasibility residual model is created from a NLPModel of the form\n\nmin f(x)\ns.t c(x) = 0\n\nby defining the function F(x) = c(x). If the problem has bounds on the variables or more constraints, an error is thrown.\n\n\n\n"
},

{
    "location": "models.html#FeasibilityResidual-1",
    "page": "Models",
    "title": "FeasibilityResidual",
    "category": "section",
    "text": "NLPModels.FeasibilityResidual"
},

{
    "location": "models.html#NLPModels.LLSModel",
    "page": "Models",
    "title": "NLPModels.LLSModel",
    "category": "Type",
    "text": "nls = LLSModel(A, b; lvar, uvar, C, lcon, ucon)\n\nCreates a Linear Least Squares model ½‖Ax - b‖² with optional bounds lvar ≦ x ≦ y and optional linear constraints lcon ≦ Cx ≦ ucon.\n\n\n\n"
},

{
    "location": "models.html#LLSModel-1",
    "page": "Models",
    "title": "LLSModel",
    "category": "section",
    "text": "NLPModels.LLSModel"
},

{
    "location": "models.html#NLPModels.SimpleNLSModel",
    "page": "Models",
    "title": "NLPModels.SimpleNLSModel",
    "category": "Type",
    "text": "nls = SimpleNLSModel(n;  F=F, F! =F!, JF=JF, JFp=JFp, JFp! =JFp!,\nJFtp=JFtp, JFtp! =JFtp!)\nnls = SimpleNLSModel(x0; F=F, F! =F!, JF=JF, JFp=JFp, JFp! =JFp!,\nJFtp=JFtp, JFtp! =JFtp!)\n\nCreates a Nonlinear Linear Least Squares model to minimize ‖F(x)‖². If JF = JF(x) is passed, the Jacobian is available.\n\n\n\n"
},

{
    "location": "models.html#SimpleNLSModel-1",
    "page": "Models",
    "title": "SimpleNLSModel",
    "category": "section",
    "text": "NLPModels.SimpleNLSModel"
},

{
    "location": "tools.html#",
    "page": "Tools",
    "title": "Tools",
    "category": "page",
    "text": ""
},

{
    "location": "tools.html#Tools-1",
    "page": "Tools",
    "title": "Tools",
    "category": "section",
    "text": ""
},

{
    "location": "tools.html#Functions-evaluations-1",
    "page": "Tools",
    "title": "Functions evaluations",
    "category": "section",
    "text": "After calling one the API functions to get a function value, the number of times that function was called is stored inside the NLPModel. For instanceusing NLPModels\nnlp = ADNLPModel(x -> dot(x, x), zeros(2))\nfor i = 1:100\n    obj(nlp, rand(2))\nend\nneval_obj(nlp)Some counters are available for all models, some are specific. In particular, there are additional specific counters for the nonlinear least squares models.Counter Description\nneval_obj Objective\nneval_grad Gradient\nneval_cons Constraints\nneval_jcon One constraint - unused\nneval_jgrad Gradient of one constraints - unused\nneval_jac Jacobian\nneval_jprod Product of Jacobian and vector\nneval_jtprod Product of transposed Jacobian and vector\nneval_hess Hessian\nneval_hprod Product of Hessian and vector\nneval_jhprod Product of Hessian of j-th function and vector\nneval_residual Residual function of nonlinear least squares model\nneval_jac_residual Jacobian of the residual\nneval_jprod_residual Product of Jacobian of residual and vector\nneval_jtprod_residual Product of transposed Jacobian of residual and vector\nneval_hess_residual Hessian of a residual component\nneval_hprod_residual Product of Hessian of a residual component and vectorTo get the sum of all counters called for a problem, use sum_counters.using NLPModels\nnlp = ADNLPModel(x -> dot(x, x), zeros(2))\nobj(nlp, rand(2))\ngrad(nlp, rand(2))\nsum_counters(nlp)"
},

{
    "location": "tools.html#Querying-problem-type-1",
    "page": "Tools",
    "title": "Querying problem type",
    "category": "section",
    "text": "There are some variable for querying the problem type:bound_constrained: True for problems with bounded variables and no other constraints.\nequality_constrained: True when problem is constrained only by equalities.\nhas_bounds: True when not all variables are free.\ninequality_constrained: True when problem is constrained by inequalities.\nlinearly_constrained: True when problem is constrained by equalities or inequalities known to be linear.\nunconstrained: True when problem is not constrained."
},

{
    "location": "tools.html#NLPModels.neval_obj",
    "page": "Tools",
    "title": "NLPModels.neval_obj",
    "category": "Function",
    "text": "NLPModels.neval_obj(nlp)\n\nGet the number of obj evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_grad",
    "page": "Tools",
    "title": "NLPModels.neval_grad",
    "category": "Function",
    "text": "NLPModels.neval_grad(nlp)\n\nGet the number of grad evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_cons",
    "page": "Tools",
    "title": "NLPModels.neval_cons",
    "category": "Function",
    "text": "NLPModels.neval_cons(nlp)\n\nGet the number of cons evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_jcon",
    "page": "Tools",
    "title": "NLPModels.neval_jcon",
    "category": "Function",
    "text": "NLPModels.neval_jcon(nlp)\n\nGet the number of jcon evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_jgrad",
    "page": "Tools",
    "title": "NLPModels.neval_jgrad",
    "category": "Function",
    "text": "NLPModels.neval_jgrad(nlp)\n\nGet the number of jgrad evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_jac",
    "page": "Tools",
    "title": "NLPModels.neval_jac",
    "category": "Function",
    "text": "NLPModels.neval_jac(nlp)\n\nGet the number of jac evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_jprod",
    "page": "Tools",
    "title": "NLPModels.neval_jprod",
    "category": "Function",
    "text": "NLPModels.neval_jprod(nlp)\n\nGet the number of jprod evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_jtprod",
    "page": "Tools",
    "title": "NLPModels.neval_jtprod",
    "category": "Function",
    "text": "NLPModels.neval_jtprod(nlp)\n\nGet the number of jtprod evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_hess",
    "page": "Tools",
    "title": "NLPModels.neval_hess",
    "category": "Function",
    "text": "NLPModels.neval_hess(nlp)\n\nGet the number of hess evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_hprod",
    "page": "Tools",
    "title": "NLPModels.neval_hprod",
    "category": "Function",
    "text": "NLPModels.neval_hprod(nlp)\n\nGet the number of hprod evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_jhprod",
    "page": "Tools",
    "title": "NLPModels.neval_jhprod",
    "category": "Function",
    "text": "NLPModels.neval_jhprod(nlp)\n\nGet the number of jhprod evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_residual",
    "page": "Tools",
    "title": "NLPModels.neval_residual",
    "category": "Function",
    "text": "NLPModels.neval_residual(nlp)\n\nGet the number of residual evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_jac_residual",
    "page": "Tools",
    "title": "NLPModels.neval_jac_residual",
    "category": "Function",
    "text": "NLPModels.neval_jac_residual(nlp)\n\nGet the number of jac evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_jprod_residual",
    "page": "Tools",
    "title": "NLPModels.neval_jprod_residual",
    "category": "Function",
    "text": "NLPModels.neval_jprod_residual(nlp)\n\nGet the number of jprod evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_jtprod_residual",
    "page": "Tools",
    "title": "NLPModels.neval_jtprod_residual",
    "category": "Function",
    "text": "NLPModels.neval_jtprod_residual(nlp)\n\nGet the number of jtprod evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_hess_residual",
    "page": "Tools",
    "title": "NLPModels.neval_hess_residual",
    "category": "Function",
    "text": "NLPModels.neval_hess_residual(nlp)\n\nGet the number of hess evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.neval_hprod_residual",
    "page": "Tools",
    "title": "NLPModels.neval_hprod_residual",
    "category": "Function",
    "text": "NLPModels.neval_hprod_residual(nlp)\n\nGet the number of hprod evaluations.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.sum_counters",
    "page": "Tools",
    "title": "NLPModels.sum_counters",
    "category": "Function",
    "text": "sum_counters(counters)\n\nSum all counters of counters.\n\n\n\nsum_counters(nlp)\n\nSum all counters of problem nlp.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.bound_constrained",
    "page": "Tools",
    "title": "NLPModels.bound_constrained",
    "category": "Function",
    "text": "bound_constrained(nlp)\nbound_constrained(meta)\n\nReturns whether the problem has bounds on the variables and no other constraints.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.equality_constrained",
    "page": "Tools",
    "title": "NLPModels.equality_constrained",
    "category": "Function",
    "text": "equality_constrained(nlp)\nequality_constrained(meta)\n\nReturns whether the problem\'s constraints are all equalities. Unconstrained problems return false.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.has_bounds",
    "page": "Tools",
    "title": "NLPModels.has_bounds",
    "category": "Function",
    "text": "has_bounds(nlp)\nhas_bounds(meta)\n\nReturns whether the problem has bounds on the variables.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.inequality_constrained",
    "page": "Tools",
    "title": "NLPModels.inequality_constrained",
    "category": "Function",
    "text": "inequality_constrained(nlp)\ninequality_constrained(meta)\n\nReturns whether the problem\'s constraints are all inequalities. Unconstrained problems return true.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.linearly_constrained",
    "page": "Tools",
    "title": "NLPModels.linearly_constrained",
    "category": "Function",
    "text": "linearly_constrained(nlp)\nlinearly_constrained(meta)\n\nReturns whether the problem\'s constraints are known to be all linear.\n\n\n\n"
},

{
    "location": "tools.html#NLPModels.unconstrained",
    "page": "Tools",
    "title": "NLPModels.unconstrained",
    "category": "Function",
    "text": "unconstrained(nlp)\nunconstrained(meta)\n\nReturns whether the problem in unconstrained.\n\n\n\n"
},

{
    "location": "tools.html#Docs-1",
    "page": "Tools",
    "title": "Docs",
    "category": "section",
    "text": "neval_obj\nneval_grad\nneval_cons\nneval_jcon\nneval_jgrad\nneval_jac\nneval_jprod\nneval_jtprod\nneval_hess\nneval_hprod\nneval_jhprod\nneval_residual\nneval_jac_residual\nneval_jprod_residual\nneval_jtprod_residual\nneval_hess_residual\nneval_hprod_residual\nsum_counters\nbound_constrained\nequality_constrained\nhas_bounds\ninequality_constrained\nlinearly_constrained\nunconstrained"
},

{
    "location": "tutorial.html#",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "page",
    "text": ""
},

{
    "location": "tutorial.html#Tutorial-1",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "section",
    "text": "NLPModels.jl was created for two purposes:Allow users to access problem databases in an unified way.Mainly, this means  CUTEst.jl,  but it also gives access to AMPL  problems,  as well as JuMP defined problems (e.g. as in  OptimizationProblems.jl).Allow users to create their own problems in the same way.As a consequence, optimization methods designed according to the NLPModels API  will accept NLPModels of any provenance.  See, for instance,  Optimize.jl.The main interfaces for user defined problems areADNLPModel, which defines a model easily, using automatic differentiation.\nSimpleNLPModel, which allows users to handle all functions themselves, giving"
},

{
    "location": "tutorial.html#ADNLPModel-Tutorial-1",
    "page": "Tutorial",
    "title": "ADNLPModel Tutorial",
    "category": "section",
    "text": "ADNLPModel is simple to use and is useful for classrooms. It only needs the objective function f and a starting point x^0 to be well-defined. For constrained problems, you\'ll also need the constraints function c, and the constraints vectors c_L and c_U, such that c_L leq c(x) leq c_U. Equality constraints will be automatically identified as those indices i for which c_L_i = c_U_i.Let\'s define the famous Rosenbrock functionf(x) = (x_1 - 1)^2 + 100(x_2 - x_1^2)^2with starting point x^0 = (-1210).using NLPModels\n\nnlp = ADNLPModel(x->(x[1] - 1.0)^2 + 100*(x[2] - x[1]^2)^2 , [-1.2; 1.0])This is enough to define the model. Let\'s get the objective function value at x^0, using only nlp.fx = obj(nlp, nlp.meta.x0)\nprintln(\"fx = $fx\")Done. Let\'s try the gradient and Hessian.gx = grad(nlp, nlp.meta.x0)\nHx = hess(nlp, nlp.meta.x0)\nprintln(\"gx = $gx\")\nprintln(\"Hx = $Hx\")Notice how only the lower triangle of the Hessian is stored. Also notice that it is dense. This is a current limitation of this model. It doesn\'t return sparse matrices, so use it with care.Let\'s do something a little more complex here, defining a function to try to solve this problem through steepest descent method with Armijo search. Namely, the methodGiven x^0, varepsilon  0, and eta in (01). Set k = 0;\nIf Vert nabla f(x^k) Vert  varepsilon STOP with x^* = x^k;\nCompute d^k = -nabla f(x^k);\nCompute alpha_k in (01 such that f(x^k + alpha_kd^k)  f(x^k) + alpha_keta nabla f(x^k)^Td^k\nDefine x^k+1 = x^k + alpha_kx^k\nUpdate k = k + 1 and go to step 2.function steepest(nlp; itmax=100000, eta=1e-4, eps=1e-6, sigma=0.66)\n  x = nlp.meta.x0\n  fx = obj(nlp, x)\n  ∇fx = grad(nlp, x)\n  slope = dot(∇fx, ∇fx)\n  ∇f_norm = sqrt(slope)\n  iter = 0\n  while ∇f_norm > eps && iter < itmax\n    t = 1.0\n    x_trial = x - t * ∇fx\n    f_trial = obj(nlp, x_trial)\n    while f_trial > fx - eta * t * slope\n      t *= sigma\n      x_trial = x - t * ∇fx\n      f_trial = obj(nlp, x_trial)\n    end\n    x = x_trial\n    fx = f_trial\n    ∇fx = grad(nlp, x)\n    slope = dot(∇fx, ∇fx)\n    ∇f_norm = sqrt(slope)\n    iter += 1\n  end\n  optimal = ∇f_norm <= eps\n  return x, fx, ∇f_norm, optimal, iter\nend\n\nx, fx, ngx, optimal, iter = steepest(nlp)\nprintln(\"x = $x\")\nprintln(\"fx = $fx\")\nprintln(\"ngx = $ngx\")\nprintln(\"optimal = $optimal\")\nprintln(\"iter = $iter\")Maybe this code is too complicated? If you\'re in a class you just want to show a Newton step.g(x) = grad(nlp, x)\nH(x) = hess(nlp, x) + triu(hess(nlp, x)\', 1)\nx = nlp.meta.x0\nd = -H(x)\\g(x)or a fewfor i = 1:5\n  x = x - H(x)\\g(x)\n  println(\"x = $x\")\nendAlso, notice how we can reuse the method.f(x) = (x[1]^2 + x[2]^2 - 4)^2 + (x[1]*x[2] - 1)^2\nx0 = [2.0; 1.0]\nnlp = ADNLPModel(f, x0)\n\nx, fx, ngx, optimal, iter = steepest(nlp)Even using a different model.using OptimizationProblems # Defines a lot of JuMP models\n\nnlp = MathProgNLPModel(woods())\nx, fx, ngx, optimal, iter = steepest(nlp)\nprintln(\"fx = $fx\")\nprintln(\"ngx = $ngx\")\nprintln(\"optimal = $optimal\")\nprintln(\"iter = $iter\")For constrained minimization, you need the constraints vector and bounds too. Bounds on the variables can be passed through a new vector.using NLPModels # hide\nf(x) = (x[1] - 1.0)^2 + 100*(x[2] - x[1]^2)^2\nx0 = [-1.2; 1.0]\nlvar = [-Inf; 0.1]\nuvar = [0.5; 0.5]\nc(x) = [x[1] + x[2] - 2; x[1]^2 + x[2]^2]\nlcon = [0.0; -Inf]\nucon = [Inf; 1.0]\nnlp = ADNLPModel(f, x0, c=c, lvar=lvar, uvar=uvar, lcon=lcon, ucon=ucon)\n\nprintln(\"cx = $(cons(nlp, nlp.meta.x0))\")\nprintln(\"Jx = $(jac(nlp, nlp.meta.x0))\")"
},

{
    "location": "tutorial.html#SimpleNLPModel-Tutorial-1",
    "page": "Tutorial",
    "title": "SimpleNLPModel Tutorial",
    "category": "section",
    "text": "SimpleNLPModel allows you to pass every single function of the model. On the other hand, it doesn\'t handle anything else. Calling an undefined function will throw a NotImplementedError. Only the objective function is mandatory (if you don\'t need it, pass x->0).using NLPModels\n\nf(x) = (x[1] - 1.0)^2 + 4*(x[2] - 1.0)^2\nx0 = zeros(2)\nnlp = SimpleNLPModel(f, x0)\n\nfx = obj(nlp, nlp.meta.x0)\nprintln(\"fx = $fx\")\n\n# grad(nlp, nlp.meta.x0) # This is undefinedg(x) = [2*(x[1] - 1.0); 8*(x[2] - 1.0)]\nnlp = SimpleNLPModel(f, x0, g=g)\n\ngrad(nlp, nlp.meta.x0)\"But what\'s to stop me from defining g however I want?\" Nothing. So you have to be careful on how you\'re defining it. You should probably check your derivatives. If the function is simply defined, you can try using automatic differentiation. Alternatively, you can use the derivative checker.gradient_check(nlp)gwrong(x) = [2*(x[1] - 1.0); 8*x[2] - 1.0] # Find the error\nnlp = SimpleNLPModel(f, x0, g=gwrong)\ngradient_check(nlp)For constrained problems, we still need the constraints function, lcon and ucon. Also, let\'s pass the Jacobian-vector product.c(x) = [x[1]^2 + x[2]^2; x[1]*x[2] - 1]\nlcon = [1.0; 0.0]\nucon = [4.0; 0.0]\nJacprod(x, v) = [2*x[1]*v[1] + 2*x[2]*v[2]; x[2]*v[1] + x[1]*v[2]]\nnlp = SimpleNLPModel(f, x0, c=c, lcon=lcon, ucon=ucon, g=g, Jp=Jacprod)\njprod(nlp, ones(2), ones(2))Furthermore, NLPModels also works with inplace operations. Since some models do not take full advantage of this (like ADNLPModel), a user might want to define his/her own functions that do.using NLPModels # hide\nf(x) = (x[1] - 1.0)^2 + 4*(x[2] - 1.0)^2\nx0 = zeros(2)\ng!(x, gx) = begin\n  gx[1] = 2*(x[1] - 1.0)\n  gx[2] = 8*(x[2] = 1.0)\n  return gx\nend\nnlp = SimpleNLPModel(f, x0, g! =g!) # Watchout, g!=g! is interpreted as g != g!\ngx = zeros(2)\ngrad!(nlp, nlp.meta.x0, gx)"
},

{
    "location": "api.html#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api.html#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": "As stated in the home page, we consider the nonlinear optimization problem in the following format:beginalign*\nmin quad  f(x) \n c_L leq c(x) leq c_U \n ell leq x leq u\nendalign*To develop an optimization algorithm, we are usually worried not only with f(x) and c(x), but also with their derivatives. Namely,nabla f(x), the gradient of f at the point x;\nnabla^2 f(x), the Hessian of f at the point x;\nJ(x) = nabla c(x), the Jacobian of c at the point x;\nnabla^2 f(x) + sum_i=1^m lambda_i nabla^2 c_i(x), the Hessian of the Lagrangian function at the point (xlambda).There are many ways to access some of these values, so here is a little reference guide."
},

{
    "location": "api.html#Reference-guide-1",
    "page": "API",
    "title": "Reference guide",
    "category": "section",
    "text": "The following naming should be easy enough to follow. If not, click on the link and go to the description.! means inplace;\n_coord means coordinate format;\nprod means matrix-vector product;\n_op means operator (as in LinearOperators.jl).Feel free to open an issue to suggest other methods that should apply to all NLPModels instances.Function NLPModels function\nf(x) obj, objgrad, objgrad!, objcons, objcons!\nnabla f(x) grad, grad!, objgrad, objgrad!\nnabla^2 f(x) hess, hess_op, hess_op!, hess_coord, hprod, hprod!\nc(x) cons, cons!, objcons, objcons!\nJ(x) jac, jac_op, jac_op!, jac_coord, jprod, jprod!, jtprod, jtprod!\nnabla^2 L(xy) hess, hess_op, hess_coord, hprod, hprod!"
},

{
    "location": "api.html#API-for-NLSModels-1",
    "page": "API",
    "title": "API for NLSModels",
    "category": "section",
    "text": "For the Nonlinear Least Squares models, f(x) = Vert F(x)Vert^2, and these models have additional function to access the residual value and its derivatives. Namely,J_F(x) = nabla F(x)\nnabla^2 F_i(x)Function function\nF(x) residual, residual!\nJ_F(x) jac_residual, jprod_residual, jprod_residual!, jtprod_residual, jtprod_residual!, jac_op_residual, jac_op_residual!\nnabla^2 F_i(x) hess_residual, hprod_residual, hprod_residual!, hess_op_residual, hess_op_residual!"
},

{
    "location": "api.html#NLPModels.obj",
    "page": "API",
    "title": "NLPModels.obj",
    "category": "Function",
    "text": "f = obj(nlp, x)\n\nEvaluate f(x), the objective function of nlp at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.grad",
    "page": "API",
    "title": "NLPModels.grad",
    "category": "Function",
    "text": "g = grad(nlp, x)\n\nEvaluate nabla f(x), the gradient of the objective function at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.grad!",
    "page": "API",
    "title": "NLPModels.grad!",
    "category": "Function",
    "text": "g = grad!(nlp, x, g)\n\nEvaluate nabla f(x), the gradient of the objective function at x in place.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.objgrad",
    "page": "API",
    "title": "NLPModels.objgrad",
    "category": "Function",
    "text": "f, g = objgrad(nlp, x)\n\nEvaluate f(x) and nabla f(x) at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.objgrad!",
    "page": "API",
    "title": "NLPModels.objgrad!",
    "category": "Function",
    "text": "f, g = objgrad!(nlp, x, g)\n\nEvaluate f(x) and nabla f(x) at x. g is overwritten with the value of nabla f(x).\n\n\n\n"
},

{
    "location": "api.html#NLPModels.cons",
    "page": "API",
    "title": "NLPModels.cons",
    "category": "Function",
    "text": "c = cons(nlp, x)\n\nEvaluate c(x), the constraints at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.cons!",
    "page": "API",
    "title": "NLPModels.cons!",
    "category": "Function",
    "text": "c = cons!(nlp, x, c)\n\nEvaluate c(x), the constraints at x in place.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.objcons",
    "page": "API",
    "title": "NLPModels.objcons",
    "category": "Function",
    "text": "f, c = objcons(nlp, x)\n\nEvaluate f(x) and c(x) at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.objcons!",
    "page": "API",
    "title": "NLPModels.objcons!",
    "category": "Function",
    "text": "f = objcons!(nlp, x, c)\n\nEvaluate f(x) and c(x) at x. c is overwritten with the value of c(x).\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jac_coord",
    "page": "API",
    "title": "NLPModels.jac_coord",
    "category": "Function",
    "text": "(rows,cols,vals) = jac_coord(nlp, x)\n\nEvaluate nabla c(x), the constraint\'s Jacobian at x in sparse coordinate format.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jac",
    "page": "API",
    "title": "NLPModels.jac",
    "category": "Function",
    "text": "Jx = jac(nlp, x)\n\nEvaluate nabla c(x), the constraint\'s Jacobian at x as a sparse matrix.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jac_op",
    "page": "API",
    "title": "NLPModels.jac_op",
    "category": "Function",
    "text": "J = jac_op(nlp, x)\n\nReturn the Jacobian at x as a linear operator. The resulting object may be used as if it were a matrix, e.g., J * v or J\' * v.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jac_op!",
    "page": "API",
    "title": "NLPModels.jac_op!",
    "category": "Function",
    "text": "J = jac_op!(nlp, x, Jv, Jtv)\n\nReturn the Jacobian at x as a linear operator. The resulting object may be used as if it were a matrix, e.g., J * v or J\' * v. The values Jv and Jtv are used as preallocated storage for the operations.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jprod",
    "page": "API",
    "title": "NLPModels.jprod",
    "category": "Function",
    "text": "Jv = jprod(nlp, x, v)\n\nEvaluate nabla c(x)v, the Jacobian-vector product at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jprod!",
    "page": "API",
    "title": "NLPModels.jprod!",
    "category": "Function",
    "text": "Jv = jprod!(nlp, x, v, Jv)\n\nEvaluate nabla c(x)v, the Jacobian-vector product at x in place.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jtprod",
    "page": "API",
    "title": "NLPModels.jtprod",
    "category": "Function",
    "text": "Jtv = jtprod(nlp, x, v, Jtv)\n\nEvaluate nabla c(x)^Tv, the transposed-Jacobian-vector product at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jtprod!",
    "page": "API",
    "title": "NLPModels.jtprod!",
    "category": "Function",
    "text": "Jtv = jtprod!(nlp, x, v, Jtv)\n\nEvaluate nabla c(x)^Tv, the transposed-Jacobian-vector product at x in place.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hess_coord",
    "page": "API",
    "title": "NLPModels.hess_coord",
    "category": "Function",
    "text": "(rows,cols,vals) = hess_coord(nlp, x; obj_weight=1.0, y=zeros)\n\nEvaluate the Lagrangian Hessian at (x,y) in sparse coordinate format, with objective function scaled by obj_weight, i.e.,\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum_{i=1}^m y_i\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight. Only the lower triangle is returned.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hess",
    "page": "API",
    "title": "NLPModels.hess",
    "category": "Function",
    "text": "Hx = hess(nlp, x; obj_weight=1.0, y=zeros)\n\nEvaluate the Lagrangian Hessian at (x,y) as a sparse matrix, with objective function scaled by obj_weight, i.e.,\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum_{i=1}^m y_i\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight. Only the lower triangle is returned.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hess_op",
    "page": "API",
    "title": "NLPModels.hess_op",
    "category": "Function",
    "text": "H = hess_op(nlp, x; obj_weight=1.0, y=zeros)\n\nReturn the Lagrangian Hessian at (x,y) with objective function scaled by obj_weight as a linear operator. The resulting object may be used as if it were a matrix, e.g., H * v. The linear operator H represents\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum_{i=1}^m y_i\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hess_op!",
    "page": "API",
    "title": "NLPModels.hess_op!",
    "category": "Function",
    "text": "H = hess_op!(nlp, x, Hv; obj_weight=1.0, y=zeros)\n\nReturn the Lagrangian Hessian at (x,y) with objective function scaled by obj_weight as a linear operator, and storing the result on Hv. The resulting object may be used as if it were a matrix, e.g., w = H * v. The vector Hv is used as preallocated storage for the operation.  The linear operator H represents\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum_{i=1}^m y_i\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hprod",
    "page": "API",
    "title": "NLPModels.hprod",
    "category": "Function",
    "text": "Hv = hprod(nlp, x, v; obj_weight=1.0, y=zeros)\n\nEvaluate the product of the Lagrangian Hessian at (x,y) with the vector v, with objective function scaled by obj_weight, i.e.,\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum_{i=1}^m y_i\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hprod!",
    "page": "API",
    "title": "NLPModels.hprod!",
    "category": "Function",
    "text": "Hv = hprod!(nlp, x, v, Hv; obj_weight=1.0, y=zeros)\n\nEvaluate the product of the Lagrangian Hessian at (x,y) with the vector v in place, with objective function scaled by obj_weight, i.e.,\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum_{i=1}^m y_i\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.NLPtoMPB",
    "page": "API",
    "title": "NLPModels.NLPtoMPB",
    "category": "Function",
    "text": "mp = NLPtoMPB(nlp, solver)\n\nReturn a MathProgBase model corresponding to an AbstractNLPModel.\n\nArguments\n\nnlp::AbstractNLPModel\nsolver::AbstractMathProgSolver a solver instance, e.g., IpoptSolver()\n\nCurrently, all models are treated as nonlinear models.\n\nReturn values\n\nThe function returns a MathProgBase model mpbmodel such that it should be possible to call\n\nMathProgBase.optimize!(mpbmodel)\n\n\n\n"
},

{
    "location": "api.html#LinearOperators.reset!",
    "page": "API",
    "title": "LinearOperators.reset!",
    "category": "Function",
    "text": "reset!(counters)\n\nReset evaluation counters\n\n\n\n`reset!(nlp)\n\nReset evaluation count in nlp\n\n\n\n"
},

{
    "location": "api.html#AbstractNLPModel-functions-1",
    "page": "API",
    "title": "AbstractNLPModel functions",
    "category": "section",
    "text": "obj\ngrad\ngrad!\nobjgrad\nobjgrad!\ncons\ncons!\nobjcons\nobjcons!\njac_coord\njac\njac_op\njac_op!\njprod\njprod!\njtprod\njtprod!\nhess_coord\nhess\nhess_op\nhess_op!\nhprod\nhprod!\nNLPtoMPB\nreset!"
},

{
    "location": "api.html#NLPModels.residual",
    "page": "API",
    "title": "NLPModels.residual",
    "category": "Function",
    "text": "Fx = residual(nls, x)\n\nComputes F(x), the residual at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.residual!",
    "page": "API",
    "title": "NLPModels.residual!",
    "category": "Function",
    "text": "Fx = residual!(nls, x, Fx)\n\nComputes F(x), the residual at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jac_residual",
    "page": "API",
    "title": "NLPModels.jac_residual",
    "category": "Function",
    "text": "Jx = jac_residual(nls, x)\n\nComputes J(x), the Jacobian of the residual at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jprod_residual",
    "page": "API",
    "title": "NLPModels.jprod_residual",
    "category": "Function",
    "text": "Jv = jprod_residual(nls, x, v)\n\nComputes the product of the Jacobian of the residual at x and a vector, i.e.,  J(x)*v.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jprod_residual!",
    "page": "API",
    "title": "NLPModels.jprod_residual!",
    "category": "Function",
    "text": "Jv = jprod_residual!(nls, x, v, Jv)\n\nComputes the product of the Jacobian of the residual at x and a vector, i.e.,  J(x)*v, storing it in Jv.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jtprod_residual",
    "page": "API",
    "title": "NLPModels.jtprod_residual",
    "category": "Function",
    "text": "Jtv = jtprod_residual(nls, x, v)\n\nComputes the product of the transpose of the Jacobian of the residual at x and a vector, i.e.,  J(x)\'*v.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jtprod_residual!",
    "page": "API",
    "title": "NLPModels.jtprod_residual!",
    "category": "Function",
    "text": "Jtv = jtprod_residual!(nls, x, v, Jtv)\n\nComputes the product of the transpose of the Jacobian of the residual at x and a vector, i.e.,  J(x)\'*v, storing it in Jtv.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jac_op_residual",
    "page": "API",
    "title": "NLPModels.jac_op_residual",
    "category": "Function",
    "text": "Jx = jac_op_residual(nls, x)\n\nComputes J(x), the Jacobian of the residual at x, in linear operator form.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jac_op_residual!",
    "page": "API",
    "title": "NLPModels.jac_op_residual!",
    "category": "Function",
    "text": "Jx = jac_op_residual!(nls, x, Jv, Jtv)\n\nComputes J(x), the Jacobian of the residual at x, in linear operator form. The vectors Jv and Jtv are used as preallocated storage for the operations.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hess_residual",
    "page": "API",
    "title": "NLPModels.hess_residual",
    "category": "Function",
    "text": "Hi = hess_residual(nls, x, i)\n\nComputes the Hessian of the i-th residual at x.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hprod_residual",
    "page": "API",
    "title": "NLPModels.hprod_residual",
    "category": "Function",
    "text": "Hiv = hprod_residual(nls, x, i, v)\n\nComputes the product of the Hessian of the i-th residual at x, times the vector v.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hprod_residual!",
    "page": "API",
    "title": "NLPModels.hprod_residual!",
    "category": "Function",
    "text": "Hiv = hprod_residual!(nls, x, i, v, Hiv)\n\nComputes the product of the Hessian of the i-th residual at x, times the vector v, and stores it in vector Hiv.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hess_op_residual",
    "page": "API",
    "title": "NLPModels.hess_op_residual",
    "category": "Function",
    "text": "Hop = hess_op_residual(nls, x, i)\n\nComputes the Hessian of the i-th residual at x, in linear operator form.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hess_op_residual!",
    "page": "API",
    "title": "NLPModels.hess_op_residual!",
    "category": "Function",
    "text": "Hop = hess_op_residual!(nls, x, i, Hiv)\n\nComputes the Hessian of the i-th residual at x, in linear operator form. The vector Hiv is used as preallocated storage for the operation.\n\n\n\n"
},

{
    "location": "api.html#AbstractNLSModel-1",
    "page": "API",
    "title": "AbstractNLSModel",
    "category": "section",
    "text": "residual\nresidual!\njac_residual\njprod_residual\njprod_residual!\njtprod_residual\njtprod_residual!\njac_op_residual\njac_op_residual!\nhess_residual\nhprod_residual\nhprod_residual!\nhess_op_residual\nhess_op_residual!"
},

{
    "location": "api.html#NLPModels.gradient_check",
    "page": "API",
    "title": "NLPModels.gradient_check",
    "category": "Function",
    "text": "Check the first derivatives of the objective at x against centered finite differences.\n\nThis function returns a dictionary indexed by components of the gradient for which the relative error exceeds rtol.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.jacobian_check",
    "page": "API",
    "title": "NLPModels.jacobian_check",
    "category": "Function",
    "text": "Check the first derivatives of the constraints at x against centered finite differences.\n\nThis function returns a dictionary indexed by (j, i) tuples such that the relative error in the i-th partial derivative of the j-th constraint exceeds rtol.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hessian_check",
    "page": "API",
    "title": "NLPModels.hessian_check",
    "category": "Function",
    "text": "Check the second derivatives of the objective and each constraints at x against centered finite differences. This check does not rely on exactness of the first derivatives, only on objective and constraint values.\n\nThe sgn arguments refers to the formulation of the Lagrangian in the problem. It should have a positive value if the Lagrangian is formulated as\n\nL(x,y) = f(x) + ∑ yⱼ cⱼ(x)\n\ne.g., as in JuMPNLPModels, and a negative value if the Lagrangian is formulated as\n\nL(x,y) = f(x) - ∑ yⱼ cⱼ(x)\n\ne.g., as in AmplModels. Only the sign of sgn is important.\n\nThis function returns a dictionary indexed by functions. The 0-th function is the objective while the k-th function (for k > 0) is the k-th constraint. The values of the dictionary are dictionaries indexed by tuples (i, j) such that the relative error in the second derivative ∂²fₖ/∂xᵢ∂xⱼ exceeds rtol.\n\n\n\n"
},

{
    "location": "api.html#NLPModels.hessian_check_from_grad",
    "page": "API",
    "title": "NLPModels.hessian_check_from_grad",
    "category": "Function",
    "text": "Check the second derivatives of the objective and each constraints at x against centered finite differences. This check assumes exactness of the first derivatives.\n\nThe sgn arguments refers to the formulation of the Lagrangian in the problem. It should have a positive value if the Lagrangian is formulated as\n\nL(x,y) = f(x) + ∑ yⱼ cⱼ(x)\n\ne.g., as in JuMPNLPModels, and a negative value if the Lagrangian is formulated as\n\nL(x,y) = f(x) - ∑ yⱼ cⱼ(x)\n\ne.g., as in AmplModels. Only the sign of sgn is important.\n\nThis function returns a dictionary indexed by functions. The 0-th function is the objective while the k-th function (for k > 0) is the k-th constraint. The values of the dictionary are dictionaries indexed by tuples (i, j) such that the relative error in the second derivative ∂²fₖ/∂xᵢ∂xⱼ exceeds rtol.\n\n\n\n"
},

{
    "location": "api.html#Derivative-check-1",
    "page": "API",
    "title": "Derivative check",
    "category": "section",
    "text": "gradient_check\njacobian_check\nhessian_check\nhessian_check_from_grad"
},

{
    "location": "reference.html#",
    "page": "Reference",
    "title": "Reference",
    "category": "page",
    "text": ""
},

{
    "location": "reference.html#Reference-1",
    "page": "Reference",
    "title": "Reference",
    "category": "section",
    "text": ""
},

]}