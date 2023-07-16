import React from 'react';
import { Styled_Header } from './style.js';
import { Search } from '../../../components/Search/index.js';

export function Header() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}, ${currentDate.toLocaleString(
    'default',
    { month: 'short' },
  )} ${currentDate.getDate()}`;

  return (
    <Styled_Header>
      <Search />
      <p>{formattedDate}</p>
      <div></div>
    </Styled_Header>
  );
}
