import React from 'react';
import { Styled_Header, Today } from './style.js';
import { Search } from '../../../components/Search/index.js';
import { StackDays } from '../../../components/StackDays/index.js';

export function Header() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}, ${currentDate.toLocaleString(
    'default',
    { month: 'short' },
  )} ${currentDate.getDate()}`;

  return (
    <Styled_Header>
      <Search />
      <Today>{formattedDate}</Today>
      <div>
        <StackDays />
      </div>
    </Styled_Header>
  );
}
