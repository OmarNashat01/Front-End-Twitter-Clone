import React from 'react'
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FollowCardCSS from "./FollowCard.module.css";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';



function FollowCard({
    name= "Ahmed El Saka"
    , tag= "@ElSAKA"
    , img="https://media.elcinema.com/uploads/_315x420_2268328b39ea214e6ed4d52eb7e1ef3a4d600c27dc40aecc08d937effc307389.jpg"
    , about="http://facebook.com/ahmedelsakaeg            instagram :: ahmedelsakaeg"
    ,followers= 3800
    ,following= 5105
}) {
  return (
    <div className={FollowCardCSS.followcard}>
        <div className={FollowCardCSS.tooltip}>
            <IconButton className={FollowCardCSS.tooltip__icon}>
                <Avatar src={img} style={{width: "45px",height: "45px",}}/>
            </IconButton>
            <span className={FollowCardCSS.tooltiptext}>

                <div className={FollowCardCSS.toolbtn_container}>
                    <IconButton className={FollowCardCSS.tooltip__icon}>
                        <Avatar src={img} style={{width: "60px",height: "60px",}}/>
                    </IconButton>
                    <div className={FollowCardCSS.followbtn__container}>
                        <button type="submit" className={FollowCardCSS.followbtn}>
                        <span>Follow</span>
                        </button>
                    </div>
                </div>
                <div className={FollowCardCSS.middlepart_1}>
                <p className={FollowCardCSS.name}>{name}</p>
                <VerifiedUserIcon className={FollowCardCSS.account__badge} />
                </div>
                <p className={FollowCardCSS.tag}>{tag}</p>
                <p className={FollowCardCSS.about}>{about}</p>
                <div className={FollowCardCSS.followers__container}>
                    <div className={FollowCardCSS.following__container}>
                        <p className={FollowCardCSS.followingNumber}>{following} </p>
                        <p className={FollowCardCSS.tag}>Following</p>
                    </div>
                    <div className={FollowCardCSS.followernumber__container}>
                        <p className={FollowCardCSS.followersNumber}>{followers} </p>
                        <p className={FollowCardCSS.tag}>Followers</p>
                    </div>
                </div>
            </span>
        </div>
        <div className={FollowCardCSS.middlepart}>
            <div className={FollowCardCSS.middlepart_1}>
                <p className={FollowCardCSS.name}>{name}</p>
                <VerifiedUserIcon className={FollowCardCSS.account__badge} />
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