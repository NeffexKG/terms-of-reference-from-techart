import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ThemeProvider} from '@material-ui/core/styles';
import App from './App';
import store from "./redux/";
import {theme} from './helpers/theme'
import './index.scss';


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);


