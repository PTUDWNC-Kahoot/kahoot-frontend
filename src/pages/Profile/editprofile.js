
import '../../style/editprofile.css'
import '../../style/authentication.css'
import '../../style/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faImage, faPencil} from '@fortawesome/free-solid-svg-icons'



function EditProfile()
{


    return(
        <div className="profile__content">  
            <header className="profile__header text--b">Edit Profile</header>
            <hr className="card__line"></hr>
            <div className="profile__table">
                {/* Begin: User Info */}
                <form className="table__wrapper">
                    <div className="table__navbar">
                        <header className="navbar__title">User information</header>
                        <button className="navbar__saveBtn">Save</button>   
                    </div>
                    <div className="userInfo__content">
                        <div className="userInfo__image">
                            <div className="image__icon">
                                <FontAwesomeIcon icon={ faImage}  />
                            </div>
                            <div className="image__text"> Add picture</div>
                        </div>

                        <div className="userInfo__detail">
                            <div className="table__Field">
                                <label htmlFor="username" className="table__label"> Username</label>  
                                <input id ="username" name ="username" className="userInfo__usernameInput"></input>
                            </div>
                            <div className="table__Field">
                                <label htmlFor="email" className="table__label"> Email</label>  
                                   <input id ="email" name ="email" className="profile__Input"></input>
                            </div>
                        </div>
                    </div>
                </form>
                {/* End: User Info */}

                {/* Begin: Account Detail */}
                 <div className="table__wrapper"> 
                    <div className="table__navbar">
                        <header className="navbar__title">Account details</header>
                        <button className="navbar__saveBtn">Save</button>   
                    </div>
                    <div className="accountDetail__content">      
                            <div className="table__Field">
                                <label htmlFor="organization" className="table__label"> Organization </label> 
                                     <input  id ="organization" name ="organization" className="profile__Input"></input>
                            </div>
                            <div className="table__Field">
                                <label htmlFor="workplace" className="table__label"> Workplace</label>  
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
       

    );
}
export default EditProfile;