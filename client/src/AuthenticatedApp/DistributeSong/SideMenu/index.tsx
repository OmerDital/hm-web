import { List, ListItem, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AddIcon from '@mui/icons-material/Add';
import LayersIcon from '@mui/icons-material/Layers';
import MenuButton from './MenuButton';
import { SideMenuContainer } from './SideMenuContainer';

interface SideMenuProps {
  handleAlbumOpen: () => void;
  handleLayersOpen: () => void;
}

const SideMenu = ({ handleAlbumOpen, handleLayersOpen }: SideMenuProps) => (
  <SideMenuContainer
    container
    direction='column'
    alignItems='start'
    width='10%'
    sx={{ minWidth: '150px' }}
  >
    <List sx={{ position: 'relative' }}>
      <ListItem>
        <Typography variant='h6'>אלבום</Typography>
        <LockOpenIcon />
      </ListItem>
      <MenuButton onClick={handleAlbumOpen} text='הוספת אלבום' Icon={AddIcon} />
      <MenuButton text='שכבות' Icon={LayersIcon} onClick={handleLayersOpen} />
      <ListItem sx={{ marginTop: '10px' }}>
        <Typography variant='h6'>שיר</Typography>
        <LockOpenIcon />
      </ListItem>
      <MenuButton text='הוספת שיר' Icon={LayersIcon} onClick={() => null} />
      <MenuButton text='נקודת עבודה' Icon={LayersIcon} onClick={() => null} />
      <MenuButton text='נקודת יציאה' Icon={LayersIcon} onClick={() => null} />
      <MenuButton text='משתנים' Icon={LayersIcon} onClick={() => null} />
      <MenuButton text='חישוב' Icon={LayersIcon} onClick={() => null} />
      <MenuButton text='חישוב סופי' Icon={LayersIcon} onClick={() => null} />
    </List>
  </SideMenuContainer>
);

export default SideMenu;