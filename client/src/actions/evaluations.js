import * as request from 'superagent'
// import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4001'

export const GET_EVALUATIONS = 'GET_EVALUATIONS'
export const ADD_EVALUATION = 'ADD_EVALUATION'

export const getEvaluations = (studentId) => (dispatch) => {
	request
	.get(`${baseUrl}/studentevaluations/${studentId}`)
    .then(result => {
      dispatch({
        type: GET_EVALUATIONS,
		payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const addEvaluation = (evaluation) => (dispatch) => {
    request
    .post(`${baseUrl}/evaluations`)
    .send(evaluation)
    .then(result => {
        dispatch({
            type: ADD_EVALUATION,
            payload: result.body
        })
    })
    .catch(err => console.error(err))
}
