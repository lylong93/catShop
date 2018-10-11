import http from '../http.js'

const user = {
	register: (params = {}) => {
		return http.post('/api/shop/register', params)
	},
	login: (params = {}) => {
		return http.post('/api/shop/login', params)
	},
	getinfo: (params={})=> {
		return http.post('/api/shop/getinfo', params)
	}
}
export default user