import React from "react";
// import "./SidebarOption.css";
// MATERIAL UI ICONS
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";

function test() {
  console.log("click");
}

function SidebarOption(props) {
  return (
    // optionIcon->the name of the used icon
    // optionName->the text displayed beside it
    <button
      type="button"
      onClick={test}
      className=" btn nav-option rounded-pill float-parent-element "
      data-mdb-ripple-color="light"
    >
      <div className="  float-child-element left-child">
        <HomeIcon />
      </div>
      <div className=" tab-text  float-child-element">{props.tabName}</div>
    </button>
  );
}

export default SidebarOption;
