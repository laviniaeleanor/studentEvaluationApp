import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_STUDENT = 'GET_STUDENT'
export const ADD_STUDENT = 'ADD_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'
export const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const RETURN_RANDOM_STUDENT = 'GET_RANDOM_STUDENT'

export const getStudents = (batchId) => (dispatch) => {
  request
    .get(`${baseUrl}/classstudents/${batchId}`)
    .then(result => {
	  dispatch({
	  type: GET_STUDENTS,
	  payload: result.body
	 })
    })
    .catch(err => console.error(err))
}

export const addStudent = (student) => (dispatch) => {
  request
    .post(`${baseUrl}/students`)
    .send(student)
    .then(result => {
      dispatch({
        type: ADD_STUDENT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getStudent = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/students/${id}`)
    .then(result => {
      dispatch({
        type: GET_STUDENT,
    	payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const deleteStudent = (id) => (dispatch) => {
  request
    .delete(`${baseUrl}/students/${id}`)
    .then(result => {
	  dispatch({
	  type: DELETE_STUDENT,
	  payload: result.body
	 })
    })
    .catch(err => console.error(err))
}

export const updateStudent = (id, updates) => (dispatch) => {

  request
    .patch(`${baseUrl}/students/${id}`)
    .send(updates)
    .then(result => {
	  dispatch({
    	type: UPDATE_STUDENT,
    	payload: result.body
  	  })
    })
    .catch(err => console.error(err))
}

export const returnRandomStudent = (student) => ({
  type: RETURN_RANDOM_STUDENT,
  payload: student
})
