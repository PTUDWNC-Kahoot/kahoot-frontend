import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../style/KahootCard.css'
import ElementBox from './ElementBox'


export default function KahootCard() {

  const KahootList = [{ 'name': 'Bai tap 1' }, { 'name': 'Seminar 14/2' }, { 'name': 'Làm cho zui' },
  { 'name': 'Ca hút' },{ 'name': 'Ka hít' },{ 'name': 'Test' }]
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined">
        <div className='cardContent'>
          <div className='title'>
            <div className='titleText'>My kahoots</div>
          </div>
          <hr />
          <div className='contentBox'>
          {KahootList.map((kahoot) => {
              return (
                <ElementBox
                  key={kahoot.name}
                  onHandleClick={() => {
                  }}
                  title={kahoot.name}
                  info={'Create at Fri Feb 2 2021'}
                ></ElementBox>
              )
            })}
          </div>
        </div></Card>
    </Box>
  );
}
