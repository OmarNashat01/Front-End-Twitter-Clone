import React from 'react'
import LoaderCSS from "./Loader.module.css"
/**
 *  This is a Loader to be viewed when posts is currently being retreived from the backend to indicate for the user there is something being retreived    
 * @returns {Object}
 */
function Loader() {
  return (
    <div className={LoaderCSS.lds_ring}>
        <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
  )
}

export default Loader