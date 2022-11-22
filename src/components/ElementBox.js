import * as React from 'react';
import '../style/ElementBox.css'
import Box from '@mui/material/Box';

export default function ElementBox() {
  return (
    <Box sx={{ minWidth: 275, boxShadow: 3, marginY: 2}}>
      <div className='elementContent'>
        <div className='infoBox'>
          <img className='imageBox' src={require('../assets/img/images.png')} alt="Smiley face" width={100} ></img>
          <div className='info'>
            <div className='titleBox'>
              BOX TITLE
            </div>
            <div className='moreInfo'>
              Created by ldminh on May 8, 2022
            </div>
          </div>
        </div>


      </div>
    </Box>
  );
}
