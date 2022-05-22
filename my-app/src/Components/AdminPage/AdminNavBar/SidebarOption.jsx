import React from "react";
import SidebarOptionStyles from "./SidebarOption.module.css";
// MATERIAL UI ICONS
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import BlockIcon from '@mui/icons-material/Block';
import FiberNewIcon from '@mui/icons-material/FiberNew';
//NAVIGATION
import { useNavigate } from "react-router-dom";

const icons = {};

icons["HomeIcon"] = <HomeIcon className={SidebarOptionStyles.logoColor} />;

icons["PersonIcon"] = <PersonIcon  className={SidebarOptionStyles.logoColor} />;
icons["Retweets"] = <RepeatIcon  className={SidebarOptionStyles.logoColor} />;
icons["Likes"] = <FavoriteIcon  className={SidebarOptionStyles.logoColor} />;
icons["Ban"] = <BlockIcon  className={SidebarOptionStyles.logoColor} />;
icons["New"]=<FiberNewIcon className={SidebarOptionStyles.logoColor} />;
function SidebarOption(props) {
  let navigate = useNavigate();

  return (
    // optionIcon->the name of the used icon
    // optionName->the text displayed beside it
    //pageRoute->route of the targeted page

    <div className={`${SidebarOptionStyles.navButtonContainer}`}>
      <button
        type="button"
        onClick={() => {
          navigate(props.pageRoute);
        }}
        className={` ${SidebarOptionStyles.navButton} btn ${SidebarOptionStyles.navOption} rounded-pill ${SidebarOptionStyles.floatParentElement} d-none d-lg-inline d-xl-inline d-md-none`}
        data-mdb-ripple-color="light"
      >
        <div
          className={`  ${SidebarOptionStyles.floatChildElement} ${SidebarOptionStyles.leftChild} `}
        >
          {icons[props.tabIcon]}
        </div>
        <div
          className={` ${SidebarOptionStyles.tabText}  ${SidebarOptionStyles.floatChildElement} d-none d-lg-block d-xl-block`}
        >
          {props.tabName}
        </div>
      </button>

      <button
        type="button"
        onClick={() => {
          navigate(props.pageRoute);
        }}
        className={`${SidebarOptionStyles.navButtonSmall} btn ${SidebarOptionStyles.navOption} rounded-pill ${SidebarOptionStyles.floatParentElement}  d-sm-inline d-xs-inline d-md-inline d-lg-none text-center`}
        data-mdb-ripple-color="light"
      >
        {icons[props.tabIcon]}
      </button>
    </div>
  );
}

export default SidebarOption;
