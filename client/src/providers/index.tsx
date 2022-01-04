import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { AppThemeProvider } from './ThemeProvider';
import Rtl from './Rtl';
import { AlertProvider } from './Alert';
import { AuthProvider } from './Auth';

const Providers = ({ children }: { children: JSX.Element }) => (
  <Rtl>
    <AppThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <AlertProvider>
          <AuthProvider>{children}</AuthProvider>
        </AlertProvider>
      </BrowserRouter>
    </AppThemeProvider>
  </Rtl>
);

export default Providers;