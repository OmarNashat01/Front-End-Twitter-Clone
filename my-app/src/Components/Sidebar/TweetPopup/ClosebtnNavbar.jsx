import React from 'react'
import CloseButtonCSS from "./ClosebtnNavbar.module.css"
import { CloseButton } from 'react-bootstrap';

export default function ClosebtnNavbar({toggleModal}) {
  return (
    <div className={CloseButtonCSS.topNavbar}>
      <CloseButton className={CloseButtonCSS.popup_closebtn} onClick={toggleModal}/>
    </div>
  )
}

