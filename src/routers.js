import React from 'react'
import {
	Route,
} from 'react-router-dom'

import Home from './views/home'
import Test from './views/test'

export default () => {
	<Route path="/home" component={Home} />,
	<Route path="/test" component={Test} />
}