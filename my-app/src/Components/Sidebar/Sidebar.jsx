// importing react and components
import React from "react";
import SidebarOption from "./SidebarOption";

//importing css file
import "./Sidebar.css";

//importing icons
import TwitterIcon from "@mui/icons-material/Twitter";

function Sidebar() {
  return (
    <div className="container-fluid  flex-column position-sticky ">
      <ul className="item-list nav nav-pills flex-column mb-auto vh-100 ">
        <li className="navbar-logo ">
          {/* LOGO */}
          <TwitterIcon fontSize="large" />
        </li>

        <li className="nav-item">
          {/* HOME */}
          <SidebarOption tabName="Home" pageRoute="/" />
        </li>
        <li className="nav-item">
          {/* EXPLORE */}
          <SidebarOption tabName="Explore" pageRoute="/explore" />
        </li>
        <li className="nav-item">
          {/* NOTIFICATIONS */}
          <SidebarOption tabName="Notifications" pageRoute="/notifications" />
        </li>
        <li className="nav-item">
          {/* BOOKMARKS */}
          <SidebarOption tabName="Bookmarks" pageRoute="/bookmarks" />
        </li>
        <li className="nav-item">
          {/* PROFILE */}
          <SidebarOption tabName="Profile" pageRoute="/profile" />
        </li>
        <li className="nav-item">
          {/* TWEET BUTTON*/}
          <button className="btn btn-primary  tweet-btn tweet-btn-small  d-md-block d-xl-none d-lg-none rounded-circle">
            Tweet
          </button>
          <button className="btn btn-primary rounded-pill tweet-btn d-none d-lg-block d-xl-block ">
            Tweet
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
