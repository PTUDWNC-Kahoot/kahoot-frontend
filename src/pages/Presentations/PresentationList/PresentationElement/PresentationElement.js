import React, { useState } from "react";
import './PresentationElement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faFolder, faRecycle, faPencil, faTrash} from '@fortawesome/free-solid-svg-icons'
import EmptyListNotify from '../../../../components/EmptyListNotify'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Popover from '@mui/material/Popover';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



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
                 
                   <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <div variant="contained" {...bindTrigger(popupState)}>
                                      <FontAwesomeIcon className='icon__arrow' icon={faEllipsis} size="lg"  /> 
                                </div>
                                <Menu className="popup__menu" {...bindMenu(popupState)}>
                                    <MenuItem className="popup__item" onClick={popupState.close}>
                                        <FontAwesomeIcon className='popup__icon icon__rename' icon={faPencil} size="lg"  /> 
                                        Rename
                                    </MenuItem>
                                    <MenuItem className="popup__item" onClick={popupState.close}>
                                        <FontAwesomeIcon className='popup__icon icon__movetoFolder' icon={faFolder} size="lg"  /> 
                                        Move to folder
                                    </MenuItem>
                                    <MenuItem className="popup__item popup__delete" onClick={popupState.close}>
                                        <FontAwesomeIcon className='popup__icon icon__delete' icon={faTrash} size="lg" color="red"  /> 
                                        Delete
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                   </PopupState>
            </div>
                )
            })}
        </div>
     
    );
}
