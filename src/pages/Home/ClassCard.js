import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../../style/ClassCard.css'
import ElementBox from '../../components/ElementBox'
import { useNavigate } from "react-router-dom";



export default function ClassCard({ }) {
  const navigate = useNavigate();
  const onClick = (groupName) => {
    navigate('/group', { state: {groupName: groupName }})
  }

  const listGroup = [{ 'name': 'PTUDW' }, { 'name': 'Mobile' }, { 'name': 'Kiến trúc phần mềm' }]
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined">
        <div className='cardContent'>
          <div className='title'>
            <div className='titleText'>My Groups</div>
          </div>
          <hr />
          <div className='contentBox'>
            {listGroup.map((group) => {
              return (
                <ElementBox
                  key={group.name}
                  onHandleClick={() => {
                    onClick(group.name)
                  }}
                  title={group.name}
                ></ElementBox>
              )
            })}

          </div>
        </div>
      </Card>
    </Box>
  );
}
