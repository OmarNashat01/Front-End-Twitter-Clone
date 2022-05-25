import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import NotificationCardCSS from "./NotificationCard.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
// import RepeatIcon from "@mui/icons-material/Repeat";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BlockIcon from "@mui/icons-material/Block";

/**
 * Notification Cards that is used in the Notification Feed to display Users that replied/liked/retweeted
 * 
 * @param {string} props.name  Name to be viewed of a user that replied/liked/retweeted in the notification card
 * @param {string} props.tweet_text retweet/reply of the user to be viewed in the notification card 
 * @param {string} props.img image of the user that replied/liked/retweeted
 * @param {string} props.user_id User ID that replied/liked/retweeted
 * @param {string} props.action action written here to display the icon that best describe this action (action = "reply"/"liked"/"retweeted" ) 
 * @returns {Object}
 */
function NotificationCard(props) {
  function navProfile() {
    window.open(`/user/${props.user_id}`, "_self");
  }
  return (
    <div className={NotificationCardCSS.searchcard}>
      <div className={NotificationCardCSS.tooltip}>
        {props.action === "block" && (
          <BlockIcon className={NotificationCardCSS.block__icon} />
        )}
        {props.action === "like" && (
          <FavoriteIcon className={NotificationCardCSS.heart__icon} />
        )}
        {props.action === "reply" && (
          <ChatBubbleOutlineIcon className={NotificationCardCSS.reply__icon} />
        )}
      </div>
      <div className={NotificationCardCSS.middlepart}>
        <div className={NotificationCardCSS.tooltip}>
          <IconButton className={NotificationCardCSS.tooltip__icon}>
            <Avatar src={props.img} style={{ width: "38px", height: "38px" }} />
          </IconButton>
        </div>
        <div className={NotificationCardCSS.middlepart_1}>
          <p className={NotificationCardCSS.name}>{props.name} </p>
          <p className={NotificationCardCSS.liketweet__text}>
            &nbsp;liked your Tweet
          </p>
        </div>
        <p className={NotificationCardCSS.tweet__text}>{props.tweet_text}</p>
      </div>
    </div>
  );
}

export default NotificationCard;
