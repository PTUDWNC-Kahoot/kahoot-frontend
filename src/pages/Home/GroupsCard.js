import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../../style/GroupsCard.css'
import ElementBox from '../../components/ElementBox'
import { useNavigate } from "react-router-dom";



export default function GroupsCard({ listGroup}) {
  const navigate = useNavigate();
  const onClick = (group) => {
    navigate('/group', { state: {group: group }})
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
            {listGroup.map((group) => {
              return (
                <ElementBox
                  key={group.id}
                  onHandleClick={() => {
                    onClick(group)
                  }}
                  avatar={group.coverImageUrl}
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
