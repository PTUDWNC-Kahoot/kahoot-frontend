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


export default function LoginWithGoogle ()
 {

    // console.log(user);
    // // let user = {}
    // //const [user, setUser] = useState();
    // const [verifyCode, setCode] = useState(user.verifyCode);
    // const navigate = useNavigate();  

    // // const setChangeCode = (e) => {
    // //     e.preventDefault();
    // //     console.log(verifyCode);
    // // }
    console.log("YEPPP")
     mutate();
    const { isLoading, isError, error, mutate } = useMutation(
        getData, 
        {
            onSuccess: (res) => {
                alert("Success!");
                
            },
            onError: (err) => {                   
            },
        }
    );
    async function getData() {
        return await axios.get("http://localhost:8000/google/login");  
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
    return (
        <h2>YEPP</h2>
    )
}
