import './main.css'
import {createStore, applyMiddleware} from 'redux'
import reduсers from './reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {syncHistoryWithStore} from 'react-router-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import Layout from './containers/layout'
import Phones from './containers/phones'

const store = createStore(reduсers, composeWithDevTools(applyMiddleware(thunk)))
const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(<Provider store={store}>
	<Router history={history}>
		<Route component={Layout}>
			<Route path='/' component={Phones}></Route>
		</Route>
	</Router>
</Provider >,
	document.getElementById('app'))