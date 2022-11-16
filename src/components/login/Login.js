import React from "react";
// import {useForm} from "react-hook-form";
// import { useMutation } from "react-query";
// import axios from 'axios';
import "./login.css"
import { useNavigate } from "react-router-dom";

function Login() {
    // const navigate = useNavigate();
    // let user = {};

    // const {register, handleSubmit} = useForm();
    // const onSubmit = data => {
    //     user = data;
    //     mutate();
    // };

    // const {isLoading, isError, error, mutate} = useMutation(
    //     postDataLogin,
    //     {
    //         onSuccess: (res) => {
    //             if (res.data.ReturnCode === 1) {
    //                 localStorage.setItem("authenticated",true);
    //                 navigate("/");
    //             } else {
    //                 window.alert(res.data.Message);
    //                 localStorage.setItem("authenticated", false);
    //             }
    //         },
    //         onError: (err) => {

    //         },
    //     }
    // );

    // async function postDataLogin() {
    //     return await axios.post(process.env.REACT_APP_API_URL + 'login', user);
    // }
    // if (isLoading) {
    //     return <div>isLoading...</div>
    // }
    // if (isError) {
    //     return <div>Error! {error.message}</div>
    // }

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
        <div className="form__content">
                <header className="form__header"> Log in</header>
                <div className="form__body">
                    <div className="form__group row">
                        <label htmlFor="username" className="form__label">Username or email</label>
                        <input id = "username" className="form__input" type = "text" name="Username"  />
                    </div>
                    <div className="form__group row">
                        <label htmlFor="password" className="form__label">Password</label>
                        <input id = "password" className="form__input" type = "password"  name="Password"  />
                    </div>
                    <div className="form__forgotPassword">
                        <p>Forgot your password? <a href="#">Reset your password</a></p>
                    </div>
                </div>
                <button type="submit" className="btn__submit">Log in</button>
                <div className="form__signUp">
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    );
 }

export default Login;