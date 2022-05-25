import React from 'react'
import HomeNavbarCSS from "./HomeNavbar.module.css"

/**
 * NavBar to be placed at the top of the Home Feed
 * @param {string} text parameter is being inserted here to be view at the top of the navbar  
 * @returns 
 */
function HomeNavbar({text="Home"}) {
  return (
    <div className={HomeNavbarCSS.topNavbar}>
        <p className={HomeNavbarCSS.text}>{text}</p>
    </div>
    
    )
}

export default HomeNavbar