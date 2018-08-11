import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import Home from '@/views/home'
import Test from '@/views/test'
import Me from '@/views/me'

import style from './index.scss'

class router extends Component {
	render() {
		return (
			<div className={style.main}>
				<Route exact path = "/" component = { Home }/> 
				<Route path = "/test" component = {Test}/> 
				<Route path = "/me" component = {Me}/> 
			</div>
		)
	}
}
export default router