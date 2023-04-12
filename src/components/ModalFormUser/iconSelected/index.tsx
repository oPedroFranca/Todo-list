import React from 'react';
import { Span_form_name } from './style';

interface IconSelectedProps {
  selectedIcon: string;
}

export const IconSelected = ({ selectedIcon }: IconSelectedProps) => {
  return (
    // Returns a span tag containing the img tag with the selected icon
    <Span_form_name>
      <img src={selectedIcon} alt="" />
    </Span_form_name>
  );
};
