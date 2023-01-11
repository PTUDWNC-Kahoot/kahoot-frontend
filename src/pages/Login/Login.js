import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { useMutation } from "react-query";
import axios from 'axios';
import '../../style/styles.css'
import './Login.css'
import '../../style/Authentication.css'
import { useNavigate } from "react-router-dom";
import {useFormik, validateYupSchema} from "formik"
import * as Yup from "yup"
import Navbar from "../../components/Navbar";
// import SignOnGoogle from '../../service/SignOnGoogle'
import GoogleButton from "../SignOn/SignOn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

import useToken from '../../service/UseToken'

// show/hide password
const statePass = [
    {
        //not show
        state: false,
        icon: faEyeSlash,
        typePass: 'password'
    },
    {
        // show
        state: true, 
        icon: faEye,
        typePass: 'text'
    }
]
function Login() {
    let user = {};
    const [showPass, setShowPass] = useState(statePass[0]);
    const navigate = useNavigate();
    const { setToken } = useToken();

    let _err = false;
    
    const handleShowPass = () => {
            const isShow = showPass.state;
            if(isShow) //neu dang show
            {
                //unshow
                setShowPass(statePass[0])
            }
            else { //neu khong show
                //show
                setShowPass(statePass[1])
            }}
                                 // dùng react-router-dom  
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .required("Required"),
            password: Yup.string()
            .required("Required")
             ,
        }),
        onSubmit: values => {
            user = values;
            mutate();
        }
    });
   
    const [isErrorAuth, setIsErrorAuth] = useState({
        isError: false,
        message: ""
      });
    const handleSignOn = () => {
       navigate("/signOn");
    }
    const { isError, error, mutate } = useMutation(          // dùng react-query
    postDataLogin,  // 4
    {
       
        onSuccess: (res) => {      // 6
            console.log(res);
            if (res.status === 200) {
                setToken(res.data.token)
                // localStorage.setItem("authenticated", true);    
                // localStorage.setItem("token", res.data.User.token);    
                // localStorage.setItem("provider", res.data.User.provider); 
                // window.location.reload();
                // console.log(res.data.User.token);                         
                navigate("/home");    
            }                   
        },
        onError: (err) => {
            
        },
    }
    );

    async function postDataLogin() {
        return await axios.post("http://54.179.150.210:8000/auth/login", user)
    }
    if (isError) {
        _err = true;
    }  
    return (
        <div className="page display--col ">
            
             <Navbar> </Navbar>
             <div className="form display--col ">
                <section className="form__content">
                    <header className="form__title text--center text--b"> Log in</header>
                        <div className="form__EmailWrapper display--col">
                            <form  className="form__inputWrapper" onSubmit={formik.handleSubmit}>                    
                                <label htmlFor="email" className="text--b form__label">Email</label>
                                <div className="form__emailInput">
                                    <input id = "email" className="form__input" type = "text" name="email" value={formik.values.email}    onChange={formik.handleChange} />
                                    {formik.errors.email && ( <p className="errorMsg">{formik.errors.email}</p> )}
                                </div>
                                <label htmlFor="password" className="text--b form__label">Password</label>
                                <div className="form__password">
                                    <input id = "password" className="form__input form__PasswordInput" type ={showPass.typePass} name="password"   onChange={formik.handleChange}  />
                                    {formik.errors.password && (   <p className="errorMsg">{formik.errors.password}</p> )}
                                    <div className="form__passwordEye">
                                        <button id="form__passwordEyeBtn" type="button" className="form__passwordEyeBtn" onClick={handleShowPass}>
                                            <FontAwesomeIcon className='form__passwordEyeIcon' icon={showPass.icon} size="lg"  /> 
                                        </button>
                                    </div>
                                </div>
                            <div className="form__forgotPassword text--14 text--grey">
                               <div className="">Forgot your password? <a href="/forgotpassword">Reset your password</a></div>
                            </div>
                          <button type="submit" className="text--b btn__submit ">Log in</button>
                          {_err ? ( <div className="errorMsg">Your email, or password is incorrect.</div>) : null}
                          </form>
                        </div>
                    <div className="form__CardLineWrapper">
                            <hr className="form__CardLine"></hr>
                            <p className="text--b form__or">or</p>
                    </div>
                    <div className="form__SocialLoginWrapper display--col">
                             {/* <a className="form__SignOnBtn" href="http://54.179.150.210:8000/google/login" >
                                <input type="button" />
                                <img className="form__socialIcon" src="https://img.icons8.com/color/512/google-logo.png" alt="Google Icon"></img>
                                <div className="form__socialText">Continue with Google</div> 
                            </a> */}                          
                            {/* <div className="login__google mt-2 ">
                                 <GoogleButton setIsErrorAuth={setIsErrorAuth} />
                            </div> */}
                            
                            {/* <button className="form__SignOnBtn" >
                                <img className="form__socialIcon" src="https://img.icons8.com/color/512/facebook-circled.png" alt="Facebook Icon"></img>
                                <p className="form__socialText">Continue with Facebook</p>
                            </button> */}
                    </div>
                    <div className="text--center text--14 text--grey">Don't have an account? <a href="/register"> Sign up</a></div>                
            </section>
        </div>
        <div className="page__policy">
                <p>
                By signing up, you accept our Terms and Conditions. Please read our Privacy Policy and Children’s Privacy Policy.
                </p>
        </div>
    </div>
    )
}
export default Login;