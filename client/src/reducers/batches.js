import { GET_BATCHES, ADD_BATCH } from '../actions/batches'

export default function (state = [], {type, payload}) {
  switch (type) {

  case GET_BATCHES:
    return payload

  case ADD_BATCH:
    return [...state, payload]

  default:
    return state
  }
}
