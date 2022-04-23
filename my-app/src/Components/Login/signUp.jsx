import React , {useState , Component} from "react";
import Popup from "./popup.module.css"
import LoginCss from "./Login.module.css"
import axios from "axios";


var user = {
  Name: "",
  Email: "",
  Month: "",
  Day: "",
  Year: "",
  Password: "",
}

var temp_user = {
  temp_Password: "",
  temp_Name: "",
  temp_Email: "",
  temp_Month: "",
  temp_Day: "",
  temp_Year: "",
  
}

function getUserData(val){
  temp_user[val.target.name] = val.target.value;
  console.log(temp_user);
}


var verCode;
var temp_verCode
function getVerCode(val){
  temp_verCode = val.target.value;
}



//main function.
function SignUp(props){
  const[page,setPage] = useState(0);
  const FormTitles = ["Next" , "Next" , "Next" , "Sign up" ];

  //Check which tap will be rendered.
  const PageToDisplay = () => {
    if(page===0) return <div>{PageDisplay()}</div> 
    else if(page===1) return <div>{secondStep()}</div>
    else if(page===2) return <div>{verStep()}</div>
    else if(page===3) return <div>{passwordStep()}</div>
  }
  //Render first tap ask the user to enter name, email, and date of birth.
  const PageDisplay = () => {
    return( <div className={Popup.FirstSignupPopup}>
  
        <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button>
            
        <div className={Popup.putInCenter}><i className="fa-brands fa-twitter " id={Popup.twitterIcon}></i></div>
  
        <h3 className={Popup.headline}>Create your account</h3>
        <div className="form-floating mb-3">
          <input type={"text"} className="inputTxt form-control inputTxt signupButton nameArea" id={("floatingInput userFullName",Popup.txtArea)}   placeholder="Name" onChange={getUserData} name="temp_Name"></input>
          <label id={Popup.txtAreaTxt}  for="floatingInput">Name</label>
        </div>
  
        <div className="form-floating mb-3">
          <input type={"text"} className="inputTxt form-control signupButton nameArea" id={("floatingInput phoneOrEmail",Popup.txtArea)}  placeholder="Email" onChange={getUserData} name="temp_Email"></input>
          <label className="floatinTxt" id={Popup.txtAreaTxt} for="floatingInput">Email</label>
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
        <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ setPage((currpage)=>currpage-1)}}></button>
        <h5>Step 2 of 5</h5>
      </div>
      <h3 className={Popup.customizeH}>Customize your experience</h3>
      <h5 className={Popup.TrackH}>Track where you see Twitter content across the web</h5>
  
      <div>
        <div>Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.</div>
      </div>
  
      <div className={Popup.privacyAndPolicy}>By signing up, you agree to our Terms, Privacy Policy, and Cookie Use. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. Learn more</div>
  
    </div> )
  }
  
  //Verification step tap, ask the user to enter the verification code 
  const verStep = () => {
    return( <div className={Popup.FirstSignupPopup}>
  
      <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button>
          
      <div className={Popup.putInCenter}><i className="fa-brands fa-twitter " id={Popup.twitterIcon}></i></div>
      <h3 className={Popup.headline}>We sent you a code</h3>
      <div className={Popup.txtAskVer}>Enter it below to verify your account.</div>
  
      <div className="form-floating mb-3">
          <input type={"text"} className="inputTxt form-control signupButton nameArea" id={("floatingInput phoneOrEmail",Popup.txtArea)}  placeholder="Verification code" onChange={getVerCode}></input>
          <label className="floatinTxt" id={Popup.txtAreaTxt} for="floatingInput">Verification code</label>
      </div>
  
  </div> );
  }
  
  //Ask the user to enter his/her password
  const passwordStep = () => {
    return( <div className={Popup.FirstSignupPopup}>
  
      <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button>
          
      <div className={Popup.putInCenter}><i className="fa-brands fa-twitter " id={Popup.twitterIcon}></i></div>
      <h3 className={Popup.headline}>You'll need a password</h3>
      <div className={Popup.txtAskPassword}>Make sure it's 8 cahracters or more.</div>

      
      <div>
        <div className="form-floating mb-3">
          <input type={"password"} className="inputTxt form-control inputTxt signupButton" id={("floatingInput",Popup.txtArea)}  placeholder="password" onChange={getUserData} name="temp_Password"></input>
          <label className="floatinTxt" id={Popup.txtAreaTxt} for="floatingInput">password</label>
        </div> 
      </div>

      
  </div> );
  }
  
  //Ask the user to enter his/her user_name
  const userNameStep = () => {
    return( <div className={Popup.FirstSignupPopup}>
  
      <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button>
          
      <div className={Popup.putInCenter}><i className="fa-brands fa-twitter " id={Popup.twitterIcon}></i></div>
      <h3 className={Popup.headline}>What should we call you</h3>
      <div className={Popup.txtAskVer}>Your @username is unique. You can always change it later.</div>
  
      <div className="form-floating mb-3">
          <input type={"text"} className="inputTxt form-control signupButton nameArea" id="floatingInput phoneOrEmail"  placeholder="username"></input>
          <label className="floatinTxt" for="floatingInput">username</label>
      </div>
      
  </div> );
  }

  const sendEmail =async () => {
    let {data} =await axios.post("http://localhost:3030/",{
      user_email:user.Email
    });
    //console.log(data);
  }
  const sendEmailAndVerCode =async () => {
    let {data} =await axios.post("http://localhost:3030/",{
      OTP:verCode,
      user_email:user.Email
    });
    //console.log(data);
  }
  const getApproval =async () => {
    let res = await axios.get("/example");//not completed
  }
  const sendUserData =async () => {
    let {data} =await axios.post("http://localhost:3030/",{
      Name:user.Name,
      email:user.Email,
      month:user.month,
      day:user.Day,
      year:user.year,
      Password:user.Password,
    });
    //console.log(data);
  }
  

  //event excuted when main button is clicked to handle which tap will be rendered
  function Handlebtn(){
    if(page===0){
      user.Name=temp_user.temp_Name;
      user.Email=temp_user.temp_Email;
      user.Month=temp_user.temp_Month;
      user.Day=temp_user.temp_Day;
      user.Year=temp_user.temp_Year;

      {sendEmail()}

      if(user.Name.length>0 & user.Email.length>0 & user.Month.length>0 & user.Day.length>0 & user.Year.length>0 ) setPage((currpage)=>currpage+1);
      alert(user.Name+":"+user.Email)
    }
    else if(page===1){
      setPage((currpage)=>currpage+1);
    }
    else if(page===2){
      verCode=temp_verCode;
      {sendEmailAndVerCode()}
      if(verCode.length>0)setPage((currpage)=>currpage+1);
      // alert(verCode);

    }
    else if(page===3){
      user.Password=temp_user.temp_Password;
      if(user.Password.length>0)window.open("/Home","_self");
      // alert(Password);
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


      </div>  
    </div>
  );
}
export default SignUp;
