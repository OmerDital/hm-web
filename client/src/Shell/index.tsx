import { Routes, Route } from 'react-router-dom';
import DistributeSong from './DistributeSong';
import ManageEntities from './ManageEntities';
import Calculators from './Calculators';
import Shell from './Shell';
import RequireAuth from '../components/RequireAuth';
import Users from './Users';
import NotFound from '../components/NotFound';

const ShellRoutes = () => (
  <Routes>
    <RequireAuth>
      <Route path='/' element={<Shell />}>
        <Route index element={<ManageEntities />} />
        <Route path='distribute-song' element={<DistributeSong />} />
        <Route path='calculators' element={<Calculators />} />
        <Route path='users' element={<Users />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </RequireAuth>
  </Routes>
);

export default ShellRoutes;