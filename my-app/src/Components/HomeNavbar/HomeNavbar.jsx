import React from 'react'
import HomeNavbarCSS from "./HomeNavbar.module.css"
function HomeNavbar({text="Home"}) {
  return (
    <div className={HomeNavbarCSS.topNavbar}>
        <p className={HomeNavbarCSS.text}>{text}</p>
    </div>
    
    )
}

export default HomeNavbar