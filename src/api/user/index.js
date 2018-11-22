import http from '../http.js'

const user = {
	register: (params = {}) => {
		return http.post('/api/shop/register', params)
	},
	login: (params = {}) => {
		return http.post('/api/shop/login', params)
	},
	getInfo: (params={})=> {
		return http.post('/api/shop/getinfo', params)
	},
	upToken:(params={})=> {
		return http.post('/api/shop/updata', params)
	}
}
export default user