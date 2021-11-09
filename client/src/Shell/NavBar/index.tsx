import {
  AppBar, Grid, Toolbar, Typography,
} from '@mui/material';
import NavLink from './NavLink';

const NavBar = () => (
  <AppBar position='relative'>
    <Toolbar sx={{ padding: '5px' }}>
      <Grid container>
        <Grid item width='20%'>
          <Typography variant='h5'>חזיון שירים | מצעד 41</Typography>
        </Grid>
        <Grid container item width='40%' justifyContent='space-around'>
          <NavLink to='/'>ניהול ישויות</NavLink>
          <NavLink to='/distribute-song'>הפצת שיר</NavLink>
          <NavLink to='/calculators'>מחשבונים</NavLink>
          <NavLink to='/users'>משתמשים</NavLink>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;