import { useState } from 'react';

const useAuth = () => {
  const [user] = useState({ user: 'omer' });

  return user;
};

export default useAuth;