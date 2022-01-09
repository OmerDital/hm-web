import { Card, styled } from '@mui/material';

export const CardContainer = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));