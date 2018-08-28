import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import {
	createStore
} from 'redux';
import {
	BrowserRouter
} from 'react-router-dom';
import {
	MuiThemeProvider,
	createMuiTheme
} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple';
import lime from '@material-ui/core/colors/lime';

import store from './store';
import App from './containers/App';

import './index.scss';
import registerServiceWorker from './config/registerServiceWorker';

const theme = createMuiTheme({
	palette: {
		primary: purple,
		secondary: lime,
	},
});

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();