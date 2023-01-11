import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../style/ProfileCard.css'



export default function ProfileCard({userInfo}) {
  const user = userInfo;
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined">
        <div className='cardContent'>
          <div className='profileText'>
            <div className='nameText'>{user.name}</div>
            <div className='accountText'>{user.email}</div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </div>
      </Card>
    </Box>
  );
}
