import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#fcfcfc',
      contrastText: '#000000FF',
    },
    background: {
      default: '#f1f1f1',
    },
    success: {
      main: '#018786'
    }
  },
});

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;