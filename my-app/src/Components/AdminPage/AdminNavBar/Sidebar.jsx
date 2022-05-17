// importing react and components
import React from "react";

import SidebarOption from "./SidebarOption";


//importing css file
import SidebarStyles from "./Sidebar.module.css";

//importing icons
import TwitterIcon from "@mui/icons-material/Twitter";

function Sidebar() {
  // THE STATE OF THE TWEET POPUP



  return (
    <div className={`container-fluid  flex-column position-sticky `} >
      <ul className={`item-list nav nav-pills flex-column mb-auto vh-100 ${SidebarStyles.barWidth} `}>
        <li className={`${SidebarStyles.navbarLogo} text-start `}>
          {/* LOGO */}
          <TwitterIcon fontSize="large" />
        </li>

        <li className={` ${SidebarStyles.navItem} text-lg-end text-start`}>
          {/* HOME */}
          <SidebarOption tabName="Home" pageRoute="/adminhome" tabIcon="HomeIcon" />
        </li>
       
        <li className={`${SidebarStyles.navItemTwo} text-lg-end text-start`}>
          {/* Admin Search */}
          <SidebarOption
            tabName="Search Users"
            pageRoute="/adminsearch"
            tabIcon="PersonIcon"
          />
        </li>
  
        <li className={`${SidebarStyles.navItemTwo} text-lg-end text-start`}>
          {/* Admin Retweets */}
          <SidebarOption
            tabName="Retweets"
            pageRoute="/retweets"
            tabIcon="Retweets"
          />
        </li>
        <li className={`${SidebarStyles.navItemTwo} text-lg-end text-start`}>
          {/* Admin Retweets */}
          <SidebarOption
            tabName="  Likes"
            pageRoute="/likes"
            tabIcon="Likes"
          />
        </li>
  
      </ul>
      {/* displaying the popup */}

    
    </div>
  );
}

export default Sidebar;
