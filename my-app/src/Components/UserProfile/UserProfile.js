import React from "react";
import Auxelary from "../../hoc/Auxelary";
import Bio from "./UserInfo/Bio";
import Tabss from "./UserInfo/Tabs";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./UserInfo/Header";
import "./UserProfile.css";
import Popup from "./UserInfo/Popup";
import Image from 'react-bootstrap/Image';
import cov from "../../assets/cov.jpg";
import pro from "../../assets/pro.jpg";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

console.log("classes")
const UserProfile = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return ( < Auxelary >
        <
        Container >

        <
        Row >
        <
        Col > < /Col> <
        Col xs = { 6 } >

        <
        Header >
        <
        /Header>  <
        div >

        <
        img src = { cov }
        alt = "pic"
        className = "img-fluid "

        /
        >
        <
        /div> 

        <
        div className = "ProfilePic" >
        <
        img src = { pro }
        alt = "pic"
        className = "img-fluid rounded-circle"

        height = { 150 }
        width = { 150 }



        / >  < /
        div > <
        br / >
        <
        div className = "UserName" >
        SaraAbdo < /div>        <
        div className = "UserNamePro" > @username < /div>    <
        Bio > kkk < /Bio>   <
        Button variant = "outline-secondary"
        className = "Btn"
        onClick = {
            () => setButtonPopup(true)
        } >
        Edit Profile < /Button > { ' ' } <
        Tabss > < /Tabss> 

        <
        Popup trigger = { buttonPopup }
        setTrigger = { setButtonPopup } >
        <
        h3 > Edit Profile < /h3> < /
        Popup >

        <
        /Col> <
        Col > < /Col> < /
        Row >

        <
        /
        Container > < /
        Auxelary > )

}
export default UserProfile;