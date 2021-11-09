import { BrowserRouter } from 'react-router-dom';
import Providers from './providers';
import ExteriorRoutes from './Exterior';
import ShellRoutes from './Shell';

const App = () => (
  <BrowserRouter>
    <Providers>
      <ExteriorRoutes />
      <ShellRoutes />
    </Providers>
  </BrowserRouter>
);

export default App;