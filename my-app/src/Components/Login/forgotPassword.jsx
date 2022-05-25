import React, { useState } from "react";
import ReactDom from "react-dom";
import Popup from "./popup.module.css";
import LoginCss from "./Login.module.css";
import { height } from "@mui/system";

import {
  postVerify,
  PostEmailAndVerCode,
  PostNewPassword,
} from "../../Api/forgotPassword";
import { Password } from "@mui/icons-material";

function ForgotPasswordPage(props) {
  const [Email, setEmail] = useState("");
  const [btnState, setBtnState] = useState(true);
  const [OTP, setOTP] = useState(0);
  const [NewPassword, setNewPassword] = useState(0);

  const [page, setPage] = useState(0);

  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const [verify, setVerify] = useState();
  const [verLoading, setVerLoading] = useState(true);

  const [verLoadingIDandEmail, setVerLoadingIDandEmail] = useState(true);
  const [verifyIDandEmail, setVerifyIDandEmail] = useState();

  const [verLoadingNewPassword, setVerLoadingNewPassword] = useState(true);
  const [verifyNewPassword, setVerifyNewPassword] = useState();

  //api funs///////////////////////////////////
  /// 1 /////
  const sendEmail = async () => {
    let requestBody = {
      email: Email,
    };
    let resul = await postVerify(setVerLoading, setVerify, requestBody);
  };
  const checkEmailSent = () => {
    if (page === 0 && verify !== undefined) {
      if (verify.status === 200) {
        setPage(1);
      } else {
        setErrorMessage1("User not found");
      }
    }
  };
  /// 2 ///////send email and verication
  const sendEmailAndVerCode = async () => {
    //console.log(user.Email);
    let resul2 = await PostEmailAndVerCode(
      setVerLoadingIDandEmail,
      setVerifyIDandEmail,
      `?OTP=${OTP}&email=${Email}`
    );
  };
  const checkVer = () => {
    if (page === 1 && OTP !== undefined) {
      if (OTP.length > 0 && verifyIDandEmail.status === 200) {
        setPage((currpage) => currpage + 1);
        setVerLoadingIDandEmail(true);
      } else {
        setErrorMessage2("Verification code Expired");
        setVerLoadingIDandEmail(true);
      }
    }
  };
  /// 3 ///////send new password
  const sendNewPassword = async () => {
    //console.log(user.Email);
    let requestBody = {
      email: Email,
      password: NewPassword,
    };
    let resul3 = await PostNewPassword(
      setVerLoadingNewPassword,
      setVerifyNewPassword,
      requestBody
    );
  };
  const checkNewPasswordSent = () => {
    if (page === 0 && verifyNewPassword !== undefined) {
      if (true) {
        // window.open("/Home", "_self");
        console.log("xx" + verifyNewPassword);
      }
    }
  };

  //////////////////////////////////////////////

  //Temp funs/////////////////////////////////
  function EmailStageBTN() {
    sendEmail();
    checkEmailSent();
    // setPage(1);
  }
  function OtpStageBTN() {
    sendEmailAndVerCode();
    checkVer();
    // setPage(2);
  }

  function NewPasswordStageBTN() {
    // console.log(Email + " " + OTP + " " + NewPassword);
    sendNewPassword();
    console.log(verifyNewPassword);
    // checkNewPasswordSent();
    // window.open("/Home", "_self");
  }

  function getVerCode(val) {
    setOTP(val.target.value);
  }
  function getNewPassword(val) {
    setNewPassword(val.target.value);
  }
  //////////////////////////////////////////////

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
          <div className={Popup.errorMessage}>{errorMessage1}</div>

          <div className={Popup.FPbtn}>
            <button
              type="button"
              className="updatedBtn btn btn-dark"
              id={LoginCss.updatedBtn}
              style={{ width: "100%", height: "50px", marginTop: "30px" }}
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
                type={"password"}
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
    // console.log(Email.length);
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
