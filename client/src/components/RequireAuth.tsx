import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../providers/Auth';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { getToken } = useAuth();
  const location = useLocation();

  if (!getToken()) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;