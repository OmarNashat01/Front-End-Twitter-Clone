import React,{useState} from 'react'
import SearchUsersStyle from"./SearchUsers.module.css"
import UsersTable from './UsersTable/UsersTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Sidebar from "../AdminNavBar/Sidebar";

const SearchUsers=(props)=>{
 const [userName,setUser]=useState('');
 const[saveName,setSaved]=useState('');
 const captureUser=()=>{
setSaved(userName);

 }
    return(
      <div className={SearchUsersStyle.pageColor}>

      <div className={`container-fluid `}>
        <div className={`row vh-100  `}>
          <div className={`col col-lg-2 col-md-3 col-sm-1 col-sm-1 ${SearchUsersStyle.navBorder}`}>
           <div className={`sticky-top ${SearchUsersStyle.barWidth}`} >

           <Sidebar />
           </div>
          </div>
          <div className="col col-lg-10 col-md-9 col-sm-1 col-sm-1">


          <div className={SearchUsersStyle.searchDiv} >
          <form className={`d-flex `}>
            <div  >
        <input className={`form-control me-2 ${SearchUsersStyle.searchBox}`} type="search" placeholder="Search Users" aria-label="Search" value={userName} onChange={(name)=>setUser(name.target.value)}/>
        </div>
        <div className={SearchUsersStyle.searchButtonDiv}>
        <button className={`btn btn-outline-primary ${SearchUsersStyle.searchButton}`} type="submit" onClick={captureUser}>Search</button>
        </div>
        {console.log(saveName)}
      </form>
      </div >
      <div ><UsersTable /></div>
      
    
            </div>
          </div>
        </div>
     </div>


       
        



    
    );
}
export default SearchUsers