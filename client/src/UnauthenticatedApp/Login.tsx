import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/Auth';
import { User } from '../types/User';

const Login = () => {
  const navigate = useNavigate();
  const newUser: User = {
    id: '1',
    name: 'omer',
    isInLoveWithNoga: true
  };

  const { setAuth } = useAuth();

  const handleLogin = () => {
    setAuth('a', newUser);
    navigate('/');
  };

  return (
    <div>
      <Button onClick={handleLogin} variant='contained' color='secondary'>
        click to login!
      </Button>
      <h1>login</h1>
    </div>
  );
};

export default Login;