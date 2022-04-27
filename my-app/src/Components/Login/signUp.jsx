import React , {useState , Component } from "react";
import Popup from "./popup.module.css"
import LoginCss from "./Login.module.css"
import axios from "axios";
import {postVerify , PostEmailAndVerCode , postUserData , postEmailAndPassword} from "../../Api/SignUp"
import { Email } from "@mui/icons-material";

import md5 from "md5";

import {library} from "@fortawesome/fontawesome-svg-core";
import { faEye , faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Visibility } from "@mui/icons-material";
import { color, style } from "@mui/system";
import { green } from "@mui/material/colors";
library.add(faEye , faEyeSlash);


var user = {
  Name: "",
  Email: "",
  Month: "",
  Day: "",
  Year: "",
  Password: "",
  username:"",
}

var temp_user = {
  temp_Password: "",
  temp_Name: "",
  temp_Email: "",
  temp_Month: "",
  temp_Day: "",
  temp_Year: "",
  temp_username:"",
}

var encryptedPassword;

function getUserData(val){
  temp_user[val.target.name] = val.target.value;
  //console.log(temp_user);
}


var verCode;
var temp_verCode
function getVerCode(val){
  temp_verCode = val.target.value;
}

const usePasswordToggle = () => {
  const [visible , setVisibility] = useState(false);
  const Icon = (
    <FontAwesomeIcon icon =  {visible ? "eye":"eye"} onClick = {() => setVisibility(Visibility => !Visibility)} />
  )
  
  const tempInputType = visible ? "text" : "password";
  return[tempInputType , Icon];
}





//main function.
function SignUp(props){
  const[page,setPage] = useState(0);
  const FormTitles = ["Next" , "Next" , "Next" ,"Next" , "Next" , "Sign up" ];

  const[verLoading , setVerLoading] = useState(true);
  const[verify , setVerify] = useState();

  const[verLoadingIDandEmail , setVerLoadingIDandEmail] = useState(true);
  const[verifyIDandEmail , setVerifyIDandEmail] = useState();

  
  const[verLoadingData , setVerLoadingData] = useState(true);
  const[verifyData , setVerifyData] = useState();

  const[verLoadingLogin , setVerLoadingLogin] = useState(true);
  const[verifyLogin , setVerifyLogin] = useState();

  const [passwordInputType , toggleIcon] = usePasswordToggle();

  const secPageBtn = () => {
    setPage((currpage)=>currpage-1)
  }

  //Check which tap will be rendered.
  const PageToDisplay = () => {
    if(page===0) return <div>{PageDisplay()}</div> 
    else if(page===1) return <div>{secondStep()}</div>
    else if(page===2) return <div>{thirdStep()}</div>
    else if(page===3) return <div>{verStep()}</div>
    else if(page===4) return <div>{passwordStep()}</div>
    else if(page===5) return <div>{userNameStep()}</div>
  }
  //Render first tap ask the user to enter name, email, and date of birth.
  const PageDisplay = () => {
    return( <div className={Popup.FirstSignupPopup}>
  
        <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button>
            
        <div className={Popup.putInCenter}><i className="fa-brands fa-twitter " id={Popup.twitterIcon}></i></div>
  
        <h3 className={Popup.headline}>Create your account</h3>
        <div className="form-floating mb-3">
          <input type={"text"} className="inputTxt form-control inputTxt signupButton nameArea" id={("floatingInput userFullName",Popup.txtArea)}   placeholder="Name" onChange={getUserData} name="temp_Name"></input>
          {/* {tempUserNameLength.length} */}
          <label id={Popup.txtAreaTxt}  htmlFor="floatingInput">Name</label>
        </div>
  
        <div className="form-floating mb-3">
          <input type={"text"} className="inputTxt form-control signupButton nameArea" id={("floatingInput phoneOrEmail",Popup.txtArea)}  placeholder="Email" onChange={getUserData} name="temp_Email"></input>
          <label className="floatinTxt" id={Popup.txtAreaTxt} htmlFor="floatingInput">Email</label>
        </div>
  
  
  
        <h6 className={(Popup.datePicker,Popup.datePickerH)}>Date of birth</h6>
        <div className={Popup.askToConfirmDB}>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
  
  
      <select  className={(Popup.datePicker,Popup.month)} id="selectedMonth" onChange={getUserData} name="temp_Month">
                  <option value={""} disabled selected>Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="Sebtember">Sebtember</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
      </select>
  
      <select className={(Popup.datePicker, Popup.day)} id="selectedDay" onChange={getUserData} name="temp_Day">
                  <option value={""} disabled selected>Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
      </select>
  
      <select className={(Popup.datePicker,Popup.year)} id="selectedYear" onChange={getUserData} name="temp_Year">
                  <option value={""} disabled selected>Year</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1984">1975</option>
                  <option value="1983">1974</option>
                  <option value="1982">1973</option>
                  <option value="1981">1972</option>
                  <option value="1980">1971</option>
                  <option value="1979">1970</option>
                  <option value="1978">1969</option>
                  <option value="1977">1968</option>
                  <option value="1976">1967</option>
                  <option value="1979">1966</option>
                  <option value="1978">1965</option>
                  <option value="1977">1964</option>
                  <option value="1976">1963</option>
                  <option value="1978">1962</option>
                  <option value="1977">1961</option>
                  <option value="1976">1960</option>
                  <option value="1978">1959</option>
                  <option value="1977">1958</option>
                  <option value="1976">1957</option>
                  <option value="1979">1956</option>
                  <option value="1978">1955</option>
                  <option value="1977">1954</option>
                  <option value="1976">1953</option>
                  <option value="1978">1952</option>
                  <option value="1977">1951</option>
                  <option value="1976">1950</option>
      </select>
    </div> );
  }
  
  //second tap have some instructions
  const secondStep = () => {
    return( <div className={Popup.secondSignupPopup}>
      <div>
        <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{secPageBtn()}}></button>
        <h5 className={Popup.steps}>Step 2 of 5</h5>
      </div>
      <h3 className={Popup.customizeH}>Customize your experience</h3>
      <h5 className={Popup.TrackH}>Track where you see Twitter content across the web</h5>
  
      <div>
        <div>Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.</div>
      </div>
  
      <div className={Popup.privacyAndPolicy}>By signing up, you agree to our Terms, Privacy Policy, and Cookie Use. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. Learn more</div>
  
    </div> )
  }

  //third tap
  const thirdStep = () => {
    return( <div className={Popup.FirstSignupPopup}>
  
      <div>
        <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{secPageBtn()}}></button>
        <h5 className={Popup.steps}>Step 3 of 5</h5>
      </div>  

      <h3 className={Popup.headline}>Create your account</h3>
      <div className="form-floating mb-3">
        <input type={"text"} style={{backgroundColor: "white"}} className="inputTxt form-control inputTxt signupButton nameArea" id={("floatingInput userFullName",Popup.txtArea)} value={user.Name} disabled={true}   placeholder="Name" ></input>
        <label id={Popup.txtAreaTxt}  htmlFor="floatingInput">Name</label>
      </div>

      <div className="form-floating mb-3">
        <input type={"text"} style={{backgroundColor: "white"}} className="inputTxt form-control signupButton nameArea" id={("floatingInput phoneOrEmail",Popup.txtArea)} value={user.Email} disabled={true}  placeholder="Email" ></input>
        <label className="floatinTxt" id={Popup.txtAreaTxt} htmlFor="floatingInput">Email</label>
      </div>

      <div className="form-floating mb-3">
        <input type={"text"} style={{backgroundColor: "white"}} className="inputTxt form-control signupButton nameArea" id={("floatingInput phoneOrEmail",Popup.txtArea)} value={user.Month+" "+user.Day+", "+user.Year} disabled={true}  placeholder="Birth date" ></input>
        <label className="floatinTxt" id={Popup.txtAreaTxt} htmlFor="floatingInput">Birth date</label>
      </div>

      <div className={Popup.privacyAndPolicy2}>
        By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. Learn more. Others will be able to find you by email or phone number, when provided, unless you choose otherwise here.
      </div>


  </div> );
  }
  
  //Verification step tap, ask the user to enter the verification code 
  const verStep = () => {
    return( <div className={Popup.FirstSignupPopup}>
  
      {/* <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button> */}
          
      <div className={Popup.putInCenter}><i className="fa-brands fa-twitter " id={Popup.twitterIcon}></i></div>
      <h3 className={Popup.headline}>We sent you a code</h3>
      <div className={Popup.txtAskVer}>Enter it below to verify your account.</div>
  
      <div>
        <div className="form-floating mb-3">
            <input type={"text"} className="inputTxt form-control signupButton nameArea" id={("floatingInput phoneOrEmail",Popup.txtArea)}  placeholder="Verification code" onChange={getVerCode}></input>
            <label className="floatinTxt" id={Popup.txtAreaTxt} htmlFor="floatingInput">Verification code</label>
        </div>
      </div>

  
  </div> );
  }
  
  //Ask the user to enter his/her password
  const passwordStep = () => {
    return( <div className={Popup.FirstSignupPopup}>
  
      {/* <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button> */}
          
      <div className={Popup.putInCenter}><i className="fa-brands fa-twitter " id={Popup.twitterIcon}></i></div>
      <h3 className={Popup.headline}>You'll need a password</h3>
      <div className={Popup.txtAskPassword}>Make sure it's 8 cahracters or more.</div>

      
      <div>
        <div>
          <div className="form-floating mb-3">
            <input type={passwordInputType} className="inputTxt form-control inputTxt signupButton" id={("floatingInput",Popup.txtArea)}  placeholder="password" onChange={getUserData} name="temp_Password"></input>
            <span id={(Popup.togglePasswordVisibility)}>
                  {toggleIcon}
                </span>
            <label className="floatinTxt" id={Popup.txtAreaTxt} htmlFor="floatingInput">password</label>
          </div> 
        </div>
      </div>


      
  </div> );
  }
  
  //Ask the user to enter his/her user_name
  const userNameStep = () => {
    return( <div className={Popup.FirstSignupPopup}>
  
      {/* <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button> */}
          
      <div className={Popup.putInCenter}><i className="fa-brands fa-twitter " id={Popup.twitterIcon}></i></div>
      <h3 className={Popup.headline}>What should we call you</h3>
      <div className={Popup.txtAskVer}>Your @username is unique. You can always change it later.</div>
  
      <div className="form-floating mb-3">
          <input type={"text"} className="inputTxt form-control signupButton nameArea" id={("floatingInput phoneOrEmail",Popup.txtArea)}  placeholder="username" onChange={getUserData} name="temp_username"></input>
          <label className="floatinTxt" htmlFor="floatingInput">username</label>
      </div>
      
  </div> );
  }

  //send email to back end
  const sendEmail =async () => {
    let requestBody = {
      "email": user.Email
    }
    let resul = await postVerify(setVerLoading , setVerify , requestBody);
  }
  const sendData =async () => {
    let requestBody = {
      "email": user.Email,
      "password": user.Password,
      "name": user.Name,
      "username": user.username,
      "date_of_birth": user.Year +"-"+ user.Month +"-"+ user.Day,
      "gender": "M",
      "bio": " ",
      "location": " ",
      "website": " ",
    }
    let resul = await postUserData(setVerLoadingData , setVerifyData , requestBody);
  }
  //login
  const tempLogin = async()=>{
    let requestBody2 = {
      "email": user.Email,
      "password": user.Password
    }
    console.log("req2 : "+requestBody2);
    let resul2 = await postEmailAndPassword(setVerLoadingLogin , setVerifyLogin , requestBody2);
  }

  //send email and verication
  const sendEmailAndVerCode =async () => {
    //console.log(user.Email);
    let resul2 = await PostEmailAndVerCode(setVerLoadingIDandEmail , setVerifyIDandEmail ,`?OTP=${verCode}&email=${user.Email}`);
  }


  const checkVer = () =>{
    if(page===3 && verCode !== undefined){
      if(verCode.length>0 && verifyIDandEmail.status===200){
        setPage((currpage)=>currpage+1);
        setVerLoadingIDandEmail(true);
      }
      else{
        setVerLoadingIDandEmail(true);
      }
    }
  }
  const checkEmailSent = () =>{

    if(page===0 &&verify !== undefined){
      if(verify.status === 400){
        alert("Email is already exist");
      }
      else{
        if(user.Name.length>0 & user.Email.length>0 & user.Month.length>0 & user.Day.length>0 & user.Year.length>0 ){
          setPage((currpage)=>currpage+1);
        } 
      }
    }
  }

  const checkDataSent = () => {
    // console.log(verifyData.status);
  
    if(user.username.length>0 && verifyData.status===200 /*&& verifyLogin.status===200*/){
      
      localStorage.setItem("token",verifyLogin.data.token);
      localStorage.setItem("user_id",verifyLogin.data._id);
      localStorage.setItem("admin", verifyLogin.data.admin);
      console.log(user.Email+"   "+user.Password);

      window.open("/Home","_self");

      setVerLoadingData(true);
      setVerLoadingLogin(true);
      // {console.log(verifyData)}
    }
    else if(user.username.length>0 && verifyData.status===400){
      alert("User is already exist");
      setVerLoadingIDandEmail(true);
      setVerLoadingLogin(true);
      user.username= "";
    }
    else{

      // {console.log(verifyData)}
      setVerLoadingData(true);
      setVerLoadingLogin(true);
    }
  }
  

  //event excuted when main button is clicked to handle which tap will be rendered
  async function Handlebtn (){
    if(page===0){
      user.Name=temp_user.temp_Name;
      user.Email=temp_user.temp_Email;
      user.Month=temp_user.temp_Month;
      user.Day=temp_user.temp_Day;
      user.Year=temp_user.temp_Year;



      await sendEmail()

      //alert(user.Name+":"+user.Email)
    }
    else if(page===1){
      setPage((currpage)=>currpage+1);
    }
    else if(page===2){
      setPage((currpage)=>currpage+1);
    }
    else if(page===3){
      verCode=temp_verCode;
      {sendEmailAndVerCode()}
      // if(verCode.length>0)setPage((currpage)=>currpage+1);
    }
    else if(page===4){
      user.Password=temp_user.temp_Password;

      encryptedPassword = md5(user.Password);
      // alert(encryptedPassword);

      // await sendData();
      if(user.Password.length>0)setPage((currpage)=>currpage+1);
      //if(user.Password.length>0)window.open("/Home","_self");
      // alert(Password);
    }
    else if(page===5){
      user.username=temp_user.temp_username;
      await sendData();
       tempLogin();
    }
  }


  return( 
    <div className={Popup.signUp}>
      <div className={Popup.popupInner}>


          {PageToDisplay()}



          <button type="button" className="updatedBtn btn btn-light update-ptn" id={(LoginCss.updatedBtn,Popup.signuputton)} 

            // disabled={page==FormTitles.length-1} 
            //disabled={!temp_Name}
            
            onClick={() => {Handlebtn()} }>
            {FormTitles[page]}
          </button>
          {/* {console.log(verLoading)} */}
          {/* {!verLoading && console.log(verify.status)} */}
          {/* {!verLoading && Temp()} */}

          {!verLoading && checkEmailSent()}
          {!verLoadingIDandEmail && checkVer()}
          {!verLoadingData && !verLoadingLogin && checkDataSent()}

      </div>  
    </div>
  );
}
export default SignUp;
