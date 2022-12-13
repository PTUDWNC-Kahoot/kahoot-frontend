import './PresentationButtonBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd, faSearch, faX} from '@fortawesome/free-solid-svg-icons'
function PresentationButtonBar ()
{
    return (
        <div className="present__buttonBar">
            <div className='present__buttonWrapper'>
                <button className="present__btn btn__newPresent" >
                   <FontAwesomeIcon className='icon__add' icon={faAdd} size="lg"  /> 
                    <div> New Presentation</div> 
                </button>
                <button className='present__btn btn__newFolder'> 
                   <FontAwesomeIcon className='icon__add' icon={faAdd} size="lg"  /> 
                   <div> New Folder </div>
                </button>
            </div>
            <div className='present__buttonWrapper'>
                <div className="search__wrapper ">
                    <div className="searchBar__icon searchBar__icon--search"> <FontAwesomeIcon icon={faSearch} size="lg"  /> </div>  
                    <input className="search__input " placeholder="Type to search" />
                    <div className="searchBar__icon searchBar__icon--x"> <FontAwesomeIcon icon={faX} size="lg"  /> </div>                           
                </div>
                {/* <input className=' present__sort'></input> */}
            </div>
        </div>
    )
  
}
export default PresentationButtonBar;