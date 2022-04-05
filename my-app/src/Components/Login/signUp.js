import React from "react";
import ReactDom from "react-dom";
import "./popup.css"


var userFN;
var loginCred;
var passwordKey;
var month;
var day;
var year;

function triggerInputs(){
  userFN = document.getElementById('userFullName');
  loginCred = document.getElementById('phoneOrEmail');
  passwordKey = document.getElementById('passwordArea');
  month = document.getElementById('selectedMonth');
  day = document.getElementById('selectedDay');
  year = document.getElementById('selectedYear');
  //use alerts for testing
  //alert(userFN.value);
  //alert(loginCred.value);
  //alert(passwordKey.value);
  //alert(year.value);
}

//main function
function SignUp(props){
  return (props.trigger) ? ( 
    <div className="signUp">
      <div className="popup-inner">

        <button type="button" className="btn-close btn-close-white close-btn" aria-label="close" onClick={()=> props.setTrigger(false)}></button>
        <div id="">
        <div className="putInCenter"><i class="fa-brands fa-twitter "></i></div>
          

            
          <h3 className="headline">Create an account with twitter</h3>

          <input className="inputTxt signupButton nameArea" id="userFullName" type={"text"} placeholder="Name"></input>
          <input className="inputTxt signupButton" id="phoneOrEmail" type={"text"} placeholder="Phone or Email"></input>
          <input className="inputTxt signupButton" id="passwordArea" type={"password"} placeholder="Password"></input>
          <h6 className="datePicker">Date of birth</h6>
          {/* <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p> */}

          <select name="Month" className="datePicker month" id="selectedMonth">
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
          <select name="Day" className="datePicker day" id="selectedDay">
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
          <select name="Year" className="datePicker year" id="selectedYear">
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



          <button type="button" class="updatedBtn btn btn-light update-ptn signupPutton" onClick={()=>triggerInputs()} >
            Next
          </button>

        </div>

        {props.children}
      </div>  
    </div>
  ) : ""
}
export default SignUp;
