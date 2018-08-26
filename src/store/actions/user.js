import {LOGIN} from '../actionTypes'
import { apiUserTest } from '@/api'

export const ttt = name => {
	return async (dispatch, getState)=> {
		const data = await apiUserTest()

		dispatch(login(data.data))
	}
}

export const login = name => {
	localStorage.setItem(`myCat`, `Tom`);
		return {
			type:LOGIN,
			name,
		}
}
