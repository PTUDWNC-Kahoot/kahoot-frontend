
import './PresentationListBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd, faArrowDown, faSearch, faX} from '@fortawesome/free-solid-svg-icons'

function PresentationListBar ()
{
    
    return (
        <div className="PresentationListBar">
            <div className="list__nav">
                {/* <div className="nav__checkboxAll">
                    <input className="input__checkboxAll"  type="checkbox"></input>
                </div> */}
               <div className="nav__Wrapper nav__nameWrapper">
                        <div className="nav__title">Name</div>
                        <FontAwesomeIcon className='icon__arrow' icon={faArrowDown} size="lg"  /> 
               </div>
               {/* <div className="nav__Wrapper nav__OwnerWrapper">
                    <div className="nav__title">Owner</div>
                    <FontAwesomeIcon className='icon__arrow' icon={faArrowDown} size="lg"  /> 
               </div> */}
               {/* <div className="nav__Wrapper nav__modifiedWrapper">
                    <div className="nav__title">Modified</div>
                    <FontAwesomeIcon className='icon__arrow' icon={faArrowDown} size="lg"  /> 
               </div> */}
               {/* <div className="nav__Wrapper nav__createdWrapper">
                    <div className="nav__title">Created</div>
                    <FontAwesomeIcon className='icon__arrow' icon={faArrowDown} size="lg"  /> 
               </div> */}
               <div className="nav__Wrapper nav__extraWrapper">
               </div>

            </div>
           
        </div>
    )
}
export default PresentationListBar;
