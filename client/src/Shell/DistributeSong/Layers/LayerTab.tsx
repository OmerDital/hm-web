import {
  Box,
  Button,
  Checkbox,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import useFetch from '../../../hooks/use-fetch';
import { Layer } from '../../../types/Layer';

interface LayerTabProps {
  index: number;
  value: number;
  handleClose: () => void;
}

const LayerTab = ({ value, index, handleClose }: LayerTabProps) => {
  const [layers] = useFetch<Layer>('layers');

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      aria-labelledby={`layer-tab-${index}`}
      sx={{ overflow: 'auto', p: 2 }}
    >
      {value === index && (
        <>
          <TableContainer component={Paper} sx={{ height: 300 }}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'background.default' }}>
                  <TableCell>
                    <Checkbox color='secondary' />
                  </TableCell>
                  <TableCell>שם השכבה</TableCell>
                  <TableCell>בלה בלה</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {layers.map(layer => (
                  <TableRow
                    key={layer.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      <Checkbox color='secondary' />
                    </TableCell>
                    <TableCell component='th' scope='row'>
                      {layer.name}
                    </TableCell>
                    <TableCell>{layer.anotherField}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack direction='row' spacing={3} sx={{ mt: 2 }}>
            <Button color='secondary' variant='contained' size='large'>
              שמור
            </Button>
            <Button variant='contained' size='large' onClick={handleClose}>
              בטל
            </Button>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default LayerTab;