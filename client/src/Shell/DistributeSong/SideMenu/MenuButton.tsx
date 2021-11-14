import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface MenuButtonProps {
  text: string,
  Icon: SvgIconComponent,
  onClick: () => void
}

const MenuButton = ({ text, Icon, onClick }: MenuButtonProps) => (
  <ListItem button sx={{ padding: '4px' }} onClick={onClick}>
    <ListItemIcon sx={{ minWidth: '32px' }}>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default MenuButton;