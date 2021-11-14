import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Shell = () => (
  <Grid container height='100%'>
    <NavBar height='10%' />
    <Grid item container sx={{ height: '90%' }}>
      <Outlet />
    </Grid>
  </Grid>
);

export default Shell;