import * as React from 'react';
import '../style/ElementBox.css'
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ElementBox({ title, info, userRole, onHandleClick, avatar, deleteFunc, type, changeRoleHandle, id }) {
  const [role, setRole] = React.useState(userRole);

  const handleChange = (event) => {

    if (event.target.value !== userRole) {
      var state = changeRoleHandle(id,event.target.value)
      if (state === true) setRole(event.target.value);
    }

  };


  return (
    <Box sx={{ minWidth: 275, boxShadow: 3, marginY: 2 }}>
      <div className='elementContent' onClick={onHandleClick}>
        <div className='infoBox'>
          <img className='imageBox' src={avatar ? avatar : require('../assets/img/images.png')} alt="image" width={100} ></img>
          <div className='info'>
            <div className='titleBox'>

              {title ? title : 'unNamed'}
              <div className='iconDelete' onClick={(event) => { event.stopPropagation(); deleteFunc() }}>
                <DeleteForeverIcon sx={{
                  color: 'red'
                }} ></DeleteForeverIcon>
              </div>
            </div>
            {type !== 'user' &&
              <div className='moreInfo'>
                {info ? info : ''}
              </div>}

            <div className='changeRole'>
              {type === 'user' &&
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth size='small'>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Role"
                      defaultValue={userRole}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Owner</MenuItem>
                      <MenuItem value={2}>CoOwner</MenuItem>
                      <MenuItem value={3}>Member</MenuItem>
                    </Select>
                  </FormControl>
                </Box>}
            </div>

          </div>
        </div>


      </div>
    </Box>
  );
}
