import { GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from '../actions/students'

export default function (state = [], {type, payload}) {
  switch (type) {

  case GET_STUDENTS:
    return payload

  case ADD_STUDENT:
    return [...state, payload]

  case DELETE_STUDENT:
    return state.filter(student => student.id !== payload.id)

  case UPDATE_STUDENT:
    return state.map(student => {
    	if (student.id === payload.id) return payload
	  	else return student
  	})

  default:
    return state
  }
}
