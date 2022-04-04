import React from "react";
// importimg stylesheeet
import "./TweetPopup.css";

// importing icons
import CloseIcon from "@mui/icons-material/Close";

function TweetPopup(props) {
  return props.trigger ? (
    <div className="tweet-popup">
      <div className="popup-inner-content">
        <button
          className=" btn tweet-popup-close-button"
          onClick={() => props.setTrigger(false)}
        >
          <CloseIcon />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default TweetPopup;
