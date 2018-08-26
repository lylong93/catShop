import {LOGIN,LOGOUT} from '../actionTypes'

const user = (state={},action) => {
	switch(action.type) {
		case LOGIN:
			return Object.assign({}, state, {
       	logined:true
      })
		case LOGOUT:
			return []
    default:
 			return state
	}
}
export default user