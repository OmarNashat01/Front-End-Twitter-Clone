import React, { useState } from "react";
import ReactDom from "react-dom";
import Popup from "./popup.module.css"
import LoginCss from "./Login.module.css"
import { height } from "@mui/system";



function SignIn(props){
//var Email;
const [Email,setEmail] = useState("");
const [btnState , setBtnState] = useState(true);

function getEmail(val){

  setEmail(val.target.value);
  if(Email.length>1){
      setBtnState(false);
  }
  else{
    setBtnState(true);
  }
  console.log(Email.length);
}
  return ( 
    <div className={Popup.popup}>
      <div className={(Popup.popupInner )}>

        <button type="button" className="btn-close btn-close-black" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button>
        <div id={Popup.FPLayouts}>
          <i className="fa-brands fa-twitter" id={LoginCss.twitterIcon}></i>

          <p className={(Popup.findYourTwitterFP )}>Find your Twitter account</p>
          

          <div className="form-floating mb-3">
            <input type="email" className="inputTxt form-control" id={("floatingInput userFullName",Popup.txtArea)}  placeholder="Enter your Phone, email, or username" onChange={getEmail}></input>
            <label className="floatinTxt" id={Popup.txtAreaTxt} for="floatingInput">Enter your email, phone number, or username</label>
          </div>



          
          <div className={(Popup.FPbtn )}>
            <button type="button" className="updatedBtn btn btn-dark" id={LoginCss.updatedBtn} style={{width: "100%",height:"50px"}} disabled={btnState}>
              Search
            </button>
          </div>


 



        </div>

      </div>  
    </div>
  );
}
export default SignIn;

