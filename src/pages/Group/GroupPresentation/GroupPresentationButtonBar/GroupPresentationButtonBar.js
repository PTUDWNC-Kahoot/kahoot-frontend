import './GroupPresentationButtonBar.css'
import GroupCreatePresentation from '../GroupCreatePresentation/GroupCreatePresentation'
// import CreateFolder from '../CreateFolder/CreateFolder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd, faSearch, faX} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
function GroupPresentationButtonBar ({group, token, list, setPresentList})
{
    const [createPresentClick, setCreatePresentClick] = useState(false);
    const [createFolderClick, setCreateFolderClick] = useState(false);
    const [newPresent, setNewPresent] = useState(null);
    const [newFoder, setNewFolder] = useState();
  
    useEffect(() => {
       // console.log("NOW");
        
       // console.log(newPresent);
    },[newPresent]);

 
    // setPresentList(prevList => {
    //     const newList = [...prevList, newPresent];
       
    //       return newList;
        
    // })    
    const handleCreatePresent = () => {
        setCreatePresentClick(true);
    }
    const handleCreateFolder = () => {
        setCreateFolderClick(true);
    }

    return (
        <div className="present__buttonBar">
            <div className='present__buttonWrapper'>
                <GroupCreatePresentation group={group} token={token} state = {createPresentClick} setState = {setCreatePresentClick} createNewPresentation = {setNewPresent}/>
                <button className="present__btn btn__newPresent" onClick={handleCreatePresent} >
                   <FontAwesomeIcon className='icon__add' icon={faAdd} size="lg"  /> 
                    <div> New Presentation</div> 
                </button>
                {/* <CreateFolder state={createFolderClick} setState = {setCreateFolderClick} createFolder = {setNewFolder}/>
                <button className='present__btn btn__newFolder' onClick={handleCreateFolder}> 
                   <FontAwesomeIcon className='icon__add' icon={faAdd} size="lg"  /> 
                   <div> New Folder </div>
                </button> */}
            </div>
            {/* <div className='present__buttonWrapper'>
                <div className="search__wrapper ">
                    <div className="searchBar__icon searchBar__icon--search"> <FontAwesomeIcon icon={faSearch} size="lg"  /> </div>  
                    <input className="search__input " placeholder="Type to search" />
                    <div className="searchBar__icon searchBar__icon--x"> <FontAwesomeIcon icon={faX} size="lg"  /> </div>                           
                </div>
            </div> */}
        </div>
    )
  
}
export default GroupPresentationButtonBar;