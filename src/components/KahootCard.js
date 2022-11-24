import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../style/KahootCard.css'
import ElementBox from './ElementBox'

const card = (
  <div className='cardContent'>
    <div className='title'>
      <div className='titleText'>My kahoots</div>
    </div>
    <hr/>
    <div className='contentBox'>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>


    </div>
  </div>
);

export default function KahootCard() {
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
