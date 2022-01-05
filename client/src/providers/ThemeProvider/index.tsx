import {
  createContext, ReactNode, useContext, useState
} from 'react';
import { ThemeProvider } from '@mui/material';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

interface IColorModeContext {
  isDarkMode: boolean;
  toggleColorMode: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ColorModeContext = createContext<IColorModeContext>(
  {} as IColorModeContext
);

export const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, SetIsDarkMode] = useState(false);

  const toggleColorMode = () => {
    SetIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ColorModeContext.Provider value={{ isDarkMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);