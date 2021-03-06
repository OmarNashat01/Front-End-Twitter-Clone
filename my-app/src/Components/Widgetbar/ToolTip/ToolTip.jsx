import React from 'react';
import ToolTipCSS from "./ToolTip.module.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

/**
 * ToolTip Component used or shown whenever hovering on any users avatar to show more info about this user
 * 
 * @param {string} name  Name to be viewed of a user that is being hovered on
 * @param {string} tag Tag of the user to be viewed under the name that is being hovered on
 * @param {string} img image of the user in the ToolTip
 * @param {string} about Bio of the User
 * @param {int} followers Number of followers of user 
 * @param {int} following Number of followings user do follow
 * @param {string} show a string whether to show the tooltip left or right of the user avatar
 * @returns {Object}
 */
function ToolTip(
    {
        name= "Ahmed El Saka",
        tag= "@ElSAKA",
        img="https://media.elcinema.com/uploads/_315x420_2268328b39ea214e6ed4d52eb7e1ef3a4d600c27dc40aecc08d937effc307389.jpg",
        about="http://facebook.com/ahmedelsakaeg            instagram :: ahmedelsakaeg",
        followers= 3800,
        following= 5105,
        show="displayLeft",
        user_id="1",
    }
) {

    function navProfile() {
        window.open(`/user/${user_id}`, "_self");
      }
    
  return (
    <div className={ToolTipCSS.tooltip}>
            <IconButton className={ToolTipCSS.tooltip__icon} onClick={navProfile}>
                <Avatar  src={img} style={{width: "45px",height: "45px"}}/>
            </IconButton>
            <span className={ToolTipCSS.tooltiptext}  id={show === "displayRight" ? ToolTipCSS.displayRight: ToolTipCSS.displayLeft}>

                <div className={ToolTipCSS.toolbtn_container}>
                    <IconButton className={ToolTipCSS.tooltip__icon} onClick={navProfile}>
                        <Avatar  src={img} style={{width: "60px",height: "60px"}}/>
                    </IconButton>
                    <div className={ToolTipCSS.followbtn__container}>
                        <button type="submit" className={ToolTipCSS.followbtn}>
                        <span>Follow</span>
                        </button>
                    </div>
                </div>
                <div className={ToolTipCSS.middlepart_1}>
                <p className={ToolTipCSS.name}>{name}</p>
                <VerifiedUserIcon className={ToolTipCSS.account__badge} />
                </div>
                <p className={ToolTipCSS.tag}>{tag}</p>
                <p className={ToolTipCSS.about}>{about}</p>
                <div className={ToolTipCSS.followers__container}>
                    <div className={ToolTipCSS.following__container}>
                        <p className={ToolTipCSS.followingNumber}>{following} </p>
                        <p className={ToolTipCSS.tag}>Following</p>
                    </div>
                    <div className={ToolTipCSS.followernumber__container}>
                        <p className={ToolTipCSS.followersNumber}>{followers} </p>
                        <p className={ToolTipCSS.tag}>Followers</p>
                    </div>
                </div>
            </span>
        </div>
  )
}

export default ToolTip