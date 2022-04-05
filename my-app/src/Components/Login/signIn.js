import React from "react";
import ReactDom from "react-dom";
import "./popup.css"

function SignIn(props){
  return (props.trigger) ? ( 
    <div className="popup">
      <div className="popup-inner">

        <button type="button" className="btn-close btn-close-white close-btn" aria-label="close" onClick={()=> props.setTrigger(false)}></button>
        <div id="signinLayout">
          <i class="fa-brands fa-twitter"></i>

          <p>Sign in to Twitter</p>

          <button type="button" class="updatedBtn btn btn-light custom-style">
            <img className="icon-img" src="https://img.icons8.com/color/20/000000/google-logo.png"/>
            Sign up with Google
          </button>

            <button type="button" class="updatedBtn btn btn-light" id="signinLayout">
              <i class="bi bi-apple"></i>
              <img className="icon-img" src="https://img.icons8.com/ios-glyphs/20/000000/mac-os.png"/>
              Sign up with Apple
            </button>

          <div className="line">
            <div className="or"> or </div>
          </div>

          <input className="inputTxt" type={"text"} placeholder="Phone, email, or username"></input>
          <input className="inputTxt" type={"password"} placeholder="Password"></input>

          <button type="button" class="updatedBtn btn btn-light">
            Next
          </button>

          <button type="button" class="updatedBtn btn btn-light">
            Forget Password
          </button>

          <button type="button" class="updatedBtn btn btn-light">
            Login as admin
          </button>
        </div>

        {props.children}
      </div>  
    </div>
  ) : ""
}
export default SignIn;
/*
ReactDom.render(
  <div>
    <div className="sign-in-div">
    <button type="button" class="btn btn-light">
      <img className="icon-img" src="https://img.icons8.com/color/20/000000/google-logo.png"/>
      Sign up with Google
      </button>

      <button type="button" class="btn btn-light">
        <i class="bi bi-apple"></i>
        <img className="icon-img" src="https://img.icons8.com/ios-glyphs/20/000000/mac-os.png"/>
        Sign up with Apple
      </button>

    </div>
  </div>,
  document.getElementById("root")
);*/
