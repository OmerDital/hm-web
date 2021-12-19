import { Snackbar, Alert, AlertColor } from '@mui/material';

interface SnackBarProps {
  opened: boolean;
  handleClose: () => void;
  message: string;
  severity?: AlertColor;
}

export const SnackBar = ({
  opened,
  handleClose,
  message,
  severity = 'success'
}: SnackBarProps) => (
  <Snackbar
    open={opened}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    autoHideDuration={4000}
  >
    <Alert onClose={handleClose} severity={severity}>
      {message}
    </Alert>
  </Snackbar>
);