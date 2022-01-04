import {
  AppBar, Grid, Toolbar, Typography
} from '@mui/material';
import NavLink from './NavLink';
import Greeting from './Greeting';
import ColorModeButton from './ColorModeButton';

interface NavBarProps {
  height: string;
}

const NavBar = ({ height }: NavBarProps) => (
  <AppBar position='relative' sx={{ height, minWidth: '620px' }}>
    <Toolbar>
      <Grid
        container
        flexWrap='nowrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid container flexWrap='nowrap' sx={{ width: 'auto' }}>
          <Grid item>
            <Typography variant='h5' marginRight='10px'>
              חזיון שירים | מצעד 41
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent='space-around'
            alignItems='center'
            wrap='nowrap'
            sx={{ width: 'auto', height: '100%' }}
          >
            <NavLink to='/'>ניהול ישויות</NavLink>
            <NavLink to='/distribute-song'>הפצת שיר</NavLink>
            <NavLink to='/calculators'>מחשבונים</NavLink>
            <NavLink to='/users'>משתמשים</NavLink>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ width: 'auto' }}
          alignItems='baseline'
          flexWrap='nowrap'
        >
          <Greeting />
          <ColorModeButton />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;