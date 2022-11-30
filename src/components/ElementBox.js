import * as React from 'react';
import '../style/ElementBox.css'
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function ElementBox({ title, info, image, onHandleClick, avatar, deleteFunc }) {
  return (
    <Box sx={{ minWidth: 275, boxShadow: 3, marginY: 2 }}>
      <div className='elementContent' onClick={onHandleClick}>
        <div className='infoBox'>
          <img className='imageBox' src={avatar? avatar : require('../assets/img/images.png')} alt="image" width={100} ></img>
          <div className='info'>
            <div className='titleBox'>

              {title ? title : 'unNamed'}
              <div className='iconDelete'onClick={(event)=>{event.stopPropagation(); deleteFunc()}}>
                <DeleteForeverIcon sx={{
                  color: 'red'
                }} ></DeleteForeverIcon>
              </div>
            </div>
            <div className='moreInfo'>
              {info?info : 'Create by ldminh for fun'}
            </div>
          </div>
        </div>


      </div>
    </Box>
  );
}
