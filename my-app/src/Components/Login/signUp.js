import React from "react";
import ReactDom from "react-dom";
import "./popup.css"

function SignUp(props){
  return (props.trigger) ? ( 
    <div className="signUp">
      <div className="popup-inner">

        <button type="button" className="btn-close btn-close-white close-btn" aria-label="close" onClick={()=> props.setTrigger(false)}></button>
        <div id="">
        <div className="putInCenter"><i class="fa-brands fa-twitter "></i></div>
          

            
          <h3>Create an account with twitter</h3>

          <input className="inputTxt" type={"text"} placeholder="Name"></input>
          <input className="inputTxt" type={"password"} placeholder="Phone or Email"></input>
          <h6>Date of birth</h6>
          <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>

          <select name="Month" >
              <option value={""} disabled selected>Month</option>
          </select>
          <select name="Day" >
              <option value={""} disabled selected>Day</option>
          </select>
          <select name="Year" >
              <option value={""} disabled selected>Year</option>
          </select>


          <button type="button" class="btn btn-light update-ptn">
            Next
          </button>

        </div>

        {props.children}
      </div>  
    </div>
  ) : ""
}
export default SignUp;
