import { Button } from '@mui/material';
import { useAuth } from '../providers/Auth';
import { User } from '../types/User';

const Login = () => {
  const newUser : User = {
    id: '1',
    name: 'omer',
    isInLoveWithNoga: true
  };

  const { setAuth } = useAuth();

  return (
    <div>
      <Button onClick={() => setAuth('a', newUser)} variant='contained' color='secondary'>click to login!</Button>
      <h1>login</h1>
    </div>
  );
};

export default Login;