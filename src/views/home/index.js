import React, {
	Component
} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'

class Home extends Component {
	constructor() {
		super()

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick = () => {
		axios.interceptors.request.use((config) => {
			config.headers['Authorization'] = '123';
			return config;
		}, function (error) {
			// 对请求错误做些什么
			return Promise.reject(error);
		})
		axios.get('http://localhost:8000/login')
		.then(function (res) {
			console.log(res);
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	render() {
		return (
			<div>
        <h1>He</h1>
        <Button variant="contained" color="primary" onClick={this.handleClick}>
     		 Hello World
    	</Button>
      </div>
		)
	}
}

export default Home