import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import NotFound from './components/NotFound';
import ToDo from './components/Todo/Todo';

export default () => {
	return (
		<Switch>
			<Route path="/" exact component={Login}></Route>
			<Route path="/todo" exact component={ToDo}></Route>
			<Route path="/notfound" exact component={NotFound}></Route>

			{/* <Redirect to={NotFound} /> */}
			<Redirect
				to={{
					pathname: '/notfound'
				}}
			/>
		</Switch>
	);
};
