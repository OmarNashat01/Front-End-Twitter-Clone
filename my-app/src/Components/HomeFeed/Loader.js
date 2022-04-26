import React from 'react'
import LoaderCSS from "./Loader.module.css"

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