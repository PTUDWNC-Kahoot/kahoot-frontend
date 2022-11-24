import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from 'axios';
import '../../style/register.css'
import '../../style/authentication.css'
import { useNavigate } from "react-router-dom";
import {useFormik } from "formik"
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

    const navigate = useNavigate();  
    let user = {};

    const formik = useFormik ({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Required")
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email address"),
             //Required: Không để field này trống
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
    const { isLoading, isError, error, mutate } = useMutation(
        postData, 
        {
            onSuccess: (res) => {
                navigate("/login");
            },
            onError: (err) => {                   
            },
        }
    );
    async function postData() {
        return await axios.post(process.env.REACT_APP_API_URL + 'register', user);
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
            <div  className="form form__display--flex "  onSubmit={formik.handleSubmit}>
                <section className="form__content">
                    <header className="form__header form__text--center form__text--b">Create an account</header>
                        <div className="form__UsernameWrapper form__display--flex">
                            <h2 className="form__registerTitle">Sign up with your email</h2>
                            <form className="form__inputWrapper">
                                <label htmlFor="email" className="form__text--b form__label">Email</label>
                                <div className="form__usernameInput">
                                    <input id = "email" className="form__input" type = "text"   value={formik.values.email}    onChange={formik.handleChange} />
                                    {formik.errors.email && ( <p className="errorMsg">{formik.errors.email}</p> )}
                                </div>
                                <label htmlFor="password" className="form__text--b form__label">Password</label>
                                <div className="form__password">
                                    <input id = "password" className="form__input form__PasswordInput"  value={formik.values.password}  onChange={formik.handleChange} type ={showPass.typePass} />
                                    {formik.errors.password && (   <p className="errorMsg">{formik.errors.password}</p> )}
                                    <div className="form__passwordEye">
                                        <button id="form__passwordEyeBtn" type="button" className="form__passwordEyeBtn" onClick={handleShowPass}>
                                             <span className="form__passwordEyeIcon">
                                                {<img className="form__passwordEye--show" src={showPass.src}/>}
                                              </span> 

                                        </button>
                                    </div>
                                    </div>
                          <button  type="submit" className="form__text--b btn__submit">Sign up</button>
                          </form>
                          <div className="form__recievedInfo ">
                            <input className="form__recievedInfo__checkbox" type="checkbox"></input>
                            <label htmlFor="form__recievedInfo__checkbox  form__text--grey" className="form__recievedInfo__label" >I wish to receive information, offers, recommendations, and updates from Kahoot!</label>
                          </div>
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
                    <p className="form__text--center form__text--14 form__text--grey">Already have an account?  <a href="/login">Log in</a></p>

                
            </section>
        </div>
        
    </div>
    
    )
}
export default Register;