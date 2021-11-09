import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const ExteriorRoutes = () => (
  <Routes>
    <Route path='login' element={<Login />} />
    <Route path='register' element={<Register />} />
  </Routes>
);

export default ExteriorRoutes;