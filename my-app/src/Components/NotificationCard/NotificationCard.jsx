import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import NotificationCardCSS from "./NotificationCard.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import RepeatIcon from "@mui/icons-material/Repeat";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function SearchCard(props) {
  function navProfile() {
    window.open(`/user/${props.user_id}`, "_self");
  }
  return (
    <div className={NotificationCardCSS.searchcard}>
      <div className={NotificationCardCSS.tooltip}>
        {props.action === "retweet" && (
          <RepeatIcon className={NotificationCardCSS.retweet__icon} />
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

export default SearchCard;
