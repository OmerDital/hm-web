import {
  AppBar, Grid, Toolbar, Typography
} from '@mui/material';
import NavLink from './NavLink';

interface NavBarProps {
  height: string;
}

const NavBar = ({ height }: NavBarProps) => (
  <AppBar position='relative' sx={{ height }}>
    <Toolbar sx={{ padding: '5px' }}>
      <Grid container flexWrap='nowrap'>
        <Grid item>
          <Typography variant='h5'>חזיון שירים | מצעד 41</Typography>
        </Grid>
        <Grid
          container
          justifyContent='space-around'
          alignItems='center'
          flexWrap='noWrap'
          sx={{ width: 'auto', height: '100%' }}
        >
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