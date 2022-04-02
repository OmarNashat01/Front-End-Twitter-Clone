import React from "react";
import "./SidebarOption.css";
// MATERIAL UI ICONS
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";

//NAVIGATION
import { useNavigate } from "react-router-dom";

function SidebarOption(props) {
  let navigate = useNavigate();

  return (
    // optionIcon->the name of the used icon
    // optionName->the text displayed beside it
    //pageRoute->route of the targeted page

    <button
      type="button"
      onClick={() => {
        navigate(props.pageRoute);
      }}
      className=" btn nav-option rounded-pill float-parent-element "
      data-mdb-ripple-color="light"
    >
      <div className="  float-child-element left-child ">
        <HomeIcon />
      </div>
      <div className=" tab-text  float-child-element d-none d-lg-block d-xl-block">
        {props.tabName}
      </div>
    </button>
  );
}

export default SidebarOption;
