import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../redux/actions';
import { StyledSearchBar } from './styles';

function SearchBar() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.filterProducts(term));
  }, [term, dispatch])

  const filterByTerm = async ({ target }) => {
    setTerm(target.value);
  }

  return (
    <StyledSearchBar>
      <input
        type="text"
        placeholder="O que você procura?"
        onChange={ ({ target }) => filterByTerm({ target }) }
      />
    </StyledSearchBar>
  )
}

export default SearchBar;
