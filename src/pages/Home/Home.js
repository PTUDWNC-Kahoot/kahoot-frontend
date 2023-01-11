import { useState, useEffect } from 'react'
import React from 'react'
import '../../style/Home.css'
import Header from '../../components/Header'

import ProfileCard from '../../components/ProfileCard'
import AssignmentCard from '../../components/AssignmentCard'
import KahootCard from '../../components/KahootCard'
import GroupsCard from './GroupsCard'
import FormDialog from './CreateGroupForm'
import AlertDialog from './DeleteGroupForm'

import ListGroups from '../../service/ListGroups'
import DeleteGroup from '../../service/DeleteGroup'
import { Snackbar } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider'

function Home() {
    const navigate = useNavigate();
    const { token } = useAuth();
    useEffect(() => {
        if (!token)
            navigate('/login')
    }, [token]);
    const [listGroups, setListGroups] = useState([]);
    const [createButtonClick, setCreateButtonClick] = useState(false);
    const [newGroup, setNewGroup] = useState();
    const [deleteGroupState, setDeleteGroupState] = useState(false);
    const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [groupDlt, setGroupDlt] = useState();
    function deleteGroup(group) {
        setOpenDeleteConfirm(true);
        setGroupDlt(group)
    }

    useEffect(() => {
        if (confirmDelete === true)
            DeleteGroup(token, groupDlt, setDeleteGroupState);
    }, [confirmDelete]);

    useEffect(() => {
        if (token) {
            ListGroups(token, setListGroups)
            setConfirmDelete(false)
        }
    }, [token, newGroup, deleteGroupState]);

    if (token)
        return (
            <div >
                <AlertDialog state={openDeleteConfirm} setState={setOpenDeleteConfirm} confirmDelete={setConfirmDelete}></AlertDialog>
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