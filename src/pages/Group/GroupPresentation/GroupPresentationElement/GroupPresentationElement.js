import React, { useState, useEffect } from "react";
import './GroupPresentationElement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faFolder, faRecycle, faPencil, faTrash, faPlay, faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import EmptyListNotify from '../../../../components/EmptyListNotify'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Popover from '@mui/material/Popover';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import ViewPresentationHost from "../../../ViewPresentationHost/ViewPresentationHost";
import { Button } from 'semantic-ui-react';
import { array } from "yup";




export default function GroupPresentationElement ({list, setList})
{
    // const [name, setName] = useState(_name);
    // const [owner, setOwner] = useState(_owner);
    // const [modifiedDay, setModifiedDay] = useState(_modifiedDay);
    // const [createdDay, setCreatedDay] = useState(_createdDay);

        const [startPresentClick, setStartPresentClick] = useState(false);
        const [thisPresent, setThisPresent] = useState("");
    //    const [isPresent, setIsPresent] = useState(false);
         const navigate = useNavigate()   
        function handleStartPresent (present) {
        navigate('/viewpresentationhost', {state: present});
        }
        function handleEditPresent (present){
          navigate('/slides', {state:present})
        }
        function handleDeletePresentation (id) {
            // console.log("ee");
            // var filtered = array.filter(function(value, index, arr){
            //     return value !== present;
            // // });
            // arrayRemove(list, id);
            list = list.filter(function(value) {
                return value.id !== id;
            });
            setList(list);
            // console.log(list);
            // console.log(id);
            
        }
        
        // function arrayRemove(list, id) {
        //     return list.filter(function(ele) {
        //         return ele == id; 
        //     })
            
        // }
       

    return (
            <div className='contentBox'>
              {list?.length === 0 ?
                <EmptyListNotify></EmptyListNotify>
                : list?.map((present) => {
                return (
                    <div className="PresentationElement">
                    {/* <div className="element__checkbox">
                        <input className="input__checkbox"  type="checkbox"></input>
                    </div> */}
                    <div className="element__Wrapper element__nameWrapper" >
                            <Button className="startPresent__Btn" onClick={() => handleStartPresent(present)}>
                                  <FontAwesomeIcon className='icon__play' icon={faPlayCircle} size="lg"  /> 
                            </Button>
                            <Button className="present__name element__text"onClick={() => handleEditPresent(present)}>{present.title}</Button>
                   </div>
                   <div className="element__Wrapper element__OwnerWrapper">
                        <div className="element__text">{present.owner}</div>
                   </div>
                   {/* <div className="element__Wrapper element__modifiedWrapper">
                        <div className="element__text">{present.modifiedDay}</div>
                   </div> */}
                   <div className="element__Wrapper element__createdWrapper">
                        <div className="element__text">{present.createdDay}</div>
                   </div>
                   <button className="deleteBtn" onClick={()=> handleDeletePresentation(present.id)}>
                   <FontAwesomeIcon className='popup__icon icon__delete' icon={faTrash} size="lg" color="red"  /> 
                   </button>
                 
                   {/* <PopupState variant="popover" popupId="demo-popup-menu">
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
                   </PopupState> */}
            </div>
                )
            })}
        </div>
     
    );
}
