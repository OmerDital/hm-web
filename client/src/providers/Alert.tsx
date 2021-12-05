import { AlertColor } from '@mui/material';
import {
  createContext, useState, useContext, ReactNode
} from 'react';
import { SnackBar } from '../components/SnackBar';

interface IAlertContext {
  success: (message: string) => void;
  info: (message: string) => void;
  warning: (message: string) => void;
  error: (message: string) => void;
}

const AlertContext = createContext<IAlertContext>({} as IAlertContext);

const severities = {
  success: 'success' as AlertColor,
  error: 'error' as AlertColor,
  warning: 'warning' as AlertColor,
  info: 'info' as AlertColor
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

  const success = (alertMessage: string) => {
    openAlert(alertMessage, severities.success);
  };

  const info = (alertMessage: string) => {
    openAlert(alertMessage, severities.info);
  };

  const warning = (alertMessage: string) => {
    openAlert(alertMessage, severities.warning);
  };

  const error = (alertMessage: string) => {
    openAlert(alertMessage, severities.error);
  };

  return (
    <AlertContext.Provider
      value={{
        success,
        error,
        warning,
        info
      }}
      {...props}
    >
      {children}
      {opened && (
        <SnackBar
          message={message}
          opened={opened}
          handleClose={closeAlert}
          severity={severity}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);