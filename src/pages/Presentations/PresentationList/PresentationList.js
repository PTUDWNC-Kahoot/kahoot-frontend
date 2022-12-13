
import './PresentationList.css'
import PresentationListBar from './PresentationListBar/PresentationListBar'
import PresentationElement from './PresentationElement/PresentationElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd, faArrowDown, faSearch, faX} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
const present = [
    
    {
        key: 1,
        name: "Đoàn Thu Ngân",
        owner: "dtn2001",
        modifiedDay: "12/12/2022",
        createdDay: "09/12/2022",
    },
    {
        key: 2,
        name: "Trịnh Thị Thuỳ",
        owner: "thuytrinh01",
        modifiedDay: "02/12/2022",
        createdDay: "04/11/2022",
    },
    {
        key: 3,
        name: "Lê Đức Minh",
        owner: "ducminh02",
        modifiedDay: "14/12/2022",
        createdDay: "01/12/2022",
    },
    {
        key: 4,
        name: "Nguyễn Thị Tuyết Như",
        owner: "tuyetnhu03",
        modifiedDay: "2/12/2022",
        createdDay: "10/11/2022",
    },
    {
        key: 5,
        name: "Trần Minh Anh",
        owner: "anhminh2001",
        modifiedDay: "03/12/2022",
        createdDay: "22/11/2022",
    },
]
function PresentationList ()
{
    const [presentList, setPresentList] = useState([]);
    useEffect(() => {
        var listofPresent = [];
        setPresentList(listofPresent);
        
    }, [])
   
    return (
        <div>
            <PresentationListBar/>
            <PresentationElement/>
      </div>
    )
}
export default PresentationList;
