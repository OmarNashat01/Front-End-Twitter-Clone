import React from 'react'
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FollowCardCSS from "./FollowCard.module.css";
import ToolTip from "./../ToolTip/ToolTip";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

/**
 * Follow Cards that is used in the Widget Bar to display Users that could be followed
 * 
 * @param {string} name  Name to be viewed of a user that in the Follow card
 * @param {string} tag Tag of the user to be viewed under the name in the Follow card 
 * @param {string} img image of the user in the Follow Card
 * @param {string} about Bio of the User
 * @param {int} followers Number of followers of user 
 * @param {int} following Number of followings user do follow
 * @param {boolean} verified boolean if a user is verified
 * @returns {Object}
 */
function FollowCard({
    name= "Ahmed El Saka",
    tag= "@ElSAKA",
    img="https://media.elcinema.com/uploads/_315x420_2268328b39ea214e6ed4d52eb7e1ef3a4d600c27dc40aecc08d937effc307389.jpg",
    about="http://facebook.com/ahmedelsakaeg            instagram :: ahmedelsakaeg",
    followers= 3800,
    following= 5105,
    verified=true,
}) {
  return (
    <div className={FollowCardCSS.followcard}>
        <ToolTip name={name} tag={tag} img ={img} about={about} followers={followers} following={following} />
        <div className={FollowCardCSS.middlepart}>
            <div className={FollowCardCSS.middlepart_1}>
                <p className={FollowCardCSS.name}>{name}</p>
                {verified &&
                <VerifiedUserIcon className={FollowCardCSS.account__badge} />
                }
            </div>
            <p className={FollowCardCSS.tag}>{tag}</p>
        </div>
        <div className={FollowCardCSS.followbtn__container}>
            <button type="submit" className={FollowCardCSS.followbtn}>
            <span>Follow</span>
            </button>
        </div>
        
    </div>
  )
}

export default FollowCard