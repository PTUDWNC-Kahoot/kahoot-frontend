
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
import DeletePresentationAlertDialog from '../../Group/GroupPresentation/DeletePresentationForm'
import axios from 'axios'
import { useAuth } from '../../../context/AuthProvider'

const presents = [
    
    {
        id: 1,
        name: "My presentation",
        owner: "dtn2001",
        modifiedDay: "12/12/2022",
        createdDay: "09/12/2022",
    },
    {
        id: 2,
        name: "WebNC presentation",
        owner: "thuytrinh01",
        modifiedDay: "02/12/2022",
        createdDay: "04/11/2022",
    },
    {
        id: 3,
        name: "KCPM's presentation",
        owner: "ducminh02",
        modifiedDay: "14/12/2022",
        createdDay: "01/12/2022",
    },
    {
        id: 4,
        name: "Mobile",
        owner: "tuyetnhu03",
        modifiedDay: "2/12/2022",
        createdDay: "10/11/2022",
    },
    {
        id: 5,
        name: "GB07",
        owner: "anhminh2001",
        modifiedDay: "03/12/2022",
        createdDay: "22/11/2022",
    },
]
function PresentationList ()
{
    const { token } = useAuth();

    const [presentList, setPresentList] = useState([]);
    const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
    const [deletePresentationState, setDeletePresentationState]  = useState();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [presentDlt,setPresentDlt] = useState();
    // const [newPresent, setNewPresent] = useState();
  
    function deletePresent(present) {
        setOpenDeleteConfirm(true);
        setPresentDlt(present);
    }
    useEffect(() => {
        if (confirmDelete === true)
            DeletePresentation(token, presentDlt, setDeletePresentationState);
    }, [confirmDelete]);


    // set list data
    // useEffect(() => {
    //     ListPresentation(setPresentList);
    //     setConfirmDelete(false);
    // }, [newPresent,deletePresentationState]);
    //Load and show presentation
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     async function loadGroups () {
    //         const res = await axios.get(`${API_URL}presentation`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //     setPresentList(res.data.Presentations);
    //     }
    //     loadGroups();
    // }, []);

    useEffect(() => {

        ListPresentation(setPresentList);
        // GetPresentationList(setPresentList);

        //create a list presentations by Iterate through elements in an Array with map()
        // var listofPresents = [];
        // listofPresents = presents.map(present => present);
        // //update this list presentations by useSate
        // setPresentList(listofPresents);        
    }, []);
   
    return (
        
        <div>
               <DeletePresentationAlertDialog state={openDeleteConfirm} setState={setOpenDeleteConfirm} confirmDelete={setConfirmDelete}></DeletePresentationAlertDialog>
             <PresentationButtonBar list={presentList} setPresentList={setPresentList}/> 
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
