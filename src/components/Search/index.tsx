import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { AiSearch, SearchComponent } from './style';

interface Props {
  onSearch: (searchTerm: string) => void;
}

export function Search({ onSearch }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchComponent isFocused={isFocused}>
      <div>
        <AiSearch />
      </div>

      <input
        type="text"
        placeholder="Search"
        maxLength={25}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
    </SearchComponent>
  );
}
