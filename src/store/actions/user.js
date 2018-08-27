import {LOGIN,CHANGEUSER} from '../actionTypes'
import { apiUserTest,apiUserJudge,apiUserLogin} from '@/api'

export const ttt = name => {
	return async (dispatch, getState)=> {
		const data = await apiUserTest()

		dispatch(changeLogin(data.data))
	}
}

export const login = user => {
	return async (dispatch, getState)=> {
		const data = await apiUserLogin(user)
		console.log(data)
		if(data.data.success === 0){
			localStorage.setItem('token',data.data.token)
			dispatch(changeLogin(data.data.token))
		}	
	}
}

export const changeLogin = token => {
	console.log('ok')
	return {
		type:CHANGEUSER,
		token
	}
}
export const judeUser = name => {
		return async (dispatch, getState)=> {
		let info = localStorage.getItem('token')

		// const info = await apiUserJudge(token)

		if(info) {
			dispatch(changeLogin(data.data))
		}		
	}
}
