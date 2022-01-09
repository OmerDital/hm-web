import { Grid } from '@mui/material';
import CardLink from '../CardLink';

const Calculators = () => (
  <Grid container>
    <Grid item xs={12} sm={6}>
      <CardLink to='/calculators/love-calculator'>מחשבון אהבה</CardLink>
    </Grid>
    <Grid item xs={12} sm={6}>
      <CardLink to='/calculators/love-calculator'>מחשבון אהבה</CardLink>
    </Grid>
    <Grid item xs={12} sm={6}>
      <CardLink to='/calculators/love-calculator'>מחשבון אהבה</CardLink>
    </Grid>
    <Grid item xs={12} sm={6}>
      <CardLink to='/calculators/love-calculator'>מחשבון אהבה</CardLink>
    </Grid>
  </Grid>
);

export default Calculators;