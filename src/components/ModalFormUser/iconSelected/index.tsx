import React from 'react';
import { Span_form_name } from './style';
import { selectedIcon } from '../IconOptionUser';

export const IconSelected = () => {
  return (
    <Span_form_name>
      <img src={selectedIcon} alt="" />
    </Span_form_name>
  );
};
