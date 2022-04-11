import React from 'react'
import"./SearchUsers.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const SearchUsers=(props)=>{
    return(
    <div className='searchBox'>
 <form className="d-flex">
        <input className="form-control me-2 " type="search" placeholder="Search Users" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    );
}
export default SearchUsers