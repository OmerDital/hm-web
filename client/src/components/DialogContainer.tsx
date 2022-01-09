import { ReactNode } from 'react';
import { Breakpoint } from '@mui/system';
import {
  Dialog, DialogTitle, Grid, IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DialogContainerProps {
  open: boolean,
  handleClose: () => void,
  maxWidth: Breakpoint,
  title: string,
  children: ReactNode
}

const DialogContainer = ({
  children, open, handleClose, maxWidth, title
} : DialogContainerProps) => (
  <Dialog open={open} onClose={handleClose} maxWidth={maxWidth} fullWidth>
    <Grid container direction='column' sx={{ p: 2, m: 0 }}>
      <Grid container justifyContent='space-between'>
        <DialogTitle>{title}</DialogTitle>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Grid>
      {children}
    </Grid>
  </Dialog>
);

export default DialogContainer;