import React from 'react';
import './style';
import { FirstSlideDiv } from './style';
import { colors } from '../../../../../theme/GlobalStyles';

/**
 * Component to display the Third Slide.
 */
export const ThirdSlide = () => {
  return (
    <FirstSlideDiv>
      <img src="public/icons/Layout.gif" alt="" />
      <div>
        <h1>
          <span style={{ marginRight: '6px', color: colors.purple }}>Easy</span>
          to use
          <span style={{ color: colors.purple }}>.</span>
        </h1>
        <p>
          website to ensure users can easily navigate and find the information
          they need. With an intuitive layout and a clear and concise menu
          structure, you can find what you are looking for effortlessly.
        </p>
      </div>
    </FirstSlideDiv>
  );
};
