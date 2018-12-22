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

import {ioLogin} from '@/socket'

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
	const {token,shopname,shopId} = info
	ioLogin(shopId)
	return {
		type: CHANGEUSER,
		token,
		shopname,
		shopId
	}
}
export const judeUser = name => {
	return async (dispatch, getState) => {
		let token = localStorage.getItem('token')
		if(token) {
			const data = await apiUserGetInfo({token})
			if(data.data.state === 0) {
				dispatch(changeLogin({...data.data,token}))
				console.log(getState())
			}
		}
	}
}

export const ttt = name => {
	return async (dispatch, getState) => {
		const data = await apiUserTest()

		dispatch(changeLogin(data.data))
	}
}