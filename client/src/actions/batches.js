import * as request from 'superagent'
// import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4001'

export const GET_BATCHES = 'GET_BATCHES'
export const GET_BATCH = 'GET_BATCHES'
export const ADD_BATCH = 'ADD_BATCH'

export const getBatches = () => (dispatch) => {
	request
	.get(`${baseUrl}/batches`)
    .then(result => {
      dispatch({
        type: GET_BATCHES,
		payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getBatch = (id) => (dispatch) => {
	request
	.get(`${baseUrl}/batches/${id}`)
    .then(result => {
      dispatch({
        type: GET_BATCH,
		payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const addBatch = (batch) => (dispatch) => {
    request
    .post(`${baseUrl}/batches`)
    .send(batch)
    .then(result => {
        dispatch({
            type: ADD_BATCH,
            payload: result.body
        })
    })
    .catch(err => console.error(err))
}
