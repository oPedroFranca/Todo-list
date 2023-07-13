import React from 'react';
import { AiSearch, SearchComponent, Styled_Header } from './style.js';

export function Header() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}, ${currentDate.toLocaleString(
    'default',
    { month: 'short' },
  )} ${currentDate.getDate()}`;

  return (
    <Styled_Header>
      <SearchComponent>
        <input type="text" placeholder="Search" maxLength={25} />
        <AiSearch />
      </SearchComponent>
      <p>{formattedDate}</p>
    </Styled_Header>
  );
}
