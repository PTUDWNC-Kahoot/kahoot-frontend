import React from "react";
import {useForm} from "react-hook-form";
import { useMutation } from "react-query";
import axios from 'axios';
import "./login.css"
import "../authentication.css"
import { useNavigate } from "react-router-dom";


function Login() {

   
    return (
        <div className="page form__display--flex ">
        <div className="navbar"></div>
            <div  className="form form__display--flex ">
                <section className="form__content">
                    <header className="form__header form__text--center form__text--b"> Log in</header>
                        <div className="form__UsernameWrapper form__display--flex">
                            <form className="form__inputWrapper">
                                <label htmlFor="username" className="form__text--b form__label">Username or email</label>
                                <div className="form__usernameInput">
                                    <input id = "username" className="form__input" type = "text" />
                                </div>
                                <label htmlFor="password" className="form__text--b form__label">Password</label>
                                <div className="form__password">
                                    <input id = "password" className="form__input form__PasswordInput" type = "password"  name="Password"  />
                                    <div className="form__passwordEye">
                                        {/* <button id="form__passwordEyeBtn" type="button" className="form__passwordEyeBtn">
                                             <span className="form__passwordEyeIcon">
                                            <img className="form__passwordEye--shown" src="https://img.icons8.com/ios/32/null/visible.png"/>   
                                            </span> 

                                        </button> */}
                                    </div>
                                </div>
                        
                            <div className="form__forgotPassword">
                               <div className="form__text--14 form__text--grey">Forgot your password? <a href="#">Reset your password</a></div>
                            </div>
                          <button disabled type="submit" className="form__text--b btn__submit btn__submit--disabled">Log in</button>
                          </form>
                        </div>
                    <div className="form__CardLineWrapper">
                            <hr className="form__CardLine"></hr>
                            <p className="form__text--b  form__or">or</p>
                    </div>
                    <div className="form__SocialLoginWrapper form__display--flex">
                            <button className="form__SignOnBtn">
                                <img className="form__socialIcon" src="https://img.icons8.com/color/512/google-logo.png" alt="Google Icon"></img>
                                <div className="form__socialText">Continue with Google</div>
                            </button>
                            <button className="form__SignOnBtn">
                                <img className="form__socialIcon" src="https://img.icons8.com/color/512/facebook-circled.png" alt="Facebook Icon"></img>
                                <p className="form__socialText">Continue with Facebook</p>
                            </button>
                    </div>
                    <div className="form__text--center form__text--14 form__text--grey">Don't have an account? <a href="#">Sign up</a></div>

                
            </section>
        </div>
        
    </div>
    
    )
}
export default Login;