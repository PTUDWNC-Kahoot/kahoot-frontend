
import './PresentationList.css'
import PresentationListBar from '../PresentationListBar/PresentationListBar'
import PresentationElement from '../PresentationElement/PresentationElement'
import PresentationButtonBar from '../PresentationHeader/PresentationButtonBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd, faArrowDown, faSearch, faX} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
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
    const [presentList, setPresentList] = useState([]);

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

        //create a list presentations by Iterate through elements in an Array with map()
        var listofPresents = [];
        listofPresents = presents.map(present => present);
        //update this list presentations by useSate
        setPresentList(listofPresents);        
    }, []);
   
    return (
        
        <div>
             <PresentationButtonBar list={presentList} setPresentList={setPresentList}/> 
            <PresentationListBar />
           
            {presentList.length === 0 ? (
                <div className='no-presentation'>
                    <h3>No presentations!</h3>
                </div>) 
                : (<PresentationElement list={presentList} setList = {setPresentList}/>)
            }
      </div>
    )
}
export default PresentationList;
