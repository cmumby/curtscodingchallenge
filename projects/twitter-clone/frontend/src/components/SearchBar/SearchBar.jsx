import * as React from 'react';
import { SearchBarBox, SearchBarContainer, SearchBarIcon, SearchBarTextField } from './SearchBar.style';

export default function SearchBar() {
  return (
    <SearchBarContainer>
      {' '}
      <SearchBarBox>
        <SearchBarIcon />
        <SearchBarTextField
          id="search"
          label="Search"
          variant="standard"
          InputProps={{ disableUnderline: true }}
        />
      </SearchBarBox>
    </SearchBarContainer>
  );
}
