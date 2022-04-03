import { Button } from 'bootstrap';
import React from 'react';
import './Popup.css';
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
        div className = "popupin" > < /div>  <
        CloseButton onClick = {
            () => props.setTrigger(false)
        }
        / > <
        button className = "inner"
        onClick = {
            () => props.setTrigger(false)
        } >
        Save < /button>

        { props.children } <
        /div>
    ) : "";
}

export default Popup;