import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../../style/OwnerCard.css'
import ElementBox from '../../components/ElementBox'
import { useState } from 'react';
import EmptyListNotify from '../../components/EmptyListNotify'

export default function MemberCard({ list, changeRoleHandle, deleteMember}) {
  return (
    <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
      <Card variant="outlined">
        <div className='cardContent'>
          <div className='title'>
            <div className='titleText'>Member</div>
          </div>
          <hr />
          <div className='contentBox'>
            {list?.length === 0 ?
              <EmptyListNotify></EmptyListNotify>
              : list?.map((member) => {
                return (
                  <ElementBox
                    key={member.userId}
                    avatar={member.coverImageUrl}
                    title={member.name}
                    type={'user'}
                    userRole={member.role}
                    changeRoleHandle={changeRoleHandle}
                    id={member.userId}
                    deleteFunc={() => deleteMember(member.userId,4)}

                  ></ElementBox>
                )
              })}
          </div>
        </div>
      </Card>
    </Box>
  );
}
