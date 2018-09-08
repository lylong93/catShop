import http from '../http.js'

const user = {
	register: (params = {}) => {
		return http.post('/api/user/register', params)
	},
	login: (params = {}) => {
		return http.post('/api/user/login', params)
	},
	getinfo: (params={})=> {
		return http.post('/api/user/getinfo', params)
	},
	test: (params={})=> {
		return http.post('/api/test/ok', params)
	},
}
export default user