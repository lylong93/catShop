import axios from 'axios'

const URL = 'http://localhost:8000';
let token = localStorage.getItem('token');

axios.interceptors.request.use((config) => {
	config.baseURL = URL
	config.timeout = 5000
	config.headers.authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNTM0Njc5ODA5fQ.JB-5C9WDRruLcGm3THVxUrlFBbuTUOznBBoGkx7sHwo'
	return config;
}, (error) => {
	return Promise.reject(error);
});



export default axios