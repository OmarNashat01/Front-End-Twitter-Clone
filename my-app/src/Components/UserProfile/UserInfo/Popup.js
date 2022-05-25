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
    const [verLoadingData, seLoadingData] = useState(true);
    const [verifyData, setUpData] = useState();
    useEffect(() => {
        const getCurrentUser = async() => {
            const data = await getMe(setLoading, setUserData);
        };
        getCurrentUser();
    }, []);


    const sendData = async() => {
        let requestBody = {
            email: null,
            password: dat.Password,
            name: dat.Name,
            date_of_birth: null,
            username: null,
            bio: dat.Bio,
            location: dat.Location,
            website: null,
            prof_pic_url: dat.p,
            cover_pic_url: dat.c,
        };
        let resul = await putUpdateUser(
            seLoadingData,
            setUpData,
            requestBody
        );
    };




    // const checkDataSent = () => {
    //     // console.log(verifyData.status);

    //     if (
    //         user.username.length > 0 &&
    //         verifyData.status === 200 /*&& verifyLogin.status===200*/
    //     ) {
    //     } 
    // };
    var dat = {
        Name: "",
        Bio: "",
        Location: "",
        p: "",
        c: "",

    };

    function getName(val) {
        dat.Name = val.target.value;

    }

    function getBio(val) {
        dat.Bio = val.target.value;

    }

    function getLoc(val) {
        dat.Location = val.target.value;

    }

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
            () => {

                sendData();
            }

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
        input type = "text"
        class = "form-control"
        id = "floatingInputValue"
        defaultValue = { userData.data.user.name }
        placeholder = "oname"
        onChange = { getName }

        / > < /
        FloatingLabel >

        <
        FloatingLabel keyboardType = 'default'
        valueDefault = " default value"
        controlId = "floatingPassword"
        label = "Bio"
        className = { PopCSS.bio } >
        <
        input type = "text"
        class = "form-control"
        id = "floatingInputValue"
        defaultValue = { userData.data.user.bio }
        placeholder = "name@example.com"
        onChange = { getBio }
        / > < /
        FloatingLabel > { " " } <
        FloatingLabel controlId = "floatingPassword"
        label = "Location"
        className = { PopCSS.location } >
        <
        input type = "text"
        class = "form-control"
        id = "floatingInputValue"
        defaultValue = { userData.data.user.location }
        placeholder = "name@example.com"
        onChange = { getLoc }
        / > < /
        FloatingLabel > { " " } < / > { " " } < /
        div > < /
        div >
    ) : (
        ""
    );
}

export default Popup;