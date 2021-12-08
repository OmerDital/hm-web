import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './Theme';
import Rtl from './Rtl';
import { AuthProvider } from './Auth';

const Providers = ({ children }: { children: JSX.Element }) => (
  <Rtl>
    <ThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          {children}
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Rtl>
);

export default Providers;