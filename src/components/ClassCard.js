import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../style/ClassCard.css'
import ElementBox from './ElementBox'
import { useNavigate } from "react-router-dom";



export default function ClassCard() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/group')
  }
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined">
        <div className='cardContent'>
          <div className='title'>
            <div className='titleText'>My Groups</div>
          </div>
          <hr />
          <div className='contentBox'>
            <ElementBox
              onHandleClick={() => onClick()}
              title={'PTUDW'}
            ></ElementBox>
            <ElementBox
              onHandleClick={() => onClick()}
              title={'Mobile'}
            ></ElementBox>
            <ElementBox
              onHandleClick={() => onClick()}
              title={'Kiến trúc phần mềm'}
            ></ElementBox>


          </div>
        </div>
      </Card>
    </Box>
  );
}
