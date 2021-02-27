import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
export const theme = createMuiTheme({
	typography: {
		fontFamily: 'Open Sans, sans-serif'
	},
	palette: {
		primary: {main: '#57C3A7', contrastText: '#fff'}
	}
});
