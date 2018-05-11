import { GET_EVALUATIONS, ADD_EVALUATION, UPDATE_EVALUATION } from '../actions/evaluations'

export default function (state = [], {type, payload}) {
  switch (type) {

  case GET_EVALUATIONS:
    return payload

  case ADD_EVALUATION:
    return [...state, payload]

  case UPDATE_EVALUATION:
  	return state.map(evaluation => {
      if (evaluation.id === payload.id) return payload
      else return evaluation
    })

  default:
    return state
  }
}
