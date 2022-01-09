import { Grid } from '@mui/material';
import CardLink from '../CardLink';

const ManageEntities = () => (
  <Grid container>
    <Grid item xs={12} sm={4}>
      <CardLink to='/manage-entities/manage-albums'>אלבומים</CardLink>
    </Grid>
    <Grid item xs={12} sm={4}>
      <CardLink to='/manage-entities/manage-albums'>נקודות עבודה</CardLink>
    </Grid>
    <Grid item xs={12} sm={4}>
      <CardLink to='/manage-entities/manage-albums'>כלי נגינה</CardLink>
    </Grid>
    <Grid item xs={12} sm={4}>
      <CardLink to='/manage-entities/manage-albums'>תו נלווה</CardLink>
    </Grid>
    <Grid item xs={12} sm={4}>
      <CardLink to='/manage-entities/manage-albums'>תו מוביל</CardLink>
    </Grid>
    <Grid item xs={12} sm={4}>
      <CardLink to='/manage-entities/manage-albums'>משתנים</CardLink>
    </Grid>
  </Grid>
);

export default ManageEntities;