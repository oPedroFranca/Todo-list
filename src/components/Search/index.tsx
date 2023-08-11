import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { AiSearch, SearchComponent } from './style';

interface Props {
  onSearch: (searchTerm: string) => void;
}

export function Search({ onSearch }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm] = useState('');
  const [userTypedValue, setUserTypedValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('userTypedValue');
    if (storedValue) {
      setUserTypedValue(storedValue);
    }
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserTypedValue(value);
    onSearch(value);
    localStorage.setItem('userTypedValue', value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace') {
      setUserTypedValue(event.currentTarget.value);
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
        value={userTypedValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </SearchComponent>
  );
}
