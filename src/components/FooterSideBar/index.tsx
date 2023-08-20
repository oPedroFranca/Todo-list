import React from 'react';
import {
  FooterContent,
  ReactIco,
  StyledComponentsIco,
  TypescriptIco,
} from './style';

export const FooterSideBar = () => {
  return (
    <FooterContent>
      <p>Created with &lt;3 by Pedro Henrique</p>
      <span>
        <ReactIco />
        <TypescriptIco />
        <StyledComponentsIco />
      </span>
    </FooterContent>
  );
};
