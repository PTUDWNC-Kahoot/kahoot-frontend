import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { useMutation } from "react-query";
import axios from 'axios';
import "./login.css"
import "../authentication.css"
import { useNavigate } from "react-router-dom";
import {useFormik, validateYupSchema} from "formik"
import * as Yup from "yup"


// show/hide password
const statePass = [
    {
        //not show
        state: false,
        src: 'https://img.icons8.com/ios/32/null/visible.png',
        typePass: 'password'
    },
    {
        // show
        state: true, 
        src: 'https://img.icons8.com/ios/32/null/eyelashes-2d.png',
        typePass: 'text'
    }
  
]
function Login() {

    const [showPass, setShowPass] = useState(statePass[0])
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
            }
     
    }
    const navigate = useNavigate();                             // dùng react-router-dom
    let user = {};

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .required("Required"),
            password: Yup.string()
             .required("Required")
             .matches(
               /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
               "Password must be 7-19 characters and contain at least one letter, one number and a special character"
             ),
        }),
        onSubmit: values => {
            user = values;
            mutate();
        }
    });
    // TODO: Wrong username, password => error
   
    const { isLoading, isError, error, mutate } = useMutation(          // dùng react-query
        postDataLogin, 
        {
            onSuccess: (res) => {  
                if (res.data.ReturnCode === 1) {
                    localStorage.setItem("authenticated", true);              
                    navigate("/");              // 7
                } else {
                    window.alert(res.data.Message);
                    localStorage.setItem("authenticated", false);
                }               
            },
            onError: (err) => {
              
            },
        }
    );

    async function postDataLogin() {
        return await axios.post(process.env.REACT_APP_API_URL + 'login', user);   //  goi api đến BE kèm data để xử lý
    }
    
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }

    return (
        <div className="page form__display--flex ">
        <div className="navbar"></div>
            <div  className="form form__display--flex ">
                <section className="form__content">
                    <header className="form__header form__text--center form__text--b"> Log in</header>
                        <div className="form__UsernameWrapper form__display--flex">
                            <form  className="form__inputWrapper" onSubmit={formik.handleSubmit}>
                                <label htmlFor="username" className="form__text--b form__label">Username or email</label>
                                <div className="form__usernameInput">
                                    <input id = "username" className="form__input" type = "text" name="username" value={formik.values.username}    onChange={formik.handleChange} />
                                    {formik.errors.username && ( <p className="errorMsg">{formik.errors.username}</p> )}
                                </div>
                                <label htmlFor="password" className="form__text--b form__label">Password</label>
                                <div className="form__password">
                                    <input id = "password" className="form__input form__PasswordInput" type ={showPass.typePass} name="password"   onChange={formik.handleChange}  />
                                    {formik.errors.password && (   <p className="errorMsg">{formik.errors.password}</p> )}
                                    <div className="form__passwordEye">
                                        <button id="form__passwordEyeBtn" type="button" className="form__passwordEyeBtn" onClick={handleShowPass}>
                                             <span className="form__passwordEyeIcon">
                                                {<img className="form__passwordEye--show" src={showPass.src}/>}
                                              </span> 

                                        </button>
                                    </div>
                                </div>
                        
                            <div className="form__forgotPassword">
                               <div className="form__text--14 form__text--grey">Forgot your password? <a href="#">Reset your password</a></div>
                            </div>
                          <button type="submit" className="form__text--b btn__submit ">Log in</button>
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
                    <div className="form__text--center form__text--14 form__text--grey">Don't have an account? <a href="/register"> Sign up</a></div>

                
            </section>
        </div>
        
    </div>
    
    )
}
export default Login;