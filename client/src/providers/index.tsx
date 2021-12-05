import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './Theme';
import Rtl from './Rtl';
import { AlertProvider } from './Alert';
import { AuthProvider } from './Auth';

const Providers = ({ children }: { children: JSX.Element }) => (
  <Rtl>
    <ThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <AlertProvider>
          <AuthProvider>{children}</AuthProvider>
        </AlertProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Rtl>
);

export default Providers;