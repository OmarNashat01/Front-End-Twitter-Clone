import React from 'react';
import SearchBarCSS from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";



function SearchBar() { 
  const [text,setText]= useState('');
  let textInput = React.createRef();

  const handleText = (event) => {
    setText(event.target.value);
};
  function goToSearchRoute() {
    window.open(`/search/${textInput.current.value}`, "_self");
  }
  function ClearInput(){
    setText('')
  }
  
  return (
      <div className={SearchBarCSS.search__input}>
        {text != '' &&
        <button className={SearchBarCSS.close__btn} onClick={ClearInput}>
          <CloseIcon className={SearchBarCSS.close__icon} fontSize="medium"/>
        </button>
        }
        <input ref={textInput} value={text} className={SearchBarCSS.search__inputtext} placeholder="Search Twitter" type="text"  onKeyPress={(e) => e.key === 'Enter' && goToSearchRoute()} onChange={handleText}/>
        <SearchIcon className={SearchBarCSS.search__searchIcon} />
      </div>
  )
}

export default SearchBar