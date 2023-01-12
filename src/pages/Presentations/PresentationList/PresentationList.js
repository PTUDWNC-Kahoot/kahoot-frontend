
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
    const [newPresent, setNewPresent] = useState();
    const [presentList, setPresentList] = useState([]);
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
            ListPresentation(token,setPresentList);
          //  console.log(presentList);
        }
    }, [token]);
    // useEffect(() => {
    //     if (token) {
    //         ListPresentation(token,setPresentList);
    //         console.log(presentList);
    //         setConfirmDelete(false)
    //     }
    // }, [token, newPresent, deletePresentationState]);


    // useEffect(() => {
    //     ListPresentation(token,setPresentList);
    //     // GetPresentationList(setPresentList);

    //     //create a list presentations by Iterate through elements in an Array with map()
    //     // var listofPresents = [];
    //     // listofPresents = presents.map(present => present);
    //     // //update this list presentations by useSate
    //     // setPresentList(listofPresents);        
    // }, []);

    // useEffect(() => {

    //     ListPresentation(setPresentList);
    //     // GetPresentationList(setPresentList);

    //     //create a list presentations by Iterate through elements in an Array with map()
    //     // var listofPresents = [];
    //     // listofPresents = presents.map(present => present);
    //     // //update this list presentations by useSate
    //     // setPresentList(listofPresents);        
    // }, []);
   
    return (
        
        <div>
               <DeletePresentationAlertDialog state={openDeleteConfirm} setState={setOpenDeleteConfirm} confirmDelete={setConfirmDelete}></DeletePresentationAlertDialog>
             <PresentationButtonBar list={presentList} setPresentList={setPresentList}/> 
            <PresentationListBar />
           
            {/* {presentList.length === 0 ? (
                <div className='no-presentation'>
                    <h3>No presentations!</h3>
                </div>) 
                : (<PresentationElement list={presentList} dltFunc={deletePresent}/>)
            } */}
      </div>
    )
}
export default PresentationList;
