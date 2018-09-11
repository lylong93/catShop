import React, {
	Component
} from 'react';

import {
	Route,
	Link,
	Switch
} from 'react-router-dom'
import Footer from '@/components/footer'

import Home from '../Home'
import Test from '../Test'
import Chat from '../Chat'
import Me from '../Me'
import ChatUI from '../ChatUI'

const Main = ({
	match
}) => {
	return (
		<div style={{height:'100%',display:'flex',flexDirection:'column'}}>	
			<Switch>
				<Route  path = "/home" component = { Home }/>
				<Route  path = "/test" component = { Test }/>
				<Route  path = "/chat"   component = { Chat }/>
				<Route  path = "/me"   component = { Me }/>
				<Route  path = "/cc/:id"   component = { ChatUI }/>
			</Switch>
			<Footer/>
		</div>
	)
}
export default Main