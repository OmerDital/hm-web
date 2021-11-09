import { FC } from 'react';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './Theme';
import Rtl from './Rtl';

const Providers: FC = ({ children }) => (
  <Rtl>
    <ThemeProvider>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </Rtl>
);

export default Providers;