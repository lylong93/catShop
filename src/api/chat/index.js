import http from '../http.js'

const chat = {
	send: (params = {}) => {
		return http.post('/api/chat/send', params)
	}
}
export default chat