import {
  createContext, useContext, useEffect, useState
} from 'react';
import { CircularProgress } from '@mui/material';
import { User } from '../types/User';
import useFetch from '../hooks/use-fetch';

interface IAuthContext {
  user: User | null;
  getToken: () => string | null;
  updateUser: (user: User) => void;
  ensureAuthorized: () => string | User | null;
  setAuth: (token: string, newUser: User) => void;
  setLoggedOut: () => void;
}

const tokenKey = 'token';
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [me, isLoading, error] = useFetch<User>('me');

  const setAuth = async (token: string, newUser: User) => {
    if (token) {
      localStorage.setItem(tokenKey, token);
      setUser(newUser);
    }
  };

  const setLoggedOut = () => {
    setUser(null);
    localStorage.removeItem(tokenKey);
  };

  const getToken = () => localStorage.getItem(tokenKey);
  const ensureAuthorized = () => getToken() || user;

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  useEffect(() => {
    const resolveUser = async () => {
      const localToken = getToken();

      if (localToken) {
        setUser(me || null);
      }
    };

    resolveUser();
  }, [me]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    // TODO
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        getToken,
        updateUser,
        ensureAuthorized,
        setAuth,
        setLoggedOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };