import {GET_STUDENTS, ADD_STUDENT} from '../actions/batches'

export default function (state = [], {type, payload}) {
	switch (type) {
		case GET_STUDENTS:
			return payload

        case ADD_STUDENT:
			return [...state, payload]

		default:
      return state
	}
}
