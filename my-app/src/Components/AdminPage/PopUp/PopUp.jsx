import React, { useState } from "react";
import { Modal,ModalHeader } from 'react-bootstrap';
import DropDown from "./DropDown";
import BlockIcon from '@mui/icons-material/Block';
//import Modal from "react-modal";
import PopUpStyle from "./PopUpStyle.module.css"
import { color } from "@mui/system";
const PopUp=(props)=>{
    const {isOpened,setOpen}= props;
        function toggleModal() {
          isOpened=!isOpened;
          }
      const toggle=()=>{
          setShow(false);
          setOpen(false);
      }
     let title="Period"
const [show,setShow]=useState(isOpened);
const [period,setPeriod]=useState("");
const BanHander=()=>{
console.log("poping me");
console.log(period);
}
   return( <Modal show={show} onHide={toggle}   aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header closeButton>
        {/* <BlockIcon sx={{ fontSize:28}}/> */}
          <Modal.Title>Ban Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <div  className={PopUpStyle.textStyle}>Select ban period</div>
      <div> 
          <DropDown setPeriod={setPeriod}/>
    </div> 

        </Modal.Body>
        <Modal.Footer >
      
        <button type="button" class="btn btn-danger" onClick={BanHander}>Ban</button>
        </Modal.Footer>
      </Modal>
//     const {isOpened}= props;
//     function toggleModal() {
//       isOpened=!isOpened;
//       }
//       console.log("from pop");
//       console.log(isOpened);

// return(
//     <Modal
//    isOpen={isOpened}
//    onRequestClose={toggleModal}
//     contentLabel="My dialog"
//    //className="mymodal"
//     overlayClassName={PopUpStyle.myoverlay}
//     >

// <div>My modal dialog.</div>
//   </Modal>



);


}
export default PopUp