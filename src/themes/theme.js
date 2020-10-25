import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans, sans-serif'
    ]
  },
  palette: {
    primary: {
      light: '#4791db',
      main: '#9a0036',
    },
  },
});

export default theme;