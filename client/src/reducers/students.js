import {GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT} from '../actions/batches'

export default function (state = [], {type, payload}) {
	switch (type) {
		case GET_STUDENTS:
			return payload

        case ADD_STUDENT:
			return [...state, payload]

		case DELETE_STUDENT:
			return state.filter(student => student.id !== payload.id)

		default:
      return state
	}
}
