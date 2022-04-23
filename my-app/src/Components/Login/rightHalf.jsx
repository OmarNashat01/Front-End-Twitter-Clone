import React from "react";
import SignIn from "./signIn"
import SignUp from "./signUp";
import LoginCss from "./Login.module.css"

import {useState} from 'react';



function RightHalf() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonSignUp, setButtonSignUp] = useState(false);
  return (
    <div className={LoginCss.RightHalf}>

    
      <i className="fa-brands fa-twitter" id={LoginCss.twitterIcon}></i>

      <h1 className={LoginCss.h1ForLogin}>Happening now</h1>


      <p className={LoginCss.JoinTwitterToday}>Join Twitter today.</p>

      <button type="button" className=" btn btn-light" id={LoginCss.updatedBtn}>
      <img className={LoginCss.iconImg} src="https://img.icons8.com/color/20/000000/google-logo.png" alt="google img"/>
      Sign up with Google
      </button>
      <button type="button" className=" btn btn-light" id={LoginCss.updatedBtn}>
        <i className="bi bi-apple"></i>
        <img className={LoginCss.iconImg} src="https://img.icons8.com/ios-glyphs/20/000000/mac-os.png" alt="mac icon" />
        Sign up with Apple
      </button>

      <div className={LoginCss.line}>
        <div className={LoginCss.or}> or </div>
      </div>

      <button type="button" className="btn btn-primary signUp-btn" id={(LoginCss.signUpBtn )} onClick={() =>{ window.open("/singup","_self")}} >
        Sign up with phone or email

      </button>


      <p className={LoginCss.belowSignUp}>
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use.
      </p>
      <p className={LoginCss.AlreadyHaveAnAccount}>Already have an account?</p>

      <button type="button" className="btn btn-light signInPtn" id={LoginCss.updatedBtn} onClick={() =>{ window.open("/singin","_self")}}>
      Sign in
      </button>

    </div>
  );
}

export default RightHalf;
