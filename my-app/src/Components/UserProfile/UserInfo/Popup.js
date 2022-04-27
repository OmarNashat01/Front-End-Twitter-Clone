import Button from "react-bootstrap/Button";
import React from "react";
import PopCSS from "./Popup.module.css";

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import cov from "../../../assets/cov.jpg";
import pro from "../../../assets/pro.jpg";
import CloseButton from "react-bootstrap/CloseButton";
import { useState, useEffect } from "react";
import { getMe } from "../../../Api/UserProfile";
import { requirePropFactory } from "@mui/material";



function Popup(props) {

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState();

    useEffect(() => {

        const getCurrentUser = async() => {
            const data = await getMe(setLoading, setUserData);
        }
        getCurrentUser();

    }, []);


    return props.trigger ? (


        <
        div className = { PopCSS.popupProfile } >
        <
        div className = { PopCSS.popupinProfile } >
        <
        CloseButton variant = "dark"
        className = { PopCSS.innerPro1 }
        onClick = {
            () => props.setTrigger(false)
        }
        />{" "} <
        h className = { PopCSS.edit } >
        Edit Profile <
        /h> <
        Button variant = "dark"
        className = { PopCSS.innerPro }
        onClick = {
            () => props.setTrigger(false)
        } >
        Save { " " } <
        /Button>

        <
        div >

        <
        img src = { userData.data.cover_pic_url }
        alt = "pic"
        className = "img-fluid "
        className = { PopCSS.cover }
        / > < /
        div > <
        div >
        <
        img src = { userData.data.prof_pic_url }
        alt = "pic"
        className = "img-fluid rounded-circle"
        className = { PopCSS.prof }
        height = { 115 }
        width = { 115 }
        /> < /
        div >

        <
        >
        <
        FloatingLabel controlId = "floatingInput"
        label = "Name"
        className = { PopCSS.name } >
        <
        Form.Control type = "name"
        placeholder = "name@example.com" / >
        <
        /FloatingLabel> <
        FloatingLabel controlId = "floatingPassword"
        label = "Bio"
        className = { PopCSS.bio } >
        <
        Form.Control type = "password"
        placeholder = "Password" / >
        <
        /FloatingLabel>  <
        FloatingLabel controlId = "floatingPassword"
        label = "Location"
        className = { PopCSS.location } >
        <
        Form.Control type = "password"
        placeholder = "Password" / >
        <
        /FloatingLabel > < / >


        { " " } <
        /div>  


        <
        /div>





    ) : (
        ""
    );
}

export default Popup;