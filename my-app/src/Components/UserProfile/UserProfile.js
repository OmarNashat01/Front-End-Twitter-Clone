import React from "react";
import Auxelary from "../../hoc/Auxelary";
import Bio from "./UserInfo/Bio";
import Tabss from "./UserInfo/Tabs";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./UserInfo/Header";
import UserCSS from "./UserProfile.module.css";
import Popup from "./UserInfo/Popup";
import Image from "react-bootstrap/Image";
import cov from "../../assets/cov.jpg";
import pro from "../../assets/pro.jpg";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Following from "./UserInfo/Following";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// console.log("classes");
const UserProfile = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return ( <
        Auxelary >
        <
        Container >
        <
        Header > < /Header>{" "} 

        <
        div >
        <
        img src = { cov }
        alt = "pic"
        className = "img-fluid " / >
        <
        /div> <
        div className = { UserCSS.ProfilePic } >
        <
        img src = { pro }
        alt = "pic"
        className = "img-fluid rounded-circle"
        height = { 140 }
        width = { 140 }
        />{" "} < /
        div > { " " } <
        br / >
        <
        div className = { UserCSS.UserName } > SaraAbdo < /div>{" "} <
        div className = { UserCSS.UserNamePro } > @username < /div> <Bio> kkk </Bio > { " " } <
        Button variant = "outline-dark"
        size = "sm"
        className = { UserCSS.editbutton }
        onClick = {
            () => setButtonPopup(true)
        } >
        Edit Profile { " " } <
        /Button>{" "} <
        Tabss > < /Tabss> <
        Popup trigger = { buttonPopup }
        setTrigger = { setButtonPopup } > { " " } < /
        Popup >
        <
        /Container>{" "} < /
        Auxelary >
    );
};
export default UserProfile;