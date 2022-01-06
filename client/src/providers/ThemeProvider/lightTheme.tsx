import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: '#fcfcfc',
      dark: '#f1f1f1',
      contrastText: '#000000FF'
    },
    secondary: {
      main: '#018786'
    },
    background: {
      default: '#f1f1f1'
    }
  },
  typography: { fontFamily: 'Segoe UI' }
});

export default lightTheme;