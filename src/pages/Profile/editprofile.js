
import '../../style/editprofile.css'
import '../../style/authentication.css'
import '../../style/styles.css'
import addProfileImage from './addProfileImage' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faImage, faPencil} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { render } from 'react-dom'



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

 

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [image, setImage] = useState("http://imaging.nikon.com/lineup/coolpix/p/p7000/img/sample/img_02_b.jpg");
    const [organization, setOrganization] = useState();
    const [workplace, setWorkplace] = useState("");

   
    const handleSubmitInfo = (e) => {
        e.preventDefault(); 
        console.log(username, email);
    }
    const handleSubmitAccountDetail = (e) => {
        e.preventDefault();
        console.log(organization, workplace);
    }

  
    const handleAddImage = (e) => {
            e.preventDefault();
            const modal_page = document.querySelector(".modal__image")
            modal_page.classList.add("open")
    }
    const handleUploadImage = (e) => {

        e.preventDefault();
        // const modal_page = document.querySelector(".modal__input")
        // modal_page.classList.add("open")
        const modal__wrapper = document.querySelector(".modal__wrapper--notup")
        modal__wrapper.classList.add("close")
    }
    return(
        <div className="profile__content">  
            <header className="profile__header">Edit Profile</header>
            <hr className="card__line"></hr>
            <div className="profile__table">
                {/* Begin: User Info */}
                <form className="table__wrapper">
                    <div className="table__navbar">
                        <header className="navbar__title">User information</header>
                        <button className="navbar__saveBtn" onClick={handleSubmitInfo}>Save</button>   
                    </div>
                    <div className="userInfo__content">
                        <div className="userInfo__image">
                            <button className="image__btn--add" onClick={handleAddImage}>
                            {/* <input className="image_input" type="image" alt="Add picture" src={image} ></input> */}
                                <div className="image__icon"> <FontAwesomeIcon icon={ faImage}  /> </div>
                                <div className="image__text"> Add picture</div>
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
                        <button className="navbar__saveBtn" onClick={handleSubmitAccountDetail}>Save</button>   
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

            <div className="modal__image">
                <div className="modal__container">
                    <header className="modal__header profile__header"> Upload image </header>
                    <div className="modal__content">
                        <div className="modal__wrapper">
                            <div className='modal__wrapper--notup'>
                                <div className="modal__icon"> <FontAwesomeIcon icon={ faImage} size="lg"  /> </div>
                                <div className="modal__text">Upload an image from your computer</div>
                                <button className="modal__btn" onClick={handleUploadImage}>Upload</button>
                            </div>
                            <div className='modal__wrapper--up'>
                                <img className='modal_img' src="https://tse4.mm.bing.net/th?id=OIP.Ix6XjMbuCvoq3EQNgJoyEQHaFj&pid=Api&P=0"></img>
                            </div>  
                        </div>
                      
                    </div>
               </div>
            </div>
        </div>


       

    );
}
export default EditProfile;