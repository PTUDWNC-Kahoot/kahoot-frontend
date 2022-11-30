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
import DeleteGroup from '../../service/DeleteGroup'
import { Snackbar } from '@mui/material'

function Home() {
    const [listGroups, setListGroups] = useState([]);
    const [createButtonClick, setCreateButtonClick] = useState(false);
    const [newGroup, setNewGroup] = useState();
    const [deleteGroupState, setDeleteGroupState] = useState();

    function deleteGroup(group) {
        DeleteGroup(group, setDeleteGroupState)
    }
    useEffect(() => {
        ListGroups(setListGroups)
    }, [newGroup, deleteGroupState]);


    return (
        <div >
            <FormDialog state={createButtonClick} setState={setCreateButtonClick} createGroup={setNewGroup} />
            <Header page={'HomePage'} add={setCreateButtonClick} />
            <div className='content'>
                <div className='col1'>
                    <ProfileCard />
                    <AssignmentCard />
                </div>
                <div className='widthMode'>
                    <div className='col2'>
                        <GroupsCard listGroup={listGroups} dltFunc={deleteGroup}></GroupsCard>
                    </div>
                    <div className='col3'>
                        <KahootCard></KahootCard>
                    </div>
                </div>
                <div className='shortMode'>
                    <GroupsCard listGroup={listGroups} dltFunc={deleteGroup}></GroupsCard>
                    <KahootCard></KahootCard>
                </div>
            </div>
            <Snackbar
                message="Delete group successfully"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                autoHideDuration={2000}
                onClose={() => setDeleteGroupState(false)}
                open={deleteGroupState}
            />
        </div>

    )

}

export default Home;