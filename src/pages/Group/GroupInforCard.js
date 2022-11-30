import * as React from 'react';
import { Box, Card, Input, TextField } from '@mui/material';
import '../../style/GroupInforCard.css'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import { useState, useEffect } from 'react';
import { color } from '@mui/system';
import Snackbar from '@mui/material/Snackbar';
import RenameGroup from '../../service/RenameGroup'

export default function GroupInforCard({ group }) {
  const [name, setName] = useState(group.name);
  const [olderName, setOlderName] = useState(name);

  const [editState, setEditState] = useState(false);
  const [doneEditState, setDoneEditState] = useState(false);

  const doneEdit = async () => {
    setEditState(false);
    setOlderName(name)

    await RenameGroup(group, name, setDoneEditState);
    if (name === '') setName('UnNamed')
  
  }

  const onBlurHandle = () => {
    // setTimeout(myGreeting, 1000);
    // function myGreeting() {
    //   setEditState(false);
    //   console.log('ready',olderName)
    //   setName(olderName)
    // }
  }
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined" sx={{ display: 'flex' }}>
        <div className='cardGroupInforContent' onBlur={onBlurHandle}>
          <div className='groupInforText'>
            <Input
              sx={{
                fontWeight: 'bold',
                color: '#FB2576',
                fontSize: 'larger',
              }}
              value={name}
              onChange={(value) => { setName(value.target.value); setEditState(true); setDoneEditState(false) }}
              disableUnderline={true}
            />
          </div>
          {editState && <CheckBoxRoundedIcon onClick={doneEdit} sx={{ color: 'green' }} color='green'></CheckBoxRoundedIcon>}
          <Snackbar
            message="Edit group name successfully"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            autoHideDuration={2000}
            open={doneEditState}
            onClose={() => setDoneEditState(false)}

          />
        </div>
      </Card>
    </Box>
  );
}
