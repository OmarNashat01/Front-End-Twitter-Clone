import React from "react";
import TweetPopupCSS from "./TweetPopup.module.css";

import Modal from "react-modal";
import TweetBox from "../../TweetBox/TweetBox";
import TweetBox2 from "../../TweetBox2/TweetBox2";
import ClosebtnNavbar from "./ClosebtnNavbar";

/**
 * Popup Component to view a Modal of a Tweet Submit sBox whenever clicking on a Tweet button
 * @param {funtion} setIsOpen funciton to toggle isOpen
 * @param {boolean} isOpen boolean to check if this Tweet Popup is actually opened or not
 * @param {function} toggleModal function being called when clicked to toggle between opening the Tweet Popup or not
 * @returns {Object}
 */
export default function TweetPopup({
  setIsOpen,
  isOpen,
  toggleModal,
  prop,
  tweet_id,
}) {
  return (
    <div className={TweetPopupCSS.popup_container}>
      {/* <button onClick={toggleModal}>Open modal</button> */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className={TweetPopupCSS.mymodal}
        overlayClassName={TweetPopupCSS.myoverlay}
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <ClosebtnNavbar toggleModal={toggleModal} />
        {prop ? (
          <TweetBox2
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            quote={prop}
            tweet_id={tweet_id}
          />
        ) : (
          <TweetBox setIsOpen={setIsOpen} isOpen={isOpen} />
        )}
      </Modal>
    </div>
  );
}
