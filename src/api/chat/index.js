import http from '../http.js'

const chat = {
	userList: (params = {}) => {
		return http.get('/api/shopchat/getalluser', params)
	},
	getFriend: (params = {}) => {
		return http.post('/api/shopchat/getfriend',params)
	},
	send: (params = {}) => {
		return http.post('/api/chat/send', params)
	},
	getMstList: (params = {}) => {
		return http.post('/api/shopchat/msglist',params)
	},

}
export default chat