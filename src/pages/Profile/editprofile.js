
import '../../style/editprofile.css'
import '../../style/authentication.css'
import '../../style/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faImage, faPencil} from '@fortawesome/free-solid-svg-icons'



function EditProfile()
{
    return(
        <section className="profile__page">
            <div className="profile__content">
            <div className="profile__title">
                <header className="profile__header text--b">Edit Profile</header>
            </div>
            <div className="profile__table">
                {/* Begin: User Info */}
                <div className="table__content"> 

                    <div className="table__navbar">
                        <header className="text--b text--14 text--grey">User information</header>
                        <button className="navbar__saveBtn">Save</button>   
                    </div>
                    <div className="userInfo__content">
                        <div className="userInfo__image">
                            <div className="image__icon">
                                <FontAwesomeIcon icon={ faImage}  />
                            </div>
                            <div className="image__text">
                                Add picture
                            </div>
                        </div>

                        <div className="userInfo__detail">
                            <div className="table__Field">
                                <label htmlFor="username" className="profile__label text--14 text--b"> Username</label>  
                                <div className="userInfo__usernameWrapper">
                                    <input id ="username" name ="username" className="userInfo__usernameInput"></input>
                                    <button className="userInfo__EditButton">            
                                     <FontAwesomeIcon icon={ faPencil} />
                                    </button>
                                </div>
                            </div>
                            <div className="table__Field">
                                <label htmlFor="name" className="profile__label text--14 text--b"> Name </label> 
                                     <input  id ="name" name ="name" className="profile__Input"></input>
                            </div>

                            <div className="table__Field">
                                <label htmlFor="email" className="profile__label text--14 text--b"> Email</label>  
                                   <input id ="email" name ="email" className="profile__Input"></input>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End: User Info */}

                {/* Begin: Account Detail */}
                 <div className="table__content"> 

                    <div className="table__navbar">
                        <header className="text--b text--14 text--grey">Account details</header>
                        <button className="navbar__saveBtn">Save</button>   
                    </div>
                    <div className="accountDetail__content">      
                            <div className="table__Field">
                                <label htmlFor="organization" className="profile__label text--14 text--b"> Organization </label> 
                                     <input  id ="organization" name ="organization" className="profile__Input"></input>
                            </div>
                            <div className="table__Field">
                                <label htmlFor="workplace" className="profile__label text--14 text--b"> Workplace</label>  
                                   <select  id ="workplace" name ="workplace" className="profile__Input" type="">
                                        <option >School</option>
                                        <option >Higher Student</option>
                                        <option >School Adminstration</option>
                                        <option >Business</option>
                                        <option>Other</option>

                                   </select>
                            </div>
                      
                    </div>
                </div>

            </div>
            
                </div>
        </section>


    );
}
export default EditProfile;