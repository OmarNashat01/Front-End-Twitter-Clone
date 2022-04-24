import react from "react";

import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabCSS from "./Tab.module.css";

const Tabss = () => {
    return ( <
        div >
        <
        nav className = { TabCSS.alltab } >
        <
        a className = { TabCSS.tabs } >
        Tweets < /a> <
        a href = "profile/with_replies"
        className = { TabCSS.tabs } > Tweets & replies < /a> <
        a href = "profile/media"
        className = { TabCSS.tabs } > Media < /a> <
        a href = "profile/likes"
        className = { TabCSS.tabs } > Likes < /a> < /
        nav >

        <
        div > < hr className = { TabCSS.hr }
        / > < /div >

        <
        /div >
    );
};
export default Tabss;