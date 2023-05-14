import React from 'react';
import { RiCalendarCheckFill } from 'react-icons/ri';
import { DateDiv } from './style';

export const DateToday = () => {
  

  return (
    <DateDiv>
      <RiCalendarCheckFill
        style={{ marginRight: '3px', width: '13px', height: '13px' }}
      />
      {`${day}/${month}/${year}`}
    </DateDiv>
  );
};
