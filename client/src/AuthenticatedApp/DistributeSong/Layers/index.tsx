import { useState } from 'react';
import {
  Box, Dialog, DialogTitle, Tab, Tabs
} from '@mui/material';
import LayerTab from './LayerTab';

interface LayersProps {
  open: boolean,
  handleClose: () => void
}

const Layers = ({ open, handleClose }: LayersProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
      <DialogTitle>הוספת שכבה</DialogTitle>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabIndex}
          onChange={(e, newValue) => setTabIndex(newValue)}
          aria-label='layers tabs'
          indicatorColor='secondary'
          textColor='secondary'
        >
          <Tab label='קטגוריית שכבה' />
          <Tab label='קטגוריית שכבה' />
          <Tab label='קטגוריית שכבה' />
        </Tabs>
      </Box>
      <LayerTab value={tabIndex} handleClose={handleClose} index={0} />
      <LayerTab value={tabIndex} handleClose={handleClose} index={1} />
      <LayerTab value={tabIndex} handleClose={handleClose} index={2} />
    </Dialog>
  );
};

export default Layers;