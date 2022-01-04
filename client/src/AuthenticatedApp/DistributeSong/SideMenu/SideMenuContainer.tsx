import { Grid, styled } from '@mui/material';

export const SideMenuContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.background.default}`,
  minWidth: '180px'
}));