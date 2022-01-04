import { Grid, Typography, Button } from '@mui/material';
import CalculatorsTabsPanel from './CalculatorsTabsPanel';

const Calculators = () => (
  <Grid
    container
    direction='column'
    flexWrap='nowrap'
    sx={{ padding: '50px 100px' }}
  >
    <Typography fontSize='32px'>מחשבונים</Typography>
    <Typography>בחר מחשבונים לעבוד איתם</Typography>
    <CalculatorsTabsPanel />
    <Button color='success' variant='contained' sx={{ alignSelf: 'flex-end' }}>
      תחילת עבודה
    </Button>
  </Grid>
);

export default Calculators;