import {createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import states from './states'


export default createStore(reducers,states,applyMiddleware(thunk))