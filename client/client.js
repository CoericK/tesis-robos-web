import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {store, history} from '../redux/store'
import App from '../components/app'
import Home from '../components/home'
import Admin from '../components/admin'
import NotFound from '../components/not-found'

/* SPA routes:
/  > home
/* > not found
*/
render((
		<Provider store={store}>
			<Router history={history}>
				<Route component={App} path="/">
					<IndexRoute component={Home} />
					<Route component={Home} path="/" />
				</Route>
				<Route component={Admin} path="/admin">
					<IndexRoute component={Admin} />
					<Route component={Admin} path="/" />
				</Route>
				<Route component={NotFound} path="*"/>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);
