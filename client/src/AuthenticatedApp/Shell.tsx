import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import RequireAuth from '../components/RequireAuth';

const Shell = () => (
  <RequireAuth>
    <Grid container height='100%'>
      <NavBar height='65px' />
      <Grid item container sx={{ height: 'calc(100% - 65px)' }}>
        <Outlet />
      </Grid>
    </Grid>
  </RequireAuth>
);

export default Shell;