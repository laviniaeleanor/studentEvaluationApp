import * as request from 'superagent'
// import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4001'

export const GET_CLASSES = 'GET_CLASSES'

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
