import React, { useEffect } from "react";
import LoginCss from "./Login.module.css"
import Footer from "./Footer";
import RightHalf from "./rightHalf";
import LeftHalf from "./LeftHalf";

function Login() {
  return (
      <div className="row" id={LoginCss.HomePage}>  
        <div className="col-lg-7 col-md-12 col-sm-12 order-lg-1 order-md-2 order-sm-2 order-2" id={LoginCss.LeftHalfDiv}>
          <LeftHalf  />
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 order-lg-2 order-md-1 order-sm-1 order-1" id={LoginCss.RightHalfDiv}>
          <RightHalf />
        </div>
        <div className="col-12 order-lg-3 order-md-3 order-sm-3 order-3">
          <Footer  />
        </div>
      </div>
  );
}

export default Login;
