import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Shell = () => (
  <>
    <NavBar />
    <Grid container>
      <Outlet />
    </Grid>
  </>
);

export default Shell;