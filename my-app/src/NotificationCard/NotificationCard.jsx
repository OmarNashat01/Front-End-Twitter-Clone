import React from 'react'
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import NotificationCardCSS from "./NotificationCard.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

function SearchCard({
    name= "Ahmed El Saka",
    tweet_text= "From likes to Retweets and a whole lot more, this is where all the action happens.",
    img="https://media.elcinema.com/uploads/_315x420_2268328b39ea214e6ed4d52eb7e1ef3a4d600c27dc40aecc08d937effc307389.jpg",
    user_id="1",
   }) {

    function navProfile() {
        window.open(`/user/${user_id}`, "_self");
      }
  return (
        <div className={NotificationCardCSS.searchcard}>
             <div className={NotificationCardCSS.tooltip}>
                    <FavoriteIcon className={NotificationCardCSS.heart__icon} />
            </div>
            <div className={NotificationCardCSS.middlepart}>
                <div className={NotificationCardCSS.tooltip}>
                    <IconButton className={NotificationCardCSS.tooltip__icon} >
                        <Avatar  src={img} style={{width: "38px",height: "38px"}}/>
                    </IconButton>
                </div>
                <div className={NotificationCardCSS.middlepart_1}>
                    <p className={NotificationCardCSS.name}>{name}  </p>
                    <p className={NotificationCardCSS.liketweet__text}>&nbsp;liked your Tweet</p>
                </div>
                <p className={NotificationCardCSS.tweet__text}>{tweet_text}</p>
                
            </div>
        </div>
  )
}

export default SearchCard