import React from "react";
import SignIn from "./signIn"
import SignUp from "./signUp";

import {useState} from 'react';

function RightHalf() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonSignUp, setButtonSignUp] = useState(false);
  return (
    <div className="RightHalf">

    
      <i class="fa-brands fa-twitter"></i>

      <h1 className="h1-for-login">Happening now</h1>


      <p className="Join-Twitter-today">Join Twitter today.</p>

      <button type="button" class="updatedBtn btn btn-light">
      <img className="icon-img" src="https://img.icons8.com/color/20/000000/google-logo.png"/>
      Sign up with Google
      </button>
      <button type="button" class="updatedBtn btn btn-light">
        <i class="bi bi-apple"></i>
        <img className="icon-img" src="https://img.icons8.com/ios-glyphs/20/000000/mac-os.png"/>
        Sign up with Apple
      </button>

      <div className="line">
        <div className="or"> or </div>
      </div>

      <button type="button" class="updatedBtn btn btn-primary signUp-btn" onClick={() => setButtonSignUp(true)} >
        Sign up with phone or email

      </button>

      <SignUp trigger={buttonSignUp} setTrigger = {setButtonSignUp}>

      </SignUp>

      <p className="below-signUp">
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use.
      </p>
      <p className="Already-have-an-account">Already have an account?</p>

      <button type="button" class="updatedBtn btn btn-primary black-btn" onClick={() => setButtonPopup(true)}>
      Sign in
      </button>
      <SignIn trigger={buttonPopup} setTrigger = {setButtonPopup}>

      </SignIn>
    </div>
  );
}

export default RightHalf;
