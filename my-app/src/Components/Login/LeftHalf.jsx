import React from "react";
import LoginCss from "./Login.module.css"

function LeftHalf() {
  return (
    <div className={LoginCss.LeftHalf}>
      <img className={LoginCss.twitterBigImg} src="/static/twitter.jpg" alt="imge of twitter" />
    </div>
  );
}

export default LeftHalf;
