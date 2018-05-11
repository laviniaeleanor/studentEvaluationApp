import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const GET_EVALUATIONS = 'GET_EVALUATIONS'
export const ADD_EVALUATION = 'ADD_EVALUATION'
export const UPDATE_EVALUATION = 'UPDATE_EVALUATION'
export const UPDATE_LATEST_EVALUATION = 'UPDATE_LATEST_EVALUATION'

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

export const updateEvaluation = (id, updates) => (dispatch) => {
  request
    .patch(`${baseUrl}/evaluations/${id}`)
    .send(updates)
    .then(result => {
      dispatch({
        type: UPDATE_EVALUATION,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const updateLatestEvaluation = (studentId, update) => (dispatch) => {
  request
  	.patch(`${baseUrl}/students/${studentId}`)
    .send({latestEvaluation: update.evaluation})
    .then(result => {
      dispatch({
        type: UPDATE_LATEST_EVALUATION,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
