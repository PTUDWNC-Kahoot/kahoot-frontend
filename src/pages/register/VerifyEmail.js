import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import axios from 'axios';
import '../../style/styles.css'
import './Register.css'
import './Verify.css'
import '../../style/Authentication.css'
import './VerifyResponsive.css'
import { useNavigate } from "react-router-dom";

export default function VerifyEmail ({user})
 {

    const [verifyCode, setCode] = useState(user.verifyCode);
    const [_error, setError] = useState(0);
    //codes: code object  get from input
    const [codes, setCodes] = useState({
        firstcode: "",
        secondcode: "",
        thirdcode: "",
        fourthcode: "",
        fifthcode: "",
        sixcode: ""
    });
    
    let arrCode =[""]; //A code's value array 
    const navigate = useNavigate();     
    const handleChangeCode = (e) => {
       
        const value = e.target.value; //value of code get from input
        const name = e.target.name;
        if (value >= 0 && value <= 9)
        {
            setCodes({
                ...codes,
                [name]: value,  
            }); 
            setError(0); //valid input

        }
        else{
            setError(2); //invalid input
        }
    }

    //Because setCodes() is usually asynchronous. 
    //At the time we change code value, it's not updated yet
    //Solve by useEffect()
    //useEffect runs on every re-render, and if the items passed into the array are state variable sand changed. 
    //So when the code changed and component re-renders, that useEffect will run. 
    useEffect(() => {
        arrCode = Object.values(codes); 
        let strCode=""; //A temp variable to save the verify code at string type
        for(var i = 0; i< arrCode.length; i++)
        {
           strCode += arrCode.at(i).toString();
        }
        setCode(strCode); 
        // console.log(strCode);
     
    }, [codes])

    const onSubmitCode = (e) => {
        e.preventDefault(); //prevent load page
        if(verifyCode.length == 6)
        {
          
            user.verifyCode = parseInt(verifyCode);  
            setError(0);
            mutate();
        }
        else{
            setError(1); //lack of code digit
        }
      
      
     
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
                    <header className="form__title text--b"> Verify </header>
                    <form className="modal__registerContent">
                        <div className="modal__text"> We've sent the 6-digit code to 
                            <div className="modal__emailName text--b"> {user.email} </div>
                             Enter the code below to confirm your email address.
                        </div>                 
                       
                             <div className="modal__inputWithError">
                                <div className="modal__inputContainer" >
                            <input type="number" className="verify__code" min="0" max="9" name="firstcode" value={codes.firstcode} onChange = {handleChangeCode} required/>
                            <input type="number" className="verify__code" min="0" max="9" name="secondcode" value={codes.secondcode} onChange = {handleChangeCode} required/>
                            <input type="number" className="verify__code" min="0" max="9" name="thirdcode" value={codes.thirdcode} onChange = {handleChangeCode} required/>
                            <input type="number" className="verify__code" min="0" max="9" name= "fourthcode" value={codes.fourthcode} onChange = {handleChangeCode} required/>
                            <input type="number" className="verify__code" min="0" max="9" name="fifthcode" value={codes.fifthcode} onChange = {handleChangeCode} required/>
                            <input type="number" className="verify__code" min="0" max="9" name= "sixcode" value={codes.sixcode}  onChange = {handleChangeCode} required/>
                              </div>
                                {_error == 2 && ( <p className="errorMsg">This field accepts only numbers from 0-9 </p> )}
                                {_error == 1 && ( <p className="errorMsg">Required 6-digit</p> )}
                                </div>
                             {/* <input type="number" className="verify__input" placeholder="Enter the code" value={verifyCode} onChange={ e => setCode(e.target.value)}/>  */}
                        <div className="verify__wrapperBtn">
                             <button  type="submit" className="verify__btn" onClick={onSubmitCode}>Verify</button>
                        </div>
                     
                    </form>
                </div>
            </div>
        
    )
}
