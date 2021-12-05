import { AlertColor } from '@mui/material';
import {
  createContext, useState, useContext, ReactNode
} from 'react';
import { SnackBar } from '../components/SnackBar';
import { Severities } from '../types/Severities';

interface IAlertContext {
  closeAlert: () => void;
  openAlert: (message: string, sevirity: AlertColor) => void;
  severities: Severities;
}

const AlertContext = createContext<IAlertContext>({} as IAlertContext);

const severities = {
  success: 'success' as AlertColor,
  error: 'error' as AlertColor,
  warning: 'warning' as AlertColor
};

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider = ({ children, ...props }: AlertProviderProps) => {
  const [message, setMessage] = useState('');
  const [opened, setOpened] = useState(false);
  const [severity, setSeverity] = useState(severities.success);

  const openAlert = (alertMessage: string, alertSeverity: AlertColor) => {
    setMessage(alertMessage);
    setOpened(true);
    setSeverity(alertSeverity);
  };

  const closeAlert = () => {
    setMessage('');
    setOpened(false);
    setSeverity(severities.success);
  };

  return (
    <AlertContext.Provider
      value={{
        closeAlert,
        openAlert,
        severities
      }}
      {...props}
    >
      <SnackBar
        message={message}
        opened={opened}
        handleClose={closeAlert}
        severity={severity}
      />
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);