
import './EditProfile.css'
import '../../style/Authentication.css'
import '../../style/styles.css'
import './EditProfileResponsive.css'
import Header from '../../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faImage, faPencil} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { render } from 'react-dom'
import { useMutation } from 'react-query'
import axios from 'axios';




// const workplaceList = [
//     {
//         key: 1,
//         text: "School",
//         value: "school"
   
//     },
//     {
//         key: 2,
//         text: "Higher Student",
//         value: "higher_student"
//     },
//     {
//         key: 3,
//         text: "School Adminstration",
//         value: "school_Adminstration"
//     },
//     {
//         key: 4,
//         text: "Business",
//         value: "bussiness"
//     },
//     {
//         key: 5,
//         text: "Other",
//         value: "other"
//     }
// ]

function EditProfile()
{

   
    let info = {};

    
   
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    // TODO: Change image link to local
    const [image, setImage] = useState("https://www.seekpng.com/png/detail/72-729606_png-file-windows-10-person-icon.png");
    const [imageUpload, setImageUpload] =  useState()
    const [organization, setOrganization] = useState();
    const [workplace, setWorkplace] = useState("");
    const [createButtonClick, setCreateButtonClick] = useState(false);

    

    // Table User Infomation
    const handleSubmitInfo = (e) => {
        e.preventDefault(); 
        info = {username,email};  
    }

    //Table Account Detail
    const handleSubmitAccountDetail = (e) => {
        e.preventDefault();
        console.log(organization, workplace);
    }

    // Button add Image
    const handleAddImage = (e) => {
            e.preventDefault();
            // open modal upload Image
            const modal_page = document.querySelector(".modal__uploadImage")
            modal_page.classList.add("open")
    }

    const handleChange = (e) => {
        // console.log(e.target.files);
        const modal__notup= document.querySelector(".modal__wrapper--notup")
        const modal__up = document.querySelector(".modal__wrapper--up")
        modal__notup.classList.add("close")
        modal__up.classList.add("open")
        setImageUpload(URL.createObjectURL(e.target.files[0]));
    }

    // Cancel button (in upload image)
    const handleCancelUpload = (e) => {
        e.preventDefault();
        const modal_page = document.querySelector(".modal__uploadImage")
        const modal__notup= document.querySelector(".modal__wrapper--notup")
        const modal__up = document.querySelector(".modal__wrapper--up")
        modal_page.classList.remove("open")
        modal__notup.classList.remove("close")
        modal__up.classList.remove("open")
    }


    // Save button (in upload image)
    const handleSaveUpload = (e) => {
        setImage(imageUpload);
        e.preventDefault();

        //Close modal upload image
        const modal_page = document.querySelector(".modal__uploadImage");
        modal_page.classList.remove("open");

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
    return(
        <div> 
            <Header page={'HomePage'} add={setCreateButtonClick} />
            <div className="profile__content">  
                <header className="profile__header">Edit Profile</header>
                <hr className="card__line"></hr>
                <div className="profile__table">
                    {/* Begin: User Info */}
                    <form className="table__wrapper">
                        <div className="table__navbar">
                            <header className="navbar__title">User information</header>
                            <button className="editProfile_btn navbar__saveBtn" onClick={handleSubmitInfo}>Save</button>   
                        </div>
                        <div className="userInfo__content">
                            <div className="userInfo__image">
                                <div className="userInfo__imgWrapper">
                                       <img className='userInfo__imgUpload' src={image} ></img>
                                </div>
                                <button className="editProfile_btn image__btn--add" onClick={handleAddImage}>
                                    <div className="image__text"> Change picture</div>
                                </button>
                            </div>
                            <div className="userInfo__detail">
                                <div className="table__Field">
                                    <label htmlFor="username" className="table__label"> Username</label>  
                                    <input id ="username" name ="username" className="userInfo__usernameInput" value={username} onChange={e => setUsername(e.target.value)} ></input>
                                </div>
                                <div className="table__Field">
                                    <label htmlFor="email" className="table__label"> Email</label>  
                                    <input id ="email" name ="email" className="profile__Input" value={email} onChange={e => setEmail(e.target.value)}></input>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* End: User Info */}

                    {/* Begin: Account Detail */}
                    <div className="table__wrapper"> 
                        <div className="table__navbar">
                            <header className="navbar__title">Account details</header>
                            <button className=" editProfile_btn navbar__saveBtn" onClick={handleSubmitAccountDetail}>Save</button>   
                        </div>
                        <div className="accountDetail__content">      
                                <div className="table__Field">
                                    <label htmlFor="organization" className="table__label"> Organization </label> 
                                        <input  id ="organization" name ="organization" className="profile__Input" value={organization} onChange= {e => setOrganization(e.target.value)} ></input>
                                </div>
                                <div className="table__Field">
                                    <label htmlFor="workplace" className="table__label"> Workplace</label>  
                                    <input  id ="workplace" name ="workplace" className="profile__Input" value={workplace} onChange= {e => setWorkplace(e.target.value)} ></input>
                                </div>
                        
                        </div>
                    </div>
                </div>
                <div className="modal__uploadImage">
                    <div className="modal__container">
                        <header className="modal__header profile__header"> Upload image </header>
                        <div className="modal__content">
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
                        
                        </div>
                        <div className="modal__btnWrapper">
                                <button className="editProfile_btn modal_btn modal_cancelBtn" onClick={handleCancelUpload}>Cancel</button>
                                <button className="editProfile_btn modal_btn modale_saveBtn" onClick={handleSaveUpload}>Save</button>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}
export default EditProfile;