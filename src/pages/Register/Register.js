import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from 'axios';
import '../../style/styles.css'
import './Register.css'
import '../../style/Authentication.css'
import { useNavigate } from "react-router-dom";
import {useFormik } from "formik"
import VerifyEmail  from "./VerifyEmail";
import Navbar from "../../components/Navbar";
import SignOn from "../SignOn/SignOn";
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

function Register() {
   
    let user = {};
    let _user = {};
    const [code, setCode] = useState();
    //const [user, setUser] = useState("");
    const [showPass, setShowPass] = useState(statePass[0])
    const navigate = useNavigate();  
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
    const handleSignOn = () => {
       navigate('/signOn');
    }
    const formik = useFormik ({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Required")
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email address"),
            password: Yup.string()
             .required("Required")
             .matches(
               /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
               "Password must be 7-19 characters and contain at least one letter, one number and a special character"
             ),
        }),
        onSubmit: values => {
         //  setUser(values);
            user = values;
            mutate();
          //  console.log(user)           
            // //xu ly chuoi code, focus tung o
            // const codes = document.querySelectorAll('.verify__code')
            // var _prevCode="";
            // codes[0].focus()
            // codes.forEach((code, idx) => {
            //     code.addEventListener('keydown', (e) => {
            //         if(e.key >= 0 && e.key <=9) {
            //             codes[idx].value = ''
            //             setTimeout(() => codes[idx + 1].focus(), 10)
            //         } else if(e.key === 'Backspace') {
            //             setTimeout(() => codes[idx - 1].focus(), 10)
            //         }
            //     })
            // })
            
        }
    });
  
    const { isLoading, isError, isSuccess, error, mutate } = useMutation(
        postData, 
        {
            onSuccess: (res) => {
            },
            onError: (err) => {                   
            },
        }
    );
    async function postData() {
        return await axios.post("http://localhost:8000/auth/register", user);  
    }
 
   
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
    if (isSuccess) { 

        const email =  formik.values.email;
        const password =  formik.values.password;   
        const verifyCode = "";
        user = {email, password, verifyCode};
        return   <VerifyEmail  className="modal__verify"  user = {user} > </VerifyEmail>
    }
    
    return (
        <div className="page display--col ">
          <Navbar> </Navbar>
            <div className="form display--col " onSubmit={formik.handleSubmit}>
                <section className="form__content">
                    <header className="form__title text--center text--b">Create an account</header>
                        <div className="form__EmailWrapper display--col">
                            <h2 className="form__registerTitle">Sign up with your email</h2>
                            <form className="form__inputWrapper">
                                <label htmlFor="email" className="text--b form__label">Email</label>
                                <div className="form__emailInput">
                                    <input id = "email" className="form__input" type = "text"   value={formik.values.email}    onChange={formik.handleChange} />
                                    {formik.errors.email && ( <p className="errorMsg">{formik.errors.email}</p> )}
                                </div>
                                <label htmlFor="password" className="text--b form__label">Password</label>
                                <div className="form__password">
                                    <input id = "password" className="form__input"  value={formik.values.password}  onChange={formik.handleChange} type ={showPass.typePass} />
                                    {formik.errors.password && (   <p className="errorMsg">{formik.errors.password}</p> )}
                                    <div className="form__passwordEye">
                                        <button id="form__passwordEyeBtn" type="button" className="form__passwordEyeBtn" onClick={handleShowPass}>
                                             <span className="form__passwordEyeIcon">
                                                {<img className="form__passwordEye--show" src={showPass.src}/>}
                                              </span> 

                                        </button>
                                    </div>
                                    </div>
                          <button  type="submit" className="text--b btn__submit">Sign up</button>
                          </form>
                          <div className="form__recievedInfo ">
                            <input className="form__recievedInfo__checkbox" type="checkbox"></input>
                            <label htmlFor="form__recievedInfo__checkbox  text--grey" className="form__recievedInfo__label" >I wish to receive information, offers, recommendations, and updates from Kahoot!</label>
                          </div>
                        </div>
                    <div className="form__CardLineWrapper">
                            <hr className="form__CardLine"></hr>
                            <p className="text--b  form__or">or</p>
                    </div>
                    <div className="form__SocialLoginWrapper display--col">
                            <button  className="form__SignOnBtn" onClick={handleSignOn} >
                                <input type="button" />
                                <img className="form__socialIcon" src="https://img.icons8.com/color/512/google-logo.png" alt="Google Icon"></img>
                                <div className="form__socialText">Continue with Google</div> 
                            </button>
                           
                            {/* <button className="form__SignOnBtn">
                                <img className="form__socialIcon" src="https://img.icons8.com/color/512/facebook-circled.png" alt="Facebook Icon"></img>
                                <p className="form__socialText">Continue with Facebook</p>
                            </button> */}
                    </div>
                    <p className="text--center text--14 text--grey">Already have an account?  <a href="/login">Log in</a></p>                
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
export default Register;