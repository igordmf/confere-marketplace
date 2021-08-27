import React from 'react';
import { StyledSearchBar } from './styles';

function SearchBar() {
  return (
    <StyledSearchBar>
      <input
        type="text"
        placeholder="O que você procura?"
        onChange={ ({ target }) => console.log({ target }) }
      />
    </StyledSearchBar>
  )
}

export default SearchBar;
