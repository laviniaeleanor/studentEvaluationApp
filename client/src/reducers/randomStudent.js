import {RETURN_RANDOM_STUDENT} from '../actions/students'

const initialValues = {picture: 'https://forums.roku.com/styles/canvas/theme/images/no_avatar.jpg'}

export default function (state = initialValues, {type, payload}) {
  switch (type) {
  case RETURN_RANDOM_STUDENT:
    return payload

  default:
    return state
  }
}
