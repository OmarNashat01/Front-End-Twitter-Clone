import React from "react";
import TweetPopupCSS from "./TweetPopup.module.css";

import Modal from "react-modal";
import TweetBox from "../../TweetBox/TweetBox";
import ClosebtnNavbar from "./ClosebtnNavbar"


export default function TweetPopup({setIsOpen,isOpen,toggleModal}) {
  

  return (
    <div className={TweetPopupCSS.popup_container}>
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className={TweetPopupCSS.mymodal}
        overlayClassName={TweetPopupCSS.myoverlay}
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <ClosebtnNavbar toggleModal={toggleModal}/>
        <TweetBox setIsOpen={setIsOpen} isOpen={isOpen}/>
      </Modal>
    </div>
  );
}
