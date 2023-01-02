import './UploadImage.css'
import '../EditProfile.css'
import { useEffect, useRef, useState} from 'react';
import { Dialog, DialogTitle, DialogActions, DialogContent, Snackbar, TextField } from "@mui/material";

import { Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faImage, faPencil} from '@fortawesome/free-solid-svg-icons'
export default function UploadImage ({state, setState, setImage})
{

    const [open, setOpen] = useState(state);
    const [imageUpload, setImageUpload] =  useState()
    
    const didMount = useRef(false);
  
    useEffect(() => {
        if (didMount.current) 
            setOpen(state);
        else
             didMount.current = true;
      }, [state]);
   

   

    const handleChange = (e) => {
        console.log(e.target.files);
        const modal__notup= document.querySelector(".modal__wrapper--notup")
        const modal__up = document.querySelector(".modal__wrapper--up")
        modal__notup.classList.add("close")
        modal__up.classList.add("open")
        setImageUpload(URL.createObjectURL(e.target.files[0]));
    }

    // Cancel button (in upload image)
    const handleCancel = (e) => {
        // e.preventDefault();
        setOpen(false);
        setState(false);
        // const modal_page = document.querySelector(".modal__uploadImage")
        // const modal__notup= document.querySelector(".modal__wrapper--notup")
        // const modal__up = document.querySelector(".modal__wrapper--up")
        // modal_page.classList.remove("open")
        // modal__notup.classList.remove("close")
        // modal__up.classList.remove("open")
    }


    // Save button (in upload image)
    const handleSave = (e) => {
        setImage(imageUpload);
        setOpen(false);
        setState(false);
        // setImage(imageUpload);
        // e.preventDefault();

        // //Close modal upload image
        // const modal_page = document.querySelector(".modal__uploadImage");
        // modal_page.classList.remove("open");

        //
        // const modal__notup= document.querySelector(".modal__wrapper--notup");
        // const modal__up = document.querySelector(".modal__wrapper--up");
       
        // modal__notup.classList.remove("close");
        // modal__up.classList.remove("open");
        
        // const modal_btnWrapper = document.querySelector(".userInfo__btnWrapper");
        // modal_btnWrapper.classList.add("close");
        // const modal_imgWrapper = document.querySelector(".userInfo__imgWrapper");
        // modal_imgWrapper.classList.add("open");
    }

    return (
        //   <div  className="modal__uploadImage" open={open} >
        //             <div className="modal__container">
        //                 <header className="modal__header profile__header"> Upload image </header>
        //                 <div className="modal__content">
                            // <div className="modal__wrapper">
                            //     <div className='modal__wrapper--notup'>
                            //         <div className="modal__icon"> <FontAwesomeIcon icon={ faImage} size="lg"  /> </div>
                            //         <div className="modal__text">  Upload an image from your computer</div>
                            //         {/* <button className="editProfile_btn modal__UploadBtn" onClick={handleUploadImage}>Upload</button> */}
                            //     </div>
                            //     <div className='modal__wrapper--up'>
                            //         <img className='modal_img' src={imageUpload} />
                            //     </div>  
                            //     <label className="editProfile_btn modal__UploadBtn">
                            //         <input type="file" className="input__imageUploads" accept=".jpg, .jpeg, .png"  onChange={handleChange} />
                            //               Upload
                            //     </label>
                            // </div>
                        
        //                 </div>
        //                 <div className="modal__btnWrapper">
        //                         <button className="editProfile_btn modal_btn modal_cancelBtn" onClick={handleCancelUpload}>Cancel</button>
        //                         <button className="editProfile_btn modal_btn modale_saveBtn" onClick={handleSaveUpload}>Save</button>
        //                 </div>
        //              </div>
        //         </div>
        <div>
               
               <Dialog open={open} fullWidth>
                  <DialogTitle className='dialog__tilte'>Upload Image</DialogTitle>
                  <DialogContent>                       
                  <div className="modal__wrapper">
                                <div className='modal__wrapper--notup'>
                                    <div className="modal__icon"> <FontAwesomeIcon icon={ faImage} size="lg"  /> </div>
                                    <div className="modal__text">  Upload an image from your computer</div>
                                    {/* <button className="editProfile_btn modal__UploadBtn" onClick={handleUploadImage}>Upload</button> */}
                                </div>
                                <div className='modal__wrapper--up'>
                                    <img className='modal_img' src={imageUpload} />
                                </div>  
                                <label className="editProfile_btn modal__UploadBtn">
                                    <input type="file" className="input__imageUploads" accept=".jpg, .jpeg, .png"  onChange={handleChange} />
                                          Upload
                                </label>
                    </div>  
                    <DialogActions>
                        <Button className='dialog__Btn dialog__cancleBtn' onClick={handleCancel}>Cancel </Button> 
                        <Button  className='dialog__Btn dialog__SaveBtn' onClick={handleSave}> Save</Button>
                    </DialogActions>                
                  </DialogContent>
            </Dialog>
         
        </div>
    );
}