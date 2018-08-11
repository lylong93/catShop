import React, { Component } from 'react'

import Footer from '@/components/footer'
import Main from '@/components/main'

import { hot } from 'react-hot-loader'

import style from './App.scss'

class App extends Component {
	render() {
		return (
			<div className = {style.App}>
				<Main/>
				<Footer className = "Header"/>
			</div>
		)
	}
}
export default hot(module)(App)