import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../style/ProfileCard.css'

const card = (
  <div className='cardContent'>
    <div className='profileText'>
      <div className='nameText'>Minh</div>
      <div className='accountText'>ldminh</div>
    </div>
    <div className='box'>
      <div></div>
    </div>
  </div>
);

export default function ProfileCard() {
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
