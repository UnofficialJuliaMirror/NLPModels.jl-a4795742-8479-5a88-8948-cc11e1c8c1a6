using NLPModels: increment!

#Problem 10 in the Hock-Schittkowski suite
function hs10_autodiff()

  x0 = [-10.0; 10.0]
  f(x) = x[1] - x[2]
  c(x) = [-3 * x[1]^2 + 2 * x[1] * x[2] - x[2]^2 + 1.0]
  lcon = [0.0]
  ucon = [Inf]

  return ADNLPModel(f, x0, c=c, lcon=lcon, ucon=ucon)
end

mutable struct HS10 <: AbstractNLPModel
  meta :: NLPModelMeta
  counters :: Counters
end

function HS10()
  meta = NLPModelMeta(2, ncon=1, x0=[-10.0; 10.0],
                      lcon=[0.0], ucon=[Inf], name="HS10")

  return HS10(meta, Counters())
end

function NLPModels.obj(nlp :: HS10, x :: AbstractVector)
  increment!(nlp, :neval_obj)
  return x[1] - x[2]
end

function NLPModels.grad!(nlp :: HS10, x :: AbstractVector, gx :: AbstractVector)
  increment!(nlp, :neval_grad)
  gx .= [1.0; -1.0]
  return gx
end

function NLPModels.hess(nlp :: HS10, x :: AbstractVector; obj_weight=1.0)
  increment!(nlp, :neval_hess)
  return spzeros(2, 2)
end

function NLPModels.hess(nlp :: HS10, x :: AbstractVector, y :: AbstractVector; obj_weight=1.0)
  increment!(nlp, :neval_hess)
  return y[1] * [-6.0  0.0; 2.0  -2.0]
end

function NLPModels.hess_structure!(nlp :: HS10, rows :: AbstractVector{Int}, cols :: AbstractVector{Int})
  rows[1] = 1; rows[2] = 2; rows[3] = 2
  cols[1] = 1; cols[2] = 1; cols[3] = 2
  return rows, cols
end

function NLPModels.hess_coord!(nlp :: HS10, x :: AbstractVector, vals :: AbstractVector; obj_weight=1.0)
  increment!(nlp, :neval_hess)
  vals .= 0.0
  return vals
end

function NLPModels.hess_coord!(nlp :: HS10, x :: AbstractVector, y :: AbstractVector, vals :: AbstractVector; obj_weight=1.0)
  increment!(nlp, :neval_hess)
  vals .= [-6.0, 2.0, -2.0] * y[1]
  return vals
end

function NLPModels.hprod!(nlp :: HS10, x :: AbstractVector, v :: AbstractVector, Hv :: AbstractVector; obj_weight=1.0)
  increment!(nlp, :neval_hprod)
  fill!(Hv, 0.0)
  return Hv
end

function NLPModels.hprod!(nlp :: HS10, x :: AbstractVector, y :: AbstractVector, v :: AbstractVector, Hv :: AbstractVector; obj_weight=1.0)
  increment!(nlp, :neval_hprod)
  Hv[1:nlp.meta.nvar] .= y[1] * [-6.0 * v[1] + 2.0 * v[2]; 2.0 * v[1] - 2.0 * v[2]]
  return Hv
end

function NLPModels.cons!(nlp :: HS10, x :: AbstractVector, cx :: AbstractVector)
  increment!(nlp, :neval_cons)
  cx .= [-3 * x[1]^2 + 2 * x[1] * x[2] - x[2]^2 + 1.0]
  return cx
end

function NLPModels.jac(nlp :: HS10, x :: AbstractVector)
  increment!(nlp, :neval_jac)
  return [-6 * x[1] + 2 * x[2]   2 * x[1] - 2 * x[2]]
end

function NLPModels.jac_structure!(nlp :: HS10, rows :: AbstractVector{Int}, cols :: AbstractVector{Int})
  rows[1:2] .= [1, 1]
  cols[1:2] .= [1, 2]
  return rows, cols
end

function NLPModels.jac_coord!(nlp :: HS10, x :: AbstractVector, vals :: AbstractVector)
  increment!(nlp, :neval_jac)
  vals .= [-6 * x[1] + 2 * x[2], 2 * x[1] - 2 * x[2]]
  return vals
end

function NLPModels.jprod!(nlp :: HS10, x :: AbstractVector, v :: AbstractVector, Jv :: AbstractVector)
  increment!(nlp, :neval_jprod)
  Jv .= [(-6 * x[1] + 2 * x[2]) * v[1] + (2 * x[1] - 2 * x[2]) * v[2]]
  return Jv
end

function NLPModels.jtprod!(nlp :: HS10, x :: AbstractVector, v :: AbstractVector, Jtv :: AbstractVector)
  increment!(nlp, :neval_jtprod)
  Jtv .= [-6 * x[1] + 2 * x[2];  2 * x[1] - 2 * x[2]] * v[1]
  return Jtv
end
