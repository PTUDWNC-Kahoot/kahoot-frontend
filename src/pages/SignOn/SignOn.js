import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
import { API_URL, GOOGLE_ID } from "../../config/index"
import google from "../../assets/img/google-logo.png";
import "./SignOn.css";

function GoogleButton({ setIsErrorAuth }) {

  const clientId = GOOGLE_ID;

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId.toString,
        scope: "profile email"
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = async (res) => {
    const { data } = await axios.post(
      'http://54.179.150.210:8000/google/login',
      res.profileObj
    );
    if (res.status === 200) {
      localStorage.setItem("token", data.User.token);
      localStorage.setItem("provider", data.User.provider);
      window.location.reload();
    } else {
      setIsErrorAuth({
        isError: true,
        message: "Sign in with Google failed. Please sign in again!"
      });
    }
  };

  const onFailure = (err) => {
    setIsErrorAuth({
      isError: true,
      message: err
    });
  };

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          className="login__google-btn btn btn-outline-danger"
        >
          <img src={google} alt="Google" className="login__google-img" />
          <div className="login__google-text">Sign in with Google</div>
        </button>
      )}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      isSignedIn
    />
  );
}

export default GoogleButton;