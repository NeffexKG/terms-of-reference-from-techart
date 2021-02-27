import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {routes} from './routes/routes'


const App = () => {
	return (
		<div className="container">
			<Switch>
				{routes.map(({component: Component, ...route}) => (
					<Route
						{...route}
						key={route.title}
						render={props => <Component {...props} />}
					/>
				))}
				<Redirect to="/"/>
			</Switch>
		</div>
	);
};

export default App;
