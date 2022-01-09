import {
  Divider, Stack, Typography, Button, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CardContainer } from '../../CardContainer';

const albums = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 3,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }
];

const ManageAlbums = () => (
  <Stack
    spacing={2}
    alignItems='center'
    sx={{
      height: '100%', width: '100%', paddingTop: '50px', overflow: 'auto'
    }}
  >
    <Stack direction='row' justifyContent='space-between' sx={{ width: '85%' }}>
      <Typography variant='h4'>אלבומים</Typography>
      <Button variant='contained' color='success'>יצירת אלבום חדש + </Button>
    </Stack>
    {albums?.map(album => (
      <CardContainer sx={{ height: '15%', width: '85%' }}>
        <Stack direction='row' sx={{ height: '100%', width: '100%' }}>
          <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
            <Typography variant='caption'>שם</Typography>
          </Stack>
          <Divider orientation='vertical' flexItem />
          <Stack justifyContent='center' sx={{ padding: '10px', width: '22%' }}>
            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
            <Typography variant='caption'>תיאור</Typography>
          </Stack>
          <Divider orientation='vertical' flexItem />
          <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
            <Typography variant='caption'>מדינת הוצאה</Typography>
          </Stack>
          <Divider orientation='vertical' flexItem />
          <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
            <Typography variant='caption'>סוג אלבום</Typography>
          </Stack>
          <Divider orientation='vertical' flexItem />
          <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
            <Typography variant='caption'>מאזינים לחישוב</Typography>
          </Stack>
          <Divider orientation='vertical' flexItem />
          <Stack justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{album.name}</Typography>
            <Typography variant='caption'>מגירה/הוצאה</Typography>
          </Stack>
          <Divider orientation='vertical' flexItem />
          <Stack direction='row' justifyContent='center' sx={{ padding: '10px', width: '13%' }}>
            <IconButton>
              <EditIcon color='success' />
            </IconButton>
            <IconButton>
              <DeleteForeverIcon color='error' />
            </IconButton>
          </Stack>
        </Stack>
      </CardContainer>
    ))}
  </Stack>
);

export default ManageAlbums;