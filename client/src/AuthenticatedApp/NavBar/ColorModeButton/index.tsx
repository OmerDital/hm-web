import { Box, IconButton, useTheme } from '@mui/material';
import DarkModeRounded from '@mui/icons-material/DarkModeRounded';
import LightModeRounded from '@mui/icons-material/LightModeRounded';
import { useColorMode } from '../../../providers/ThemeProvider';

const ColorModeButton = () => {
  const { isDarkMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '5px',
        marginLeft: '6px'
      }}
    >
      <IconButton onClick={toggleColorMode}>
        {isDarkMode ? <LightModeRounded /> : <DarkModeRounded />}
      </IconButton>
    </Box>
  );
};

export default ColorModeButton;