import {RETURN_RANDOM_STUDENT} from '../actions/students'

export default function (state = {}, {type, payload}) {
  switch (type) {
  case RETURN_RANDOM_STUDENT:
    return payload

  default:
    return state
  }
}
