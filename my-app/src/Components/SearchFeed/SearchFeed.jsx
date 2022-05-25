import React, { useState,useEffect } from 'react'
import Navs from "./Navs/Navs"
import SearchBar from "./../Widgetbar/SearchBar/SearchBar"
import SearchFeedCSS from "./SearchFeed.module.css"
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchCard from "./SearchCard/SearchCard"
import { getSearchAllUsers } from "./../../Api/Search";
/**
 * Search Feed that contains all search cards of users that is being search for 
 * @returns {Object}
 */
function SearchFeed() {
    const [users, setUsers]= useState([]);
    const [loading , setLoading] = useState(true);
    const searchInput=window.location.pathname.split("/")[2].toString();       
    useEffect(()=>{
        getSearchAllUsers(setLoading,setUsers,`?keyword=${searchInput}&offset=0&limit=1000`)
        
    },[])

    if(!loading){
        console.log(users)
    }
    
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
        { users.length > 0 ?
              users.map((user,index) => {
                return <div key={index}>
                <SearchCard
                  name={user.name}
                  tag={user.username}
                  img={user.prof_pic_url}
                  about={user.bio}
                  followers={user.followers_count}
                  following={user.following_count}
                  verified={true}
                ></SearchCard>
              </div>
            })
          : 
          <div>
                <img alt="" src={"https://abs.twimg.com/sticky/illustrations/empty-states/rubber-chicken-800x400.v1.png"} className={SearchFeedCSS.img__chicken}/>
                <p className={SearchFeedCSS.noresult_paragh}>No results for <br />"{searchInput}"</p>
                <p className={SearchFeedCSS.noresult_paragh2}>
                    Try searching for something else, or check your 
                    <a className={SearchFeedCSS.noresult_anchor}> Search settings </a>
                    to see if they’re protecting you from potentially sensitive content.
                 </p>
          </div>} 
            
        </div>
    </div>
  )
}

export default SearchFeed



