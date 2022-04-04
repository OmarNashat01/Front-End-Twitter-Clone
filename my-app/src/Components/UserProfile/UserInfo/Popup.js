import Button from "react-bootstrap/Button";
import React from 'react';
import "./Popup.css";
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import 'bootstrap/dist/css/bootstrap.css';
import CloseButton from 'react-bootstrap/CloseButton';


function Popup(props) {
    return (props.trigger) ? (



        <
        div className = "popup" >
        <
        div className = "popupin" >
        <
        CloseButton className = "inner1"
        onClick = {
            () => props.setTrigger(false)
        }
        / > <
        Button variant = "outline-secondary"
        className = "inner"
        onClick = {
            () => props.setTrigger(false)
        } >
        Save < /Button>

        { props.children } <
        /div>  < /
        div >
    ) : "";
}

export default Popup;