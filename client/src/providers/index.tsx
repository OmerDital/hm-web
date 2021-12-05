import { FC } from 'react';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './Theme';
import Rtl from './Rtl';
import { AlertProvider } from './Alert';

const Providers: FC = ({ children }) => (
  <Rtl>
    <ThemeProvider>
      <AlertProvider>
        <CssBaseline />
        {children}
      </AlertProvider>
    </ThemeProvider>
  </Rtl>
);

export default Providers;