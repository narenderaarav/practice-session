import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabButton({handleChange, value, productList}) {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        {productList.data.map((item) =>{
            return <Tab key={item.label} id={item.key} label={item.label} />
        })}
      </Tabs>
    </Box>
  );
}