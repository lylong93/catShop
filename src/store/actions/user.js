import {
	LOGIN,
	CHANGEUSER,
	LOGOUT
} from '../actionTypes'
import {
	apiUserTest,
	apiUserJudge,
	apiUserLogin,
	apiUserGetInfo
} from '@/api'

export const login = user => {
	return async (dispatch, getState) => {
		const data = await apiUserLogin(user)
		if (data.data.state === 0) {
			localStorage.setItem('token', data.data.token)
			dispatch(changeLogin(data.data))
		} else {
			return data.data.msg
		}
	}
}

export const logout = () => {
		localStorage.removeItem('token');
		return {
			type: LOGOUT
		}
}

export const changeLogin = info => {
	const {token,name} = info
	return {
		type: CHANGEUSER,
		token,
		name
	}
}
export const judeUser = name => {
	console.log('ok')

	return async (dispatch, getState) => {
		let token = localStorage.getItem('token')
		const data = await apiUserGetInfo({token})
		console.log(data)
		// if (info) {
		// 	dispatch(changeLogin(data.data))
		// }
	}
}

export const ttt = name => {
	return async (dispatch, getState) => {
		const data = await apiUserTest()

		dispatch(changeLogin(data.data))
	}
}