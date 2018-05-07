import {GET_CLASSES, ADD_CLASS} from '../actions/classes'

export default function (state = [], {type, payload}) {
	switch (type) {
		case GET_CLASSES:
			return payload

        case ADD_CLASS:
			return [...state, payload]

		default:
      return state
	}
}
