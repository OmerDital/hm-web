import { FC } from 'react';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from './Theme';
import Rtl from './Rtl';

const queryClient = new QueryClient();

const Providers: FC = ({ children }) => (
  <Rtl>
    <ThemeProvider>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  </Rtl>
);

export default Providers;