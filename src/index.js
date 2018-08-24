import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import './index.scss';
import App from './containers/App';

import registerServiceWorker from './config/registerServiceWorker';

// let store = createStore(reduxstore)

ReactDOM.render( 
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById( 'root' )
);
registerServiceWorker();