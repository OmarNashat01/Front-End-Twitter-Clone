import React from 'react'
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SearchCardCSS from "./SearchCard.module.css";
import ToolTip from "./../../Widgetbar/ToolTip/ToolTip";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

function SearchCard({
    name= "Ahmed El Saka",
    tag= "ElSAKA",
    img="https://media.elcinema.com/uploads/_315x420_2268328b39ea214e6ed4d52eb7e1ef3a4d600c27dc40aecc08d937effc307389.jpg",
    about="http://facebook.com/ahmedelsakaeg            instagram :: ahmedelsakaeg",
    followers= 3800,
    following= 5105,
    verified=true,
   }) {
  return (
        <div className={SearchCardCSS.searchcard}>
            <ToolTip name={name} tag={tag} img ={img} about={about} followers={followers} following={following}  show="displayRight"/>
            <div className={SearchCardCSS.middlepart}>
                <div className={SearchCardCSS.middlepart_1}>
                    <p className={SearchCardCSS.name}>{name}</p>
                    {verified &&
                    <VerifiedUserIcon className={SearchCardCSS.account__badge} />
                    }
                </div>
                <p className={SearchCardCSS.tag}>@{tag}</p>
                <div className={SearchCardCSS.about__container}>
                <p>{about}</p>
            </div>
            </div>
            <div className={SearchCardCSS.followbtn__container}>
                <button type="submit" className={SearchCardCSS.followbtn}>
                <span>Follow</span>
                </button>
            </div >
        </div>
  )
}

export default SearchCard