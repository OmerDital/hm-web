import { Box } from '@mui/system';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const TabContainer = ({
  index, value, children, ...other
}: TabPanelProps) => (
  <Box hidden={value !== index} {...other}>
    {value === index && children}
  </Box>
);
export default TabContainer;