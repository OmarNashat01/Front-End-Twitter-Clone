import React, { useState } from "react";
import ReactDom from "react-dom";
import Popup from "./popup.module.css";
import LoginCss from "./Login.module.css";
import { height } from "@mui/system";

function ForgotPasswordPage(props) {
  const [Email, setEmail] = useState("");
  const [btnState, setBtnState] = useState(true);
  const [OTP, setOTP] = useState(0);
  const [NewPassword, setNewPassword] = useState(0);

  const [page, setPage] = useState(0);

  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  //Temp funs/////////////////////////////////
  function EmailStageBTN() {
    setPage(1);
  }
  function OtpStageBTN() {
    setPage(2);
  }

  function NewPasswordStageBTN() {
    console.log(Email + " " + OTP + " " + NewPassword);
  }

  function getVerCode(val) {
    setOTP(val.target.value);
  }
  function getNewPassword(val) {
    setNewPassword(val.target.value);
  }

  const EmailStage = () => {
    return (
      <div>
        <button
          type="button"
          className="btn-close btn-close-black"
          id={Popup.closeBtn}
          aria-label="close"
          onClick={() => {
            window.open("/", "_self");
          }}
        ></button>
        <div id={Popup.FPLayouts}>
          <i className="fa-brands fa-twitter" id={LoginCss.twitterIcon}></i>

          <p className={Popup.findYourTwitterFP}>Find your Twitter account</p>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="inputTxt form-control"
              id={("floatingInput userFullName", Popup.txtArea)}
              placeholder="Enter your Phone, email, or username"
              onChange={getEmail}
            ></input>
            <label
              className="floatinTxt"
              id={Popup.txtAreaTxt}
              htmlFor="floatingInput"
            >
              Enter your email, phone number, or username
            </label>
          </div>

          <div className={Popup.FPbtn}>
            <button
              type="button"
              className="updatedBtn btn btn-dark"
              id={LoginCss.updatedBtn}
              style={{ width: "100%", height: "50px" }}
              onClick={EmailStageBTN}
              disabled={btnState}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  };

  const verStep = () => {
    return (
      <div className={Popup.FirstSignupPopup}>
        {/* <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button> */}

        <div className={Popup.putInCenter}>
          <i className="fa-brands fa-twitter " id={Popup.twitterIcon}></i>
        </div>
        <h3 className={Popup.headline}>We sent you a code</h3>
        <div className={Popup.txtAskVer}>
          Enter it below to verify your account.
        </div>

        <div>
          <div className="form-floating mb-3">
            <input
              type={"text"}
              className="inputTxt form-control signupButton nameArea"
              id={("floatingInput phoneOrEmail", Popup.txtArea)}
              placeholder="Verification code"
              onChange={getVerCode}
            ></input>
            <label
              className="floatinTxt"
              id={Popup.txtAreaTxt}
              htmlFor="floatingInput"
            >
              Verification code
            </label>
          </div>
          <div className={Popup.errorMessage}>{errorMessage2}</div>
        </div>
        <div className={Popup.FPbtn}>
          <button
            type="button"
            className="updatedBtn btn btn-dark"
            id={LoginCss.updatedBtn}
            style={{ width: "100%", height: "50px" }}
            onClick={OtpStageBTN}
            disabled={btnState}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const NewPasswordStep = () => {
    return (
      <div className={Popup.FirstSignupPopup}>
        {/* <button type="button" className="btn-close btn-close-black close-btn" id={Popup.closeBtn} aria-label="close" onClick={() =>{ window.open("/","_self")}}></button> */}

        <div className={Popup.putInCenter}>
          <i className="fa-brands fa-twitter " id={Popup.twitterIcon}></i>
        </div>
        <h3 className={Popup.headline}>Confermation of Password.</h3>
        <div className={Popup.txtAskVer}>Enter New Password.</div>

        <div>
          <div>
            <div className="form-floating mb-3">
              <input
                type={"text"}
                className="inputTxt form-control signupButton nameArea"
                id={("floatingInput phoneOrEmail", Popup.txtArea)}
                placeholder="Verification code"
                onChange={getNewPassword}
              ></input>
              <label
                className="floatinTxt"
                id={Popup.txtAreaTxt}
                htmlFor="floatingInput"
              >
                Enter your new password
              </label>
            </div>
            <div className={Popup.errorMessage}>{errorMessage2}</div>
          </div>
        </div>
        <div className={Popup.FPbtn}>
          <button
            type="button"
            className="updatedBtn btn btn-dark"
            id={LoginCss.updatedBtn}
            style={{ width: "100%", height: "50px" }}
            onClick={NewPasswordStageBTN}
            disabled={btnState}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  function getEmail(val) {
    setEmail(val.target.value);
    if (Email.length > 1) {
      setBtnState(false);
    } else {
      setBtnState(true);
    }
    console.log(Email.length);
  }

  const PageToDisplay = () => {
    if (page === 0) return <div>{EmailStage()}</div>;
    else if (page === 1) return <div>{verStep()}</div>;
    else if (page === 2) return <div>{NewPasswordStep()}</div>;
  };

  return (
    <div className={Popup.popup}>
      <div className={Popup.popupInner}>{PageToDisplay()}</div>
    </div>
  );
}
export default ForgotPasswordPage;
