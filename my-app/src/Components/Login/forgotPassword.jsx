import React from "react";
import ReactDom from "react-dom";
import Popup from "./popup.module.css"
import LoginCss from "./Login.module.css"


function SignIn(props){
  return ( 
    <div className={Popup.popup}>
      <div className={(Popup.popupInner )}>

        <button type="button" className="btn-close btn-close-black" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button>
        <div id={Popup.signinLayout}>
          <i className="fa-brands fa-twitter" id={LoginCss.twitterIcon}></i>

          <p>Find your Twitter account</p>


          <div className="form-floating mb-3">
            <input type="email" className="inputTxt form-control" id={("floatingInput userFullName",Popup.txtArea)}  placeholder="Enter your Phone, email, or username"></input>
            <label className="floatinTxt" id={Popup.txtAreaTxt} for="floatingInput">Enter your Phone, email, or username</label>
          </div>


          


          

          <button type="button" className="updatedBtn btn btn-dark" id={LoginCss.updatedBtn}>
            Next
          </button>



        </div>

      </div>  
    </div>
  );
}
export default SignIn;

