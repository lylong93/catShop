import {LOGIN,LOGOUT,GEUSER,CHANGEUSER} from '../actionTypes'

const user = (state = {}, action) => {
	switch (action.type) {
		case CHANGEUSER:
			return Object.assign({}, state, {
				logined: true,
				token: action.token
			})
		case LOGOUT:
			return []
		default:
			return state
	}
}
export default user