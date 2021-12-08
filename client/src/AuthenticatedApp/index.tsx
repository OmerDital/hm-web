import { Route, Routes } from 'react-router-dom';
import DistributeSong from './DistributeSong';
import ManageEntities from './ManageEntities';
import Calculators from './Calculators';
import Shell from './Shell';
import Users from './Users';
import NotFound from '../components/NotFound';

const ShellRoutes = () => (
  <Routes>
    <Route path='/' element={<Shell />}>
      <Route index element={<ManageEntities />} />
      <Route path='manage-entities' element={<ManageEntities />} />
      <Route path='distribute-song' element={<DistributeSong />} />
      <Route path='calculators' element={<Calculators />} />
      <Route path='users' element={<Users />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);

export default ShellRoutes;