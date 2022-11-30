import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../../style/GroupsCard.css'
import ElementBox from '../../components/ElementBox'
import { useNavigate } from "react-router-dom";
import EmptyListNotify from '../../components/EmptyListNotify'

export default function GroupsCard({ listGroup, dltFunc }) {
  const navigate = useNavigate();
  const onClick = (group) => {
    navigate('/group', { state: { group: group } })
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
            {listGroup?.length == 0 ?
              <EmptyListNotify></EmptyListNotify> :
              listGroup.map((group) => {
                const dateTime = new Date(group.CreatedAt)
                return (
                  <ElementBox
                    key={group.id}
                    onHandleClick={() => {
                      onClick(group)
                    }}
                    avatar={group.coverImageUrl}
                    title={group.name}
                    info={'Create at ' + dateTime.toDateString()}
                    deleteFunc={() => dltFunc(group)}
                  ></ElementBox>
                )
              })}

          </div>
        </div>
      </Card>
    </Box>
  );
}
