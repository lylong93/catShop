import http from '../http.js'

const chat = {
	userList: (params = {}) => {
		return http.get('/api/shopchat/userlist', params)
	},
	send: (params = {}) => {
		return http.post('/api/chat/send', params)
	},
	getMstList: (params = {}) => {
		return http.get('/api/shopchat/msglist',{params})
	},

}
export default chat