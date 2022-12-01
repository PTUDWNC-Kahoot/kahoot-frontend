import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { useMutation } from "react-query";
import axios from 'axios';
import '../../style/styles.css'
import '../../style/login.css'
import '../../style/Authentication.css'
import { useNavigate } from "react-router-dom";
import {useFormik, validateYupSchema} from "formik"
import * as Yup from "yup"
import Navbar from "../../components/Navbar";
import SignOnGoogle from '../../service/SignOnGoogle'


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
    let user = {};
    const [showPass, setShowPass] = useState(statePass[0]);
    const [signOnGoogleState, setSignOnGoogleState] = useState(false); 
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
    const navigate = useNavigate();                             // dùng react-router-dom  
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
   
    // const handleSignOnGoogle = (e) => {
    //      setSignOnGoogleState(true);
    // }
   
    const { isError, error, mutate } = useMutation(          // dùng react-query
    postDataLogin,  // 4
    {
        onSuccess: (res) => {      // 6
            if (res.status === 200) {
               // localStorage.setItem("token", res.data.User.token);    
                localStorage.setItem("authenticated", true);    
                //window.location.reload();            
                navigate("/home");    
            }                   
        },
        onError: (err) => {
             
        },
    }
    );

    async function postDataLogin() {
        return await axios.post("http://localhost:8000/auth/login", user);   // 5 goij api đến BE kèm data để xử lý
    }
    if (isError) {
        _err = true;
    }  
    if (signOnGoogleState)
    {
        return <SignOnGoogle></SignOnGoogle>
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
                                             <span className="form__passwordEyeIcon">
                                                {<img className="form__passwordEye--show" src={showPass.src}/>}
                                              </span> 
                                        </button>
                                    </div>
                                </div>
                            <div className="form__forgotPassword text--14 text--grey">
                               <div className="">Forgot your password? <a href="#">Reset your password</a></div>
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
                             <button className="form__SignOnBtn" onClick={handleSignOnGoogle} >
                                <input type="button" />
                                <img className="form__socialIcon" src="https://img.icons8.com/color/512/google-logo.png" alt="Google Icon"></img>
                                <div className="form__socialText">Continue with Google</div> 
                            </button>
                           
                            <button className="form__SignOnBtn" >
                                <img className="form__socialIcon" src="https://img.icons8.com/color/512/facebook-circled.png" alt="Facebook Icon"></img>
                                <p className="form__socialText">Continue with Facebook</p>
                            </button>
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