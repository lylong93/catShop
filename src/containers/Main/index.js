import React, { Component } from 'react';

import { Route ,Link,Switch} from 'react-router-dom'
import Footer from '@/components/footer'

import Home from '../Home'
import Test from '../Test'
import Me from '../Me'

const Main =({match}) => {
		return (
			<div>	
				<Switch>
					<Route  path = "/t/1" component = { Home }/>
					<Route  path = "/t/2" component = { Test }/>
				</Switch>
				<Footer/>
			</div>	
		)
}
export default Main