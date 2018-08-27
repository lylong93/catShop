import {LOGIN,LOGOUT,CHANGEUSER} from '../actionTypes'

const user = (state={},action) => {
	switch(action.type) {
		case CHANGEUSER:
		console.log('state')
			return Object.assign({}, state, {
       	logined:true,
       	token:action.token
      })
		case LOGOUT:
			return []
    default:
 			return state
	}
}
export default user