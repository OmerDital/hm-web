import { useState, SyntheticEvent } from 'react';
import {
  Tab, Tabs, Typography, Box
} from '@mui/material';
import TabContainer from './TabContainer';

const CalculatorsTabsPanel = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Box height='100%'>
        <Tabs
          value={value}
          onChange={(event: SyntheticEvent, newValue: number) => setValue(newValue)}
          textColor='secondary'
          indicatorColor='secondary'
        >
          <Tab label='מחשבונים' />
          <Tab label='עוד מחשבונים' />
          <Tab label='עוד מחשבונים' />
        </Tabs>
        <TabContainer value={value} index={0}>
          <Typography>Item One</Typography>
        </TabContainer>
        <TabContainer value={value} index={1}>
          <Typography>Item two</Typography>
        </TabContainer>
        <TabContainer value={value} index={2}>
          <Typography>Item three</Typography>
        </TabContainer>
      </Box>
    </>
  );
};

export default CalculatorsTabsPanel;