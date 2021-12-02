import { useState } from 'react';
import {
  Button, IconButton, Stack, Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { SideMenuContainer } from '../SideMenu/SideMenuContainer';
import LoadAlbumDialog from './LoadAlbumDialog';

interface AddAlbumProps {
  handleClose: () => void
}

const AddAlbum = ({ handleClose }: AddAlbumProps) => {
  const [album] = useState();
  const [open, setOpen] = useState(false);

  return (
    <SideMenuContainer
      container
      direction='column'
      alignItems='center'
      width='30%'
    >
      <IconButton onClick={handleClose} sx={{ alignSelf: 'flex-end' }}>
        <CloseIcon />
      </IconButton>
      <LayersOutlinedIcon sx={{ width: '240px', height: '220px' }} />
      {!album && <Typography variant='h6'>אין אלבום טעון כעת</Typography>}
      <Stack direction='row' spacing={2} sx={{ margin: '24px' }}>
        <Button variant='contained' color='success' onClick={() => setOpen(true)}>טען אלבום</Button>
        <Button variant='contained'>צור חדש</Button>
      </Stack>
      <LoadAlbumDialog open={open} handleClose={() => setOpen(false)} />
    </SideMenuContainer>
  );
};

export default AddAlbum;