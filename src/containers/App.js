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
	login
} from '@/store/actions/user'

import Main from '@/containers/Main'
import Lgoin from '@/containers/Login'

import style from './App.scss'

class App extends Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		// store.dispatch(login())
	};
	render() {
		return (
			<div className={style.App}>
				<Switch>
					<Route  exact path="/" render={()=>(
						<Redirect to="/login"/>
						)}/>
					<Route 	path = "/login" component = { Lgoin }/>  
					<Route 	path = "/:id" component = { Main }/>		
				</Switch>
			</div>
		)
	}
}
export default hot(module)(App)