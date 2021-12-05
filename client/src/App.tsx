import { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { useAuth } from './providers/Auth';

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const { ensureAuthorized } = useAuth();

  return (
    <Suspense fallback={<CircularProgress />}>
      {ensureAuthorized() ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};

export default App;