import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from 'axios';
import '../../style/styles.css'
import '../../style/register.css'
import '../../style/verify.css'
import '../../style/authentication.css'
import { useNavigate } from "react-router-dom";
import {useFormik } from "formik"
import * as Yup from "yup"


export default function VerifyEmail ({user})
 {

    // console.log(user);
    // let user = {}
    //const [user, setUser] = useState();
    const [verifyCode, setCode] = useState(user.verifyCode);
    const navigate = useNavigate();  

    // const setChangeCode = (e) => {
    //     e.preventDefault();
    //     console.log(verifyCode);
    // }
    const onSubmitCode = (e) => {
        e.preventDefault();
        user.verifyCode = parseInt(verifyCode);
        console.log(user);      
        mutate();
    }  
    const { isLoading, isError, error, mutate } = useMutation(
        postData, 
        {
            onSuccess: (res) => {
                alert("Verify Success!");
                navigate("/login");    
            },
            onError: (err) => {                   
            },
        }
    );
    async function postData() {
        return await axios.post("http://localhost:8000/auth/emailVerification", user);  
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }

    return (

            <div className="modal__verify">
                <div className="modal__container">
                    <header className="modal__header form__header"> Verify </header>
                    <div className="modal__registerContent">
                        <div className="modal__text"> We've sent the 6-digit code to 
                            <div className="modal__emailName text--b"> {user.email} </div>
                             Enter the code below to confirm your email address.
                        </div>                 
                        {/* <div className="modal__inputContainer">
                            <input type="number" class="verify__code" min="0" max="9" value={_codes[0]} onChange = {e=> setCodes(e.target.value.at(0))} required/>
                            <input type="number" class="verify__code" min="0" max="9" value={_codes[1]} onChange = {e=> setCodes(e.target.value)} required/>
                            <input type="number" class="verify__code" min="0" max="9" value={_codes[2]} onChange = {e=> setCodes(e.target.value)} required/>
                            <input type="number" class="verify__code" min="0" max="9" value={_codes[3]} onChange = {e=> setCodes(e.target.value)} required/>
                            <input type="number" class="verify__code" min="0" max="9" value={_codes[4]} onChange = {e=> setCodes(e.target.value)} required/>
                            <input type="number" class="verify__code" min="0" max="9"value={_codes[5]}  onChange = {e=> setCodes(e.target.value)} required/>
                            e => setCode(e.target.value)

                        </div> */}
                            <input type="number" className="verify__input" placeholder="Enter the code" value={verifyCode} onChange={ e => setCode(e.target.value)}/> 
                        <div className="verify__wrapperBtn">
                             <button className="verify__btn" onClick={onSubmitCode}>Verify</button>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
