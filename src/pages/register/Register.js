import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from 'axios';
import '../../style/styles.css'
import '../../style/register.css'
import '../../style/authentication.css'
import { useNavigate } from "react-router-dom";
import {useFormik } from "formik"
import VerifyEmail  from "./VerifyEmail";
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
            
                // const modal_page = document.querySelector(".modal__verify");
                // modal_page.classList.add("open");
            },
            onError: (err) => {                   
            },
        }
    );
    // const {  mutate} = useMutation(
    //     postVerify, 
    //     {
    //         onSuccess: (res) => {
    //             navigate("/login");
    //             console.log("Success");
    //         },
    //         onError: (err) => {                   
    //         },
    //     }
    // );
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
        const verifyCode = 0;
        user = {email, password, verifyCode};
      //  console.log(user);
        return   <VerifyEmail  className="modal__verify"  user = {user} > </VerifyEmail>
    }
    
    return (
        <div className="page form__display--flex ">
        <div className="navbar"></div>
            <div className="form form__display--flex " onSubmit={formik.handleSubmit}>
                <section className="form__content">
                    <header className="form__header text--center">Create an account</header>
                        <div className="form__EmailWrapper form__display--flex">
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
                    <div className="form__SocialLoginWrapper form__display--flex">
                            <button className="form__SignOnBtn" onClick={handleRegisterGoogle}>
                                <img className="form__socialIcon" src="https://img.icons8.com/color/512/google-logo.png" alt="Google Icon"></img>
                                <div className="form__socialText">Continue with Google</div>
                            </button>
                            <button className="form__SignOnBtn">
                                <img className="form__socialIcon" src="https://img.icons8.com/color/512/facebook-circled.png" alt="Facebook Icon"></img>
                                <p className="form__socialText">Continue with Facebook</p>
                            </button>
                    </div>
                    <p className="text--center text--14 text--grey">Already have an account?  <a href="/login">Log in</a></p>

                
            </section>
        
            </div>
            {/* <div className="modal__verify">
                <div className="modal__container">
                    <header className="modal__header form__header"> Verify </header>
                    <div className="modal__registerContent">
                        <div className="modal__text"> We've sent the 6-digit code to 
                            <div className="modal__emailName text--b"> {formik.values.email} </div>
                             Enter the code below to confirm your email address.
                        </div>                 
                        {/* <div className="modal__inputContainer">
                            <input type="number" class="verify__code" min="0" max="9" value={_codes[0]} onChange = {e=> setCodes(e.target.value.at(0))} required/>
                            <input type="number" class="verify__code" min="0" max="9" value={_codes[1]} onChange = {e=> setCodes(e.target.value)} required/>
                            <input type="number" class="verify__code" min="0" max="9" value={_codes[2]} onChange = {e=> setCodes(e.target.value)} required/>
                            <input type="number" class="verify__code" min="0" max="9" value={_codes[3]} onChange = {e=> setCodes(e.target.value)} required/>
                            <input type="number" class="verify__code" min="0" max="9" value={_codes[4]} onChange = {e=> setCodes(e.target.value)} required/>
                            <input type="number" class="verify__code" min="0" max="9"value={_codes[5]}  onChange = {e=> setCodes(e.target.value)} required/>

                        </div> 
                            <input type="number" className="verify__input" placeholder="Enter the code" value={code} onChange={e => setCode(e.target.value)}/> 
                        <div className="verify__wrapperBtn">
                             <button className="verify__btn" onClick={onSubmitCode}>Verify</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Register;