import React, { Component } from 'react'
import { Route,Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Main from '@/containers/Main'
import Lgoin from '@/containers/Login'

import style from './App.scss'

class App extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" render={() => (<Redirect to="/t/1"/>)}/>
				<Route exact path = "/t/:id"  component = { Main }/> 
				<Route path = "/login" component = { Lgoin }/> 
			</div>
		)
	}
}
export default hot(module)(App)