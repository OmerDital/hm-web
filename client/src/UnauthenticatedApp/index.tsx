import { Route, Routes } from 'react-router-dom';
import Login from './Login';

const UnauthenticatedApp = () => (
  <Routes>
    <Route path='login' element={<Login />} />
    <Route path='*' element={<Login />} />
  </Routes>
);

export default UnauthenticatedApp;