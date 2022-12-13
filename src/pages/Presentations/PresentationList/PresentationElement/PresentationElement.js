import './PresentationElement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import EmptyListNotify from '../../../../components/EmptyListNotify'



export default function PresentationElement ({list})
{
    // const [name, setName] = useState(_name);
    // const [owner, setOwner] = useState(_owner);
    // const [modifiedDay, setModifiedDay] = useState(_modifiedDay);
    // const [createdDay, setCreatedDay] = useState(_createdDay);
    return (
            <div className='contentBox'>
              {list?.length === 0 ?
                <EmptyListNotify></EmptyListNotify>
                : list?.map((present) => {
                return (
                    <div className="PresentationElement">
                    <div className="element__checkbox">
                        <input className="input__checkbox"  type="checkbox"></input>
                    </div>
                    <div className="element__Wrapper element__nameWrapper">
                            <div className="element__text">{present.name}</div>
                   </div>
                   <div className="element__Wrapper element__OwnerWrapper">
                        <div className="element__text">{present.owner}</div>
                   </div>
                   <div className="element__Wrapper element__modifiedWrapper">
                        <div className="element__text">{present.modifiedDay}</div>
                   </div>
                   <div className="element__Wrapper element__createdWrapper">
                        <div className="element__text">{present.createdDay}</div>
                   </div>
                   <div className="element__Wrapper element__extraWrapper">
                          <FontAwesomeIcon className='icon__arrow' icon={faEllipsis} size="lg"  /> 
                   </div>
            </div>
                )
            })}
        </div>
     
    );
}
