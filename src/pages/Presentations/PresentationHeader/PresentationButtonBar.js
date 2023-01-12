import './PresentationButtonBar.css'
import CreatePresentation from '../CreatePresentation/CreatePresentation'
import CreateFolder from '../CreateFolder/CreateFolder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd, faSearch, faX} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
function PresentationButtonBar ({ token, list, setPresentList, setNewPresent})
{
    const [createPresentClick, setCreatePresentClick] = useState(false);
    const [createFolderClick, setCreateFolderClick] = useState(false);
    const [newFoder, setNewFolder] = useState();
  
 
 
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
                <CreatePresentation state = {createPresentClick} token={token} setState = {setCreatePresentClick} createNewPresentation = {setNewPresent}/>
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
export default PresentationButtonBar;