import React, { useState } from "react";
import ReactDom from "react-dom";
import Popup from "./popup.module.css";
import LoginCss from "./Login.module.css";
import axios from "axios";
import { postEmailAndPassword } from "../../Api/SignUp";
import md5 from "md5";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Visibility } from "@mui/icons-material";
library.add(faEye, faEyeSlash);

var Email;
var Password;

var encryptedPassword;

var emailNotExist = true;

function getPassword(val) {
  Password = val.target.value;
  encryptedPassword = md5(Password);
}

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);
  const Icon = (
    <FontAwesomeIcon
      icon={visible ? "eye" : "eye"}
      onClick={() => setVisibility((Visibility) => !Visibility)}
    />
  );

  const tempInputType = visible ? "text" : "password";
  return [tempInputType, Icon];
};

function SignIn(props) {
  const [page, setPage] = useState(0);
  const FormTitles = ["Next", "Log in", "Log in"];

  const [passwordInputType, toggleIcon] = usePasswordToggle();

  const [verLoading, setVerLoading] = useState(true);
  const [verify, setVerify] = useState();

  const [emailLength, setEmailLength] = useState(0);
  const [nextBtn, setNextBtn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  function getEmail(val) {
    Email = val.target.value;
    setEmailLength(Email.length);

    if (emailLength > 1) {
      setNextBtn(false);
    } else {
      setNextBtn(true);
    }
  }

  const GoToGetPasswordStep = () => {
    if (emailLength > 0) {
      setPage((currpage) => currpage + 1);
    }
  };

  const sendEmail = async () => {
    let requestBody = {
      email: Email,
      password: Password,
      device_token: "test_token",
    };
    let resul = await postEmailAndPassword(
      setVerLoading,
      setVerify,
      requestBody
    );

    //console.log(verify.status);
  };

  const loadData = () => {
    if (verify.status === 201) {
      localStorage.setItem("token", verify.data.token);
      localStorage.setItem("user_id", verify.data._id);
      localStorage.setItem("admin", verify.data.admin);

      window.open("/home", "_self");

      if (localStorage.getItem("admin") === "true") {
        window.open("/adminhome", "_self");
      }
    } else if (verify.status === 400) {
      setErrorMessage("incorrect password");
    } else if (verify.status === 404) {
      setErrorMessage("email doesn't exist");
    } else if (verify.status === 500) {
      setErrorMessage("Please enter password");
    }
    console.log("second");
  };
  const GoToHome = async () => {
    sendEmail();
    // await timeout(1000);
    loadData();
  };

  const EmailStage = () => {
    return (
      <div className={Popup.FirstSignupPopup}>
        <button
          type="button"
          className="btn-close btn-close-black"
          id={Popup.closeBtn}
          aria-label="close"
          onClick={() => {
            window.open("/", "_self");
          }}
        ></button>
        <div id={Popup.signinLayout}>
          <i className="fa-brands fa-twitter" id={LoginCss.twitterIcon}></i>

          <h2 className={Popup.signInToTwitter}>Sign in to Twitter</h2>

          <button
            type="button"
            className="updatedBtn btn btn-light custom-style"
            id={LoginCss.updatedBtn}
          >
            <img
              className={LoginCss.iconImg}
              src="https://img.icons8.com/color/20/000000/google-logo.png"
            />
            Sign up with Google
          </button>

          <button
            type="button"
            className="updatedBtn btn btn-light"
            id={LoginCss.updatedBtn}
          >
            <i className="bi bi-apple"></i>
            <img
              className={LoginCss.iconImg}
              src="https://img.icons8.com/ios-glyphs/20/000000/mac-os.png"
            />
            Sign up with Apple
          </button>

          <div className={LoginCss.line}>
            <div className={LoginCss.or}> or </div>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="inputTxt form-control"
              id={("floatingInput", "phoneOrEmail", Popup.txtArea)}
              placeholder="Phone, email, or username"
              onChange={getEmail}
            ></input>
            <label
              className="floatinTxt"
              id={Popup.txtAreaTxt}
              htmlFor="floatingInput"
            >
              Phone, email, or username
            </label>
          </div>
          {/* {this.state.errorMessage} */}

          <button
            type="button"
            className="updatedBtn btn btn-dark"
            id={LoginCss.updatedBtn}
            disabled={nextBtn}
            onClick={() => {
              GoToGetPasswordStep();
            }}
          >
            Next
          </button>

          <button
            type="button"
            className="updatedBtn btn btn-light"
            id={LoginCss.updatedBtn}
            onClick={() => {
              window.open("/forgotPassword", "_self");
            }}
          >
            Forget Password
          </button>

          <p className={Popup.HaveNoAccount}>
            Don't have an account?{" "}
            <a className={Popup.SignUpLink} href={"/singup"}>
              Sign up
            </a>{" "}
          </p>

          <div className={Popup.emailNotExist} hidden={emailNotExist}>
            "Sorry we could not find your account."
          </div>
        </div>
      </div>
    );
  };

  const PasswordStage = () => {
    return (
      <div>
        <div className={Popup.FirstSigninPopup}>
          <button
            type="button"
            className="btn-close btn-close-black"
            id={Popup.closeBtn}
            aria-label="close"
            onClick={() => {
              window.open("/", "_self");
            }}
          ></button>

          <i className="fa-brands fa-twitter" id={LoginCss.twitterIcon}></i>

          <h2 className={Popup.signInToTwitter}>Enter your password</h2>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="inputTxt form-control"
              id={"floatingInput"}
              placeholder="Phone, email, or username"
              value={Email}
              disabled={true}
            ></input>
            <label className="floatinTxt" htmlFor="floatingInput">
              email
            </label>
          </div>

          <div className="form-floating">
            <input
              className="inputTxt form-control"
              id={("floatingPassword", Popup.txtArea)}
              type={passwordInputType}
              placeholder="Password"
              onChange={getPassword}
            ></input>
            <span id={Popup.togglePasswordVisibility}>{toggleIcon}</span>

            <label id={Popup.txtAreaTxt} htmlFor="floatingPassword">
              Password
            </label>
          </div>
          {/* error message here */}
          <div className={Popup.errorMessage}>{errorMessage}</div>
        </div>
        <button
          type="button"
          className="updatedBtn btn btn-dark"
          id={Popup.MainLoginBtn}
          onClick={() => {
            GoToHome();
          }}
        >
          Login
        </button>
        {/* {!verLoading && loadData()} */}

        <p className={Popup.HaveNoAccountF}>
          Don't have an account?{" "}
          <a className={Popup.SignUpLink} href={"/singup"}>
            Sign up
          </a>{" "}
        </p>
      </div>
    );
  };

  const PageToDisplay = () => {
    if (page === 0) return <div>{EmailStage()}</div>;
    else if (page === 1) return <div>{PasswordStage()}</div>;
  };

  return (
    <div className={Popup.popup}>
      <div className={Popup.popupInner}>{PageToDisplay()}</div>
      {/* {console.log(verify)} */}
    </div>
  );
}
export default SignIn;
