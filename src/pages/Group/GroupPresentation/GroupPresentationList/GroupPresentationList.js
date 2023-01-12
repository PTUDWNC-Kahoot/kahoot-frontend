
import GroupPresentationListBar from '../GroupPresentationListBar/GroupPresentationListBar'
import GroupPresentationElement from '../GroupPresentationElement/GroupPresentationElement'
import GroupPresentationButtonBar from '../GroupPresentationButtonBar/GroupPresentationButtonBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd, faArrowDown, faSearch, faX} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
import GetGroupPresentationList from '../../../../service/GetGroupPresentationList'
import { useAuth } from '../../../../context/AuthProvider'
import DeleteGroupPresentation from '../../../../service/DeleteGroupPresentation'
import DeletePresentationAlertDialog from '../DeletePresentationAlertDialog'

function GroupPresentationList ({group})
{
    const { token } = useAuth();

    const [presentList, setPresentList] = useState([]);
    const [newPresent, setNewPresent] = useState();
    const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
    const [deletePresentationState, setDeletePresentationState]  = useState();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [presentDlt,setPresentDlt] = useState();

    
    function deletePresent(present) {
        setOpenDeleteConfirm(true);
        setPresentDlt(present);
    }
    useEffect(() => {
        if (confirmDelete === true)
        DeleteGroupPresentation(token, presentDlt, setDeletePresentationState);
    }, [confirmDelete]);


    useEffect(() => {
        if (token) {
            GetGroupPresentationList(token, group, setPresentList);
            setConfirmDelete(false);
           
        }
    }, [token, newPresent, deletePresentationState]);
    if (token)
    return (
        <div>
               <DeletePresentationAlertDialog state={openDeleteConfirm} setState={setOpenDeleteConfirm} confirmDelete={setConfirmDelete}></DeletePresentationAlertDialog>
             <GroupPresentationButtonBar group={group} token={token} list={presentList} setPresentList={setPresentList} setNewPresent = {setNewPresent}/> 
            <GroupPresentationListBar />
            {presentList.length === 0 ? (
                <div className='no-presentation'>
                    <h3>No presentations!</h3>
                </div>) 
                : (<GroupPresentationElement group={group} list={presentList} dltFunc={deletePresent}/>)
            }
      </div>
    )
}
export default GroupPresentationList;
