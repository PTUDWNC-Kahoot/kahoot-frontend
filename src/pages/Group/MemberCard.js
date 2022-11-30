import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../../style/OwnerCard.css'
import ElementBox from '../../components/ElementBox'
import { useState } from 'react';
import EmptyListNotify from '../../components/EmptyListNotify'

export default function MemberCard({ list }) {
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
                    key={member.id}
                    avatar={member.coverImageUrl}
                    title={member.name}
                  ></ElementBox>
                )
              })}
          </div>
        </div>
      </Card>
    </Box>
  );
}
