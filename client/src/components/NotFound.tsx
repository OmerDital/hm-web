import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      direction='column'
      sx={{
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <Typography fontSize='216px' color='rgb(0, 94, 93)'>
        404
      </Typography>
      <Typography variant='h5'>
        {' אופס! הדף שביקשת אינו נמצא, אנא חזור לדף הבית ונסה שנית  '}
      </Typography>
      <Button variant='contained' color='success' onClick={() => navigate('/manage-entities')}>
        לדף הבית
      </Button>
    </Grid>
  );
};

export default NotFound;