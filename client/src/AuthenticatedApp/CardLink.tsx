import { Button, CardContent } from '@mui/material';
import { LinkProps } from 'react-router-dom';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { CardContainer } from './CardContainer';
import CustomLink from '../components/CustomLink';

const CardLink = ({ children, to }: LinkProps) => (
  <Button
    sx={{ height: '100%', width: '100%' }}
    component={CustomLink}
    to={to}
  >
    <CardContainer sx={{ width: '80%' }}>
      <CardContent sx={{ pb: '0' }}>
        <LayersOutlinedIcon sx={{ height: '50px', width: '50px' }} />
      </CardContent>
      <CardContent sx={{ pt: '0' }}>
        {children}
      </CardContent>
    </CardContainer>
  </Button>
);

export default CardLink;