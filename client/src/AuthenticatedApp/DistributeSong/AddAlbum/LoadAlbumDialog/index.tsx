import { useState } from 'react';
import { Grid, Paper, Stack } from '@mui/material';
import { Album } from '../../../../types/Album';
import AlbumCardCell from '../AlbumCardCell';
import useFetch from '../../../../hooks/use-fetch';
import SortData from '../../../../components/SortData';
import SearchByNameFilter from '../../../../components/SearchByNameFilter';
import DialogContainer from '../../../../components/DialogContainer';

interface LoadAlbumDialogProps {
  open: boolean;
  handleClose: () => void;
}

const sortOptions = [
  { label: 'שם', value: 'name' },
  { label: 'תיאור', value: 'description' },
  { label: 'מדינת הוצאה', value: 'country' },
  { label: 'סוג אלבום', value: 'type' },
  { label: 'מאזינים לחישוב', value: 'listeners' },
  { label: 'מגירה\\הוצאה', value: 'purpose' }
];

const LoadAlbumDialog = ({ open, handleClose }: LoadAlbumDialogProps) => {
  const [albumsToDisplay, setAlbumsToDisplay] = useState<Album[]>([]);
  const [albums] = useFetch<Album[]>('albums', []);

  return (
    <DialogContainer
      open={open}
      handleClose={handleClose}
      maxWidth='md'
      title='טעינת אלבום'
    >
      <Stack direction='row' spacing={2} sx={{ m: 2 }}>
        <SearchByNameFilter
          data={albums as Album[]}
          setDataToDisplay={setAlbumsToDisplay}
        />
        <SortData
          dataToDisplay={albumsToDisplay}
          setDataToDisplay={setAlbumsToDisplay}
          defaultSortBy='name'
          sortOptions={sortOptions}
        />
      </Stack>
      <Stack spacing={2} sx={{ height: '300px', overflow: 'auto', px: '10px' }}>
        {albumsToDisplay.map(album => (
          <Paper
            key={album.id}
            elevation={1}
            sx={{
              height: 80,
              py: '32px',
              bgcolor: 'background.default'
            }}
            data-testid='album'
          >
            <Grid
              container
              alignContent='center'
              height='100%'
              spacing={1}
              margin={0}
            >
              <AlbumCardCell text={album.name} label='שם' />
              <AlbumCardCell text={album.description} label='תיאור' />
              <AlbumCardCell text={album.country} label='מדינת הוצאה' />
              <AlbumCardCell text={album.type} label='סוג אלבום' />
              <AlbumCardCell text={album.listeners} label='מאזינים לחישוב' />
              <AlbumCardCell text={album.purpose} label='מגירה\הוצאה' />
            </Grid>
          </Paper>
        ))}
      </Stack>
    </DialogContainer>
  );
};

export default LoadAlbumDialog;