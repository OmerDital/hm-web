import { useState } from 'react';
import {
  Button, IconButton, Stack, Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { SideMenuContainer } from '../SideMenu/SideMenuContainer';
import LoadAlbumDialog from './LoadAlbumDialog';
import useOpen from '../../../hooks/use-open';
import CreateAlbumDialog from '../../ManageEntities/Albums/CreateAlbumDialog';

interface AddAlbumProps {
  handleClose: () => void;
}

const AddAlbum = ({ handleClose }: AddAlbumProps) => {
  const [album] = useState();
  const [isLoadAlbumOpen, handleLoadAlbumClose, handleLoadAlbumOpen] = useOpen();
  const [isCreateAlbumOpen, handleCreateAlbumClose, handleCreateAlbumOpen] = useOpen();

  return (
    <SideMenuContainer
      container
      direction='column'
      alignItems='center'
      width='30%'
      flexWrap='nowrap'
    >
      <IconButton onClick={handleClose} sx={{ alignSelf: 'flex-end' }}>
        <CloseIcon />
      </IconButton>
      <LayersOutlinedIcon sx={{ width: '240px', height: '220px' }} />
      {!album && <Typography variant='h6'>אין אלבום טעון כעת</Typography>}
      <Stack direction='row' spacing={2} sx={{ m: '24px' }}>
        <Button
          variant='contained'
          color='secondary'
          onClick={handleLoadAlbumOpen}
        >
          טען אלבום
        </Button>
        <Button variant='contained' onClick={handleCreateAlbumOpen}>
          צור חדש
        </Button>
      </Stack>
      <LoadAlbumDialog
        open={isLoadAlbumOpen}
        handleClose={handleLoadAlbumClose}
      />
      <CreateAlbumDialog
        open={isCreateAlbumOpen}
        handleClose={handleCreateAlbumClose}
      />
    </SideMenuContainer>
  );
};

export default AddAlbum;