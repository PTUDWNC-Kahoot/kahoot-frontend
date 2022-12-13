import './PresentationElement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd, faArrowDown, faEllipsis, faSearch, faX} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


function PresentationElement ()
{
    const [name, setName] = useState("Đoàn Thu Ngân");
    const [owner, setOwner] = useState("dtn2001");
    const [modifiedDay, setModifiedDay] = useState("12/12/2022");
    const [createdDay, setCreatedDay] = useState("09/12/2022");
    return (
        <div className="PresentationElement">
                <div className="element__checkbox">
                    <input className="input__checkbox"  type="checkbox"></input>
                </div>
                <div className="element__Wrapper element__nameWrapper">
                        <div className="element__text">{name}</div>
               </div>
               <div className="element__Wrapper element__OwnerWrapper">
                    <div className="element__text">{owner}</div>
               </div>
               <div className="element__Wrapper element__modifiedWrapper">
                    <div className="element__text">{modifiedDay}</div>
               </div>
               <div className="element__Wrapper element__createdWrapper">
                    <div className="element__text">{createdDay}</div>
               </div>
               <div className="element__Wrapper element__extraWrapper">
                      <FontAwesomeIcon className='icon__arrow' icon={faEllipsis} size="lg"  /> 
               </div>
        </div>
    )
}
export default PresentationElement;