
import './PresentationList.css'
import PresentationListBar from '../PresentationListBar/PresentationListBar'
import PresentationElement from '../PresentationElement/PresentationElement'
import PresentationButtonBar from '../PresentationHeader/PresentationButtonBar'
import GetPresentationList from '../../../service/GetPresentationList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd, faArrowDown, faSearch, faX} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import DeletePresentation from '../../../service/DeletePresentation'
import ListPresentation from '../../../service/ListPresentation'
import DeletePresentationAlertDialog from '../../Group/GroupPresentation/DeletePresentationAlertDialog'
import axios from 'axios'
import { useAuth } from '../../../context/AuthProvider'

function PresentationList ()
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
            DeletePresentation(token, presentDlt, setDeletePresentationState);
    }, [confirmDelete]);

    useEffect(() => {
        if (token) {
            GetPresentationList(token, setPresentList);
            setConfirmDelete(false);
           
        }
    }, [token, newPresent, deletePresentationState]);
    if (token)

    return (
        
        <div>
               <DeletePresentationAlertDialog state={openDeleteConfirm} setState={setOpenDeleteConfirm} confirmDelete={setConfirmDelete}></DeletePresentationAlertDialog>
             <PresentationButtonBar token={token} list={presentList} setPresentList={setPresentList} setNewPresent = {setNewPresent}/> 
            <PresentationListBar />
           
             {presentList.length === 0 ? (
                <div className='no-presentation'>
                    <h3>No presentations!</h3>
                </div>) 
                : (<PresentationElement list={presentList} dltFunc={deletePresent}/>)
            } 
      </div>
    )
}
export default PresentationList;
