import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../style/ProfileCard.css'



export default function ProfileCard() {
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined">
        <div className='cardContent'>
          <div className='profileText'>
            <div className='nameText'>Minh</div>
            <div className='accountText'>ldminh</div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </div>
      </Card>
    </Box>
  );
}
