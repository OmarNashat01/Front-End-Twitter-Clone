// importing react and components
import React from "react";
import { useState } from "react";
import SidebarOption from "./SidebarOption";
import TweetPopup from "./TweetPopup/TweetPopup";
import TweetBox from "../TweetBox/TweetBox";

//importing css file
import SidebarStyles from "./Sidebar.module.css";

//importing icons
import TwitterIcon from "@mui/icons-material/Twitter";

function Sidebar() {
  // THE STATE OF THE TWEET POPUP

  const [popupButton, setPopupButton] = useState(false);

  return (
    <div className="container-fluid  flex-column position-sticky ">
      <ul className="item-list nav nav-pills flex-column mb-auto vh-100 ">
        <li className={`${SidebarStyles.navbarLogo} text-start `}>
          {/* LOGO */}
          <TwitterIcon fontSize="large" />
        </li>

        <li className={` ${SidebarStyles.navItem} text-lg-end text-start`}>
          {/* HOME */}
          <SidebarOption tabName="Home" pageRoute="/home" tabIcon="HomeIcon" />
        </li>
        <li className={`${SidebarStyles.navItem} text-lg-end text-start`}>
          {/* EXPLORE */}
          <SidebarOption
            tabName="Explore"
            pageRoute="/explore"
            tabIcon="TagIcon"
          />
        </li>
        <li className={`${SidebarStyles.navItem} text-lg-end text-start`}>
          {/* NOTIFICATIONS */}
          <SidebarOption
            tabName="Notifications"
            pageRoute="/notifications"
            tabIcon="NotificationsIcon"
          />
        </li>
        <li className={`${SidebarStyles.navItem} text-lg-end text-start`}>
          {/* BOOKMARKS */}
          <SidebarOption
            tabName="Bookmarks"
            pageRoute="/bookmarks"
            tabIcon="BookmarkIcon"
          />
        </li>
        <li className={`${SidebarStyles.navItem} text-lg-end text-start`}>
          {/* PROFILE */}
          <SidebarOption
            tabName="Profile"
            pageRoute="/profile"
            tabIcon="PersonIcon"
          />
        </li>
        <li className={`${SidebarStyles.navItem} text-lg-end text-start`}>
          {/* TWEET BUTTON*/}
          <button
            className={`btn btn-primary  ${SidebarStyles.tweetBtn} ${SidebarStyles.tweetBtnSmall}  d-md-block d-xl-none d-lg-none rounded-circle text-center`}
            onClick={() => setPopupButton(true)}
          >
            Tweet
          </button>
          <button
            className={`btn btn-primary rounded-pill ${SidebarStyles.tweetBtn} d-none d-lg-block d-xl-block `}
            onClick={() => setPopupButton(true)}
          >
            Tweet
          </button>
        </li>
      </ul>
      {/* displaying the popup */}

      <TweetPopup trigger={popupButton} setTrigger={setPopupButton}>
        <TweetBox />
      </TweetPopup>
    </div>
  );
}

export default Sidebar;
