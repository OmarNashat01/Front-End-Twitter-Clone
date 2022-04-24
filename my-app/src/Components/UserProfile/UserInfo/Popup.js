import Button from "react-bootstrap/Button";
import React from "react";
import PopCSS from "./Popup.module.css";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import cov from "../../../assets/cov.jpg";
import pro from "../../../assets/pro.jpg";
import CloseButton from "react-bootstrap/CloseButton";

function Popup(props) {

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
        img src = { cov }
        alt = "pic"
        className = "img-fluid "
        className = { PopCSS.cover }
        / > < /
        div > <
        div >
        <
        img src = { pro }
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
    ); >>>
    >>> > Stashed changes
}

export default Popup;