import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../../style/GroupInforCard.css'
import EditIcon from '@mui/icons-material/Edit';


export default function GroupInforCard({groupName}) {
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined" sx={{display: 'flex'}}>
        <div className='cardGroupInforContent'>
          <div className='groupInforText'>
            <div className='groupNameText'>{groupName?groupName:'Group Name'}</div>
          </div>
          <EditIcon></EditIcon>
        </div>
      </Card>
    </Box>
  );
}
