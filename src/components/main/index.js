import React, { Component } from 'react';

import { Route ,Link,Switch} from 'react-router-dom'

import Home from '@/views/home'
import Test from '@/views/test'
import Me from '@/views/me'
import Login from '@/views/login'
import Footer from '@/components/footer'

const Main =({match}) => {
		return (
			<div>	
				<Switch>
					<Route  path = "/test/1" component = { Home }/>
					<Route  path = "/test/2" component = { Test }/>
				</Switch>
				<Footer/>
			</div>	
		)
}
export default Main