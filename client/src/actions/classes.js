import * as request from 'superagent'
// import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4001'

export const GET_CLASSES = 'GET_CLASSES'
export const ADD_CLASS = 'ADD_CLASS'

export const getClasses = () => (dispatch) => {
	request
	.get(`${baseUrl}/batches`)
    .then(result => {
      dispatch({
        type: GET_CLASSES,
		payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const addClass = (batch) => (dispatch) => {
    request
    .post(`${baseUrl}/batches`)
    .send(batch)
    .then(result => {
        dispatch({
            type: ADD_CLASS,
            payload: result.body
        })
    })
    .catch(err => console.error(err))
}
