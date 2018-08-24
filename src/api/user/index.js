import http from '../http.js'

const user = {
	register: (params = {}) => {
		return http.post('/api/user/register', params)
	},
	login: (params = {}) => {
		return http.post('/api/user/login', params)
	},
	test: (params={})=> {
		return http.get('/api/user/test', params)
	},
	logout: () => {

	}
}
export default user