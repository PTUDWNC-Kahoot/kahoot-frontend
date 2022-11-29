import { useState, useEffect } from 'react'
import React from 'react'
import '../../style/Home.css'
import Header from '../../components/Header'

import ProfileCard from '../../components/ProfileCard'
import AssignmentCard from '../../components/AssignmentCard'
import KahootCard from '../../components/KahootCard'
import GroupsCard from './GroupsCard'
import FormDialog from './CreateGroupForm'

import ListGroups from '../../service/ListGroups'

function Home() {
    const [listGroups, setListGroups] = useState([]);
    const [createButtonClick, setCreateButtonClick] = useState(false);
    const [newGroup, setNewGroup] = useState();
    useEffect(() => {
        ListGroups(setListGroups)
    }, [newGroup]);

   
    return (
        <div >
            <FormDialog state={createButtonClick} setState={setCreateButtonClick} createGroup={setNewGroup} />

            <Header page={'HomePage'} add={setCreateButtonClick} />
            <div className='content'>
                <div className='col1'>
                    <ProfileCard />
                    <AssignmentCard />

                </div>
                {/* {dimensions.width > 1370?                    */}
                <div className='widthMode'>
                    <div className='col2'>
                        <GroupsCard listGroup={listGroups}></GroupsCard>

                    </div>
                    <div className='col3'>
                        <KahootCard></KahootCard>

                    </div>
                </div>
                <div className='shortMode'>
                    <GroupsCard listGroup={listGroups}></GroupsCard>
                    <KahootCard></KahootCard>

                </div>

                {/* } */}


            </div>
        </div>

    )

}

export default Home;