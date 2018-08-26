import React, { Component } from 'react'
import { Route,Redirect,Switch} from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Main from '@/containers/Main'
import Lgoin from '@/containers/Login'

import style from './App.scss'

class App extends Component {
	constructor(props){
		super(props)
		this.ok = true
	}
	componentWillMount() {
		console.log('ok')
	};
	render() {
		return (
			<div>
				<Switch>
					<Route  exact path="/" render={()=>(
						!this.ok?
						<Redirect to="/home"/>:
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