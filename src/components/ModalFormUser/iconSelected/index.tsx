import React from 'react';
import { Span_form_name } from './style';

interface SelectedIconProps {
  iconFilePath: string;
}

export const IconSelected = ({ iconFilePath }: SelectedIconProps) => {
  return (
    // Returns a span tag containing the img tag with the selected icon
    <Span_form_name>
      <img src={iconFilePath} alt="" />
    </Span_form_name>
  );
};
