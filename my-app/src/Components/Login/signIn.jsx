import React  , {useState} from "react";
import ReactDom from "react-dom";
import Popup from "./popup.module.css"
import LoginCss from "./Login.module.css"
import axios from "axios";
import {postEmailAndPassword} from "../../Api/SignUp"

var Email;
var Password;



// React.state={errorMessage:""}
function getEmail(val){
  Email = val.target.value;
}
function getPassword(val){
  Password = val.target.value;
}




function SignIn(props){
  const[page,setPage] = useState(0);
  const FormTitles = ["Next" , "Log in" , "Log in"];

  const[verLoading , setVerLoading] = useState(true);
  const[verify , setVerify] = useState();

  const GoToGetPasswordStep = () => {
    //alert(Email);
    setPage((currpage)=>currpage+1);
  }

  const GoToHome = async () => {
    //alert("Email:"+Email);
    //alert("password"+Password);
    {sendEmail()};
  
    //window.open("/Home","_self");
    alert("Data after being to api "+Email+Password);
  }

  const sendEmail =async () => {
    // let {data} =await axios.post("http://localhost:3030/",{
    //   email:Email,
    //   password:Password,
    // });
  
    // if(data.message==="success"){
    //   localStorage.setItem("token",data.token)
    //   this.props.history.replace("/Home");
    // }
    // else{
    //   this.setState({
    //     errorMessage:data.message
    //   })
    // }
  
    let requestBody = {
      "email": Email,
      "password": Password
    }
    let resul = await postEmailAndPassword(setVerLoading , setVerify , requestBody);


    
    console.log(Email+"  "+Password);
  }

  const loadData = () => {
    if(verify.status===200){
      localStorage.setItem("token",verify.data.token);
      localStorage.setItem("user_id",verify.data._id);
      localStorage.setItem("admin", verify.data.admin);
      window.open("/Home","_self");

      // this.props.history.replace("/Home");
    } 
    else{
      console.log(verify);
    }
  }


  const EmailStage = () => {

    return( <div className={Popup.FirstSignupPopup}>
  
          <button type="button" className="btn-close btn-close-black" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button>
          <div id={Popup.signinLayout}>
            <i className="fa-brands fa-twitter" id={LoginCss.twitterIcon}></i>
  
            <h2 className={Popup.signInToTwitter}>Sign in to Twitter</h2>
  
            <button type="button" className="updatedBtn btn btn-light custom-style" id={LoginCss.updatedBtn}>
              <img className={LoginCss.iconImg} src="https://img.icons8.com/color/20/000000/google-logo.png"/>
              Sign up with Google
            </button>
  
              <button type="button" className="updatedBtn btn btn-light" id={LoginCss.updatedBtn}>
                <i className="bi bi-apple"></i>
                <img  className={LoginCss.iconImg} src="https://img.icons8.com/ios-glyphs/20/000000/mac-os.png"/>
                Sign up with Apple
              </button>
  
            <div className={LoginCss.line}>
              <div className={LoginCss.or}> or </div>
            </div>
  
            <div className="form-floating mb-3">
              <input type="email" className="inputTxt form-control" id={("floatingInput","phoneOrEmail",Popup.txtArea)}  placeholder="Phone, email, or username" onChange={getEmail}></input>
              <label className="floatinTxt" id={Popup.txtAreaTxt} htmlFor="floatingInput">Phone, email, or username</label>
            </div>
            {/* {this.state.errorMessage} */}
  
            <button type="button" className="updatedBtn btn btn-dark" id={LoginCss.updatedBtn}
              onClick={() => { GoToGetPasswordStep()} }  >
              Next
            </button>
  
            <button type="button" className="updatedBtn btn btn-light" id={LoginCss.updatedBtn} onClick={() =>{ window.open("/forgotPassword","_self")}}>
              Forget Password
            </button>
  
            <p className={Popup.HaveNoAccount}>Don't have an account? <a className={Popup.SignUpLink} href={"/singup"}>Sign up</a> </p>
  
          </div>
  
  </div> );
  }

  const PasswordStage = () => {
    return( <div>
    
    <div className={Popup.FirstSigninPopup}>
          
            <button type="button" className="btn-close btn-close-black" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button>
  
            <i className="fa-brands fa-twitter" id={LoginCss.twitterIcon}></i>
  
            <h2 className={Popup.signInToTwitter}>Enter your password</h2>
  
            <div className="form-floating mb-3" >
                <input type="email" className="inputTxt form-control" id={"floatingInput"}  placeholder="Phone, email, or username" value={Email} disabled={true}></input>
                <label className="floatinTxt" htmlFor="floatingInput">email</label>
            </div>
  
            <div className="form-floating">
                <input className="inputTxt form-control" id={("floatingPassword", Popup.txtArea)} type={"password"} placeholder="Password" onChange={getPassword}></input>
                {/* <i class="far fa-eye" id={("togglePassword",Popup.togglePasswordVisibility)}></i> */}
                <label id={Popup.txtAreaTxt} htmlFor="floatingPassword">Password</label>
            </div>
  
  
      </div>
      <button type="button" className="updatedBtn btn btn-dark" id={(Popup.MainLoginBtn)}
                onClick={() => { GoToHome()} }>
                Login
      </button>
      {!verLoading && loadData()}
  
      <p className={Popup.HaveNoAccountF}>Don't have an account? <a className={Popup.SignUpLink} href={"/singup"}>Sign up</a> </p>
  
  </div> );
  }

  const PageToDisplay = () => {
    if(page===0) return <div>{EmailStage()}</div> 
    else if(page===1) return <div>{PasswordStage()}</div> 
  }

  return ( 
    <div className={Popup.popup}>
      <div className={Popup.popupInner}>

      {PageToDisplay()}

      </div>  
      {console.log(verify)}
    </div>
  );
}
export default SignIn;

