import React,{useState} from 'react'
import SearchUsersStyle from"./SearchUsers.module.css"
import UsersTable from './UsersTable/UsersTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const SearchUsers=(props)=>{
 const [userName,setUser]=useState('');
 const[saveName,setSaved]=useState('');
 const captureUser=()=>{
setSaved(userName);

 }
    return(
      <div>
    <div className={SearchUsersStyle.searchBox}>
 <form className="d-flex">
        <input className="form-control me-2 " type="search" placeholder="Search Users" aria-label="Search" value={userName} onChange={(name)=>setUser(name.target.value)}/>
        <button className="btn btn-outline-success" type="submit" onClick={captureUser}>Search</button>
        {console.log(saveName)}
      </form>
      </div >
      <div ><UsersTable /></div>
      
    </div>
    );
}
export default SearchUsers