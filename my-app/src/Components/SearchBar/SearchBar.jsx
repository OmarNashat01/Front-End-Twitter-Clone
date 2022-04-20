import React from 'react';
import SearchBarCSS from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
      <div className={SearchBarCSS.search__input}>
        <SearchIcon className={SearchBarCSS.search__searchIcon} />
        <input className={SearchBarCSS.search__inputtext} placeholder="Search Twitter" type="text" />
      </div>
  )
}

export default SearchBar