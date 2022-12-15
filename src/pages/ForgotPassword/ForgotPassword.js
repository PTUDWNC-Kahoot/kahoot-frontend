import Navbar from "../../components/Navbar"
import {useFormik } from "formik"
import * as Yup from "yup"
import { YouTube } from "@mui/icons-material"
import { useMutation } from "react-query";
import axios from "axios";
import VerifyEmail from "../Register/VerifyEmail";
import '../../style/Authentication.css'
import '../../style/styles.css'
import './ForgotPassword.css'
export default function ForgotPassword() {

    let user = {};
    const formik = useFormik ({
            initialValues: {
                email: ""
            },
            validationSchema: Yup.object({
                email: Yup.string().required("Required")
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email address"),    
            }),
            onSubmit: values => {
                user = values;
                
            }
    });
    const {isLoading, isError, isSuccess, error, mutate} = useMutation(
        postData,
        {
            onSuccess: (res) => {

            },
            onError: (err) => {

            },
        }
    )
    async function postData () {
        return await axios.post("", user);
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
    if (isSuccess) { 

        const email =  formik.values.email;
        const password =  "" ;
        const verifyCode = "";
        user = {email, password, verifyCode};
        return   <VerifyEmail  className="modal__verify"  user = {user} > </VerifyEmail>
    }
    return (
        <div className="forgotPass__page">
             <Navbar/>    
             <div className="forgotPass__form " onSubmit={formik.handleSubmit}>
                <div className="formPass__content ">
                        <header className="formPass__tilte">Reset your Password</header>
                        <form className="form__inputWrapper">
                        <label htmlFor="email" className="form__label"> Email</label>
                        <div className="form__emailInput">
                            <input id = "email" className="form__input" type = "text"   value={formik.values.email}    onChange={formik.handleChange} />
                            {formik.errors.email && ( <p className="errorMsg">{formik.errors.email}</p> )}
                        </div>
                        <button type="submit" className="text--b btn__submit">Send reset link</button>
                        </form>
                        <div className="form__CardLineWrapper">
                                <hr className="form__CardLine"></hr>
                                <p className="text--b  form__or">or</p>
                        </div>
                        <div className="backtoLogin">
                                <a href="/login">Back To Login</a>
                        </div>
                </div>
             </div>
        </div>
    
       
    )
}