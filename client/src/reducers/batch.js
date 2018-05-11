import { GET_BATCH } from '../actions/batches'

export default function (state = {}, {type, payload}) {
  switch (type) {

  case GET_BATCH:
    return payload

  default:
    return state
  }
}
