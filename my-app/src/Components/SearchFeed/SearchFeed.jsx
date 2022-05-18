import React, { useState,useEffect } from 'react'
import Navs from "./Navs/Navs"
import SearchBar from "./../Widgetbar/SearchBar/SearchBar"
import SearchFeedCSS from "./SearchFeed.module.css"
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchCard from "./SearchCard/SearchCard"
import { getSearchAllUsers } from "./../../Api/Search";

function SearchFeed() {
    const [users, setUsers]= useState([]);
    const [response, setResponse] = useState([]);
    const [loading , setLoading] = useState(true);
    const searchInput=window.location.pathname.split("/")[2].toString();       
    useEffect(()=>{
        getSearchAllUsers(setLoading,setResponse,`?keyword=${searchInput}&offset=0&limit=1000`)
        if(!loading){
            console.log(response)
        }
        console.log("Hellooo")
      },[])
    
  return (
    <div>
        
        <div className={SearchFeedCSS.search_container}>
            <IconButton aria-label="Back" className={SearchFeedCSS.back_icon}>
                <ArrowBackIcon />
            </IconButton>
            <IconButton aria-label="Back" className={SearchFeedCSS.more_icon}>
                <MoreHorizIcon />
            </IconButton>
            <SearchBar className={SearchFeedCSS.search_bar}/>
        </div>
        <Navs />
        <div>
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            
        </div>
    </div>
  )
}

export default SearchFeed



