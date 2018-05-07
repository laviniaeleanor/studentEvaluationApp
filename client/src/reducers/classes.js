import {GET_CLASSES} from '../actions/classes'

export default function (state = [], {type, payload}) {
	switch (type) {
		case GET_CLASSES:
			return payload

		default:
      return state
	}
}
