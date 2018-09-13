import http from '../http.js'

const chat = {
	userList: (params = {}) => {
		return http.get('/api/chat/userlist', params)
	},
	send: (params = {}) => {
		return http.post('/api/chat/send', params)
	}
}
export default chat