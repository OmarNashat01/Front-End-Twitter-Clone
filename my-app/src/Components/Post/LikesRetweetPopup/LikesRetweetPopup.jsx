import React from "react";
import LikesRetweetPopupCSS from "./LikesRetweetPopup.module.css";

import Modal from "react-modal";
import ClosebtnNavbar from "./ClosebtnNavbar"
import SearchCard from "../../SearchFeed/SearchCard/SearchCard";


export default function LikesRetweetPopup({setIsOpen,isOpen,toggleModal,showText,text}) {
  

  return (
    <div className={LikesRetweetPopupCSS.popup_container}>
      {/* <button onClick={toggleModal}>Open modal</button> */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className={LikesRetweetPopupCSS.mymodal}
        overlayClassName={LikesRetweetPopupCSS.myoverlay}
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <ClosebtnNavbar toggleModal={toggleModal} showText={showText} text={text}/>
        <SearchCard about=""/>
        <SearchCard about=""/>
        <SearchCard about=""/>
        <SearchCard about=""/>
        <SearchCard about=""/>
        <SearchCard about=""/>
        <SearchCard about=""/>
        <SearchCard about=""/>
      </Modal>
    </div>
  );
}
