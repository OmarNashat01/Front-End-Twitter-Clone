import React from 'react';
import SearchBarCSS from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
      <div className={SearchBarCSS.search__input}>
        <input className={SearchBarCSS.search__inputtext} placeholder="Search Twitter" type="text" />
        <SearchIcon className={SearchBarCSS.search__searchIcon} />
      </div>
  )
}

export default SearchBar