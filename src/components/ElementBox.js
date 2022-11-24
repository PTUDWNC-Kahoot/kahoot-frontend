import * as React from 'react';
import '../style/ElementBox.css'
import Box from '@mui/material/Box';

export default function ElementBox({title, info, image, onHandleClick}) {
  return (
    <Box sx={{ minWidth: 275, boxShadow: 3, marginY: 2}}>
      <div className='elementContent' onClick={onHandleClick}>
        <div className='infoBox'>
          <img className='imageBox' src={require('../assets/img/images.png')} alt="image" width={100} ></img>
          <div className='info'>
            <div className='titleBox'>
              {title?  title:'unNamed Title'}
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
