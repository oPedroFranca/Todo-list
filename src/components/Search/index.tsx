import React, { useState } from 'react';
import { AiSearch, SearchComponent } from './style';

export function Search() {
  const [isFocused, setIsFocused] = useState(false);

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
      />
    </SearchComponent>
  );
}
