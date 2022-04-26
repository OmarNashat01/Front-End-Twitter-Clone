import React from 'react'
import HomeNavbarCSS from "./HomeNavbar.module.css"
function HomeNavbar() {
  return (
    <div className={HomeNavbarCSS.topNavbar}>
        <p className={HomeNavbarCSS.text}>Home</p>
    </div>
    
    )
}

export default HomeNavbar