import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: {
      main: '#313131',
      dark: '#313131',
      contrastText: 'white'
    },
    secondary: {
      main: '#018786'
    },
    background: {
      default: '#121212'
    }
  },
  typography: {
    button: { color: 'white' },
    fontFamily: 'Segoe UI'
  }
});

export default darkTheme;