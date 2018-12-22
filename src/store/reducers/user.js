import {LOGIN,LOGOUT,GEUSER,CHANGEUSER} from '../actionTypes'


const user = (state = {}, action) => {
	switch (action.type) {
		case CHANGEUSER:
			return Object.assign({}, state, {
				logined: true,
				token:action.token,
				name:action.shopname,
				id:action.shopId
			})
		case LOGOUT:
			return Object.assign({}, state, {
				logined:false,
				name:'',
				token:'',
			})
		default:
			return state
	}
}
export default user