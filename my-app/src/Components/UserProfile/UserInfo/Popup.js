import Button from "react-bootstrap/Button";
import React from "react";
import PopCSS from "./Popup.module.css";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import cov from "../../../assets/cov.jpg";
import pro from "../../../assets/pro.jpg";
import CloseButton from "react-bootstrap/CloseButton";
import { useState, useEffect } from "react";
import { getMe, putUpdateUser } from "../../../Api/UserProfile";
import { requirePropFactory } from "@mui/material";
import { CFormFloating } from '@coreui/react'

function Popup(props) {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [verLoadingData, setVerLoadingData] = useState(true);
    const [verifyData, setVerifyData] = useState();
    useEffect(() => {
        const getCurrentUser = async() => {
            const data = await getMe(setLoading, setUserData);
        };
        getCurrentUser();
    }, []);


    // const sendData = async() => {
    //     let requestBody = {
    //         email: user.Email,
    //         password: user.Password,
    //         name: user.Name,
    //         date_of_birth: `${user.Year}-${user.Month}-${user.Day}`,
    //         gender: "M",
    //         username: user.username,
    //         bio: null,
    //         location: null,
    //         website: null,
    //     };
    //     let resul = await putUpdateUser(
    //         setVerLoadingData,
    //         setVerifyData,
    //         requestBody
    //     );
    // };

    // const checkDataSent = () => {
    //     // console.log(verifyData.status);

    //     if (
    //         user.username.length > 0 &&
    //         verifyData.status === 200 /*&& verifyLogin.status===200*/
    //     ) {
    //     } 
    // };


    return props.trigger ? ( <
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
        h className = { PopCSS.edit } > Edit Profile < /h>{" "} <
        Button variant = "dark"
        className = { PopCSS.innerPro }
        onClick = {
            () => props.setTrigger(false)
        } >
        Save { " " } <
        /Button> <
        div >
        <
        img src = { userData.data.user.cover_pic_url }
        alt = "pic"
        className = "img-fluid "
        className = { PopCSS.cover }
        />{" "} < /
        div > { " " } <
        div >
        <
        img src = { userData.data.user.prof_pic_url }
        alt = "pic"
        className = "img-fluid rounded-circle"
        className = { PopCSS.prof }
        height = { 115 }
        width = { 115 }
        />{" "} < /
        div > <
        >
        <
        FloatingLabel keyboardType = 'default'
        valueDefault = " default value"
        controlId = "floatingPassword"
        label = "Name"
        className = { PopCSS.name } >
        <
        input type = "email"
        class = "form-control"
        id = "floatingInputValue"
        placeholder = "name@example.com"
        value = { userData.data.user.name }
        / > < /
        FloatingLabel >

        <
        FloatingLabel keyboardType = 'default'
        valueDefault = " default value"
        controlId = "floatingPassword"
        label = "Bio"
        className = { PopCSS.bio } >
        <
        input type = "email"
        class = "form-control"
        id = "floatingInputValue"
        placeholder = "name@example.com"
        value = { userData.data.user.bio }
        / > < /
        FloatingLabel > { " " } <
        FloatingLabel controlId = "floatingPassword"
        label = "Location"
        className = { PopCSS.location } >
        <
        input type = "email"
        class = "form-control"
        id = "floatingInputValue"
        placeholder = "name@example.com"
        value = { userData.data.user.location }
        / > <
        /FloatingLabel>{" "} < / > { " " } <
        /div> < /
        div >
    ) : (
        ""
    );
}

export default Popup;