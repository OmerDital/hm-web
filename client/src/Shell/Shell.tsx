import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Shell = () => (
  <Grid container height='100%'>
    <NavBar height='65px' />
    <Grid item container sx={{ height: 'calc(100% - 65px)' }}>
      <Outlet />
    </Grid>
  </Grid>
);

export default Shell;