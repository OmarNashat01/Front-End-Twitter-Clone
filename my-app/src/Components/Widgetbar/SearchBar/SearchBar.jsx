import React from 'react';
import SearchBarCSS from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';



function SearchBar() { 

  let textInput = React.createRef();

  function goToSearchRoute() {
    window.open(`/search/${textInput.current.value}`, "_self");
  }
  
  return (
      <div className={SearchBarCSS.search__input}>
        <input ref={textInput} className={SearchBarCSS.search__inputtext} placeholder="Search Twitter" type="text"  onKeyPress={(e) => e.key === 'Enter' && goToSearchRoute()}/>
        <SearchIcon className={SearchBarCSS.search__searchIcon} />
      </div>
  )
}

export default SearchBar