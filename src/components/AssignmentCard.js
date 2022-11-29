import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../style/AssignmentCard.css'
import ElementBox from './ElementBox'
const card = (
  <div className='cardContent'>
    <div className='title'>
      <div className='titleText'>Assignment</div>
    </div>
    <hr/>
    <div className='contentBox'>
        <ElementBox info={'Create at Thu May 4 2021'}></ElementBox>
        <ElementBox info={'Create at Wed April 5 2022'}></ElementBox>
        <ElementBox info={'Create at Mon Nov 10 2022'}></ElementBox>

    </div>
  </div>
);

export default function AssignmentCard() {
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
