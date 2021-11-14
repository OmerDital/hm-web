import { useState } from 'react';
import {
  Button, IconButton, Stack, Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { SideMenuContainer } from './SideMenu/SideMenuContainer';

interface AddAlbumProps {
  handleClose: () => void
}

const AddAlbum = ({ handleClose }: AddAlbumProps) => {
  const [album] = useState();

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
        <Button variant='contained' color='success'>טען אלבום</Button>
        <Button variant='contained'>צור חדש</Button>
      </Stack>
    </SideMenuContainer>
  );
};

export default AddAlbum;