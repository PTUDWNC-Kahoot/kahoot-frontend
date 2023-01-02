
import './EditProfile.css'
import '../../style/Authentication.css'
import '../../style/styles.css'
import './EditProfileResponsive.css'
import Header from '../../components/Header'

import { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { render } from 'react-dom'
import { useMutation } from 'react-query'
import axios from 'axios';
import UploadImage from './UploadImage/UploadImage'




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
    const [image, setImage] = useState();
    // TODO: Change image link to local
    const [organization, setOrganization] = useState();
    const [workplace, setWorkplace] = useState("");
    const [createButtonClick, setCreateButtonClick] = useState(false);
    const [addImageClick, setAddImageClick] = useState(false);

    

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
            setAddImageClick(true);
            // open modal upload Image
            // const modal_page = document.querySelector(".modal__uploadImage")
            // modal_page.classList.add("open")
    }

  
    return(
        <div> 
            <Header page={'HomePage'} add={setCreateButtonClick} />
            <UploadImage state={addImageClick} setState ={setAddImageClick} setImage={setImage}/>
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
              
            </div>
        </div>
    );
}
export default EditProfile;