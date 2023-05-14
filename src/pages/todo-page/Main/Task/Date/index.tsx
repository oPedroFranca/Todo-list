import React from 'react';
import { RiCalendarCheckFill } from 'react-icons/ri';
import { DateDiv } from './style';

export const DateToday = () => {

  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear().toString();

  return (
    <DateDiv>
      <RiCalendarCheckFill
        style={{ marginRight: '3px', width: '13px', height: '13px' }}
      />
      {`${day}/${month}/${year}`}
    </DateDiv>
  );
};
