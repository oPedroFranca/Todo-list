import React from 'react';
import { RiCalendarCheckFill } from 'react-icons/ri';
import { DateDiv } from './style';

type DateTaskProps = {
  value: string;
};

export const DateToday = ({ value }: DateTaskProps) => {
  return (
    <DateDiv>
      <RiCalendarCheckFill
        style={{ marginRight: '3px', width: '13px', height: '13px' }}
      />
      {value}
    </DateDiv>
  );
};
