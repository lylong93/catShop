import React, {
	Component
} from 'react'
import {
	Route,
	Redirect,
	Switch
} from 'react-router-dom'
import {
	hot
} from 'react-hot-loader'
import store from '@/store';
import {
	login,
	judeUser
} from '@/store/actions/user'

import Main from '@/containers/Main'
import Lgoin from '@/containers/Login'
import Register from '@/containers/Register'

import style from './App.scss'

class App extends Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		store.dispatch(judeUser())
	};
	render() {
		return (
			<div className={style.App}>
				<Switch>
					<Route  exact path="/" render={()=>(
						<Redirect to="/login"/>
						)}/>
					<Route 	path = "/login" component = { Lgoin }/>
					<Route 	path = "/register" component = { Register }/>   
					<Route 	path = "/:id" component = { Main }/>		
				</Switch>
			</div>
		)
	}
}
export default hot(module)(App)