import React from 'react';
import { FirstSlideDiv } from './style';
import { colors } from '../../../../../theme/GlobalStyles';

/**
 * Component to display the first slide.
 */
export const FirstSlide = () => {
  return (
    <FirstSlideDiv>
      <img src="public/icons/Hello.gif" alt="" />

      <div>
        <h1>
          <span style={{ marginRight: '6px', color: colors.purple }}>
            Welcome
          </span>
          to my project
          <span style={{ color: colors.purple }}>.</span>
        </h1>
        <p>
          Hi, thanks for choosing my project from the to-do list! With it, you
          can manage your tasks easily and quickly. Hope this helps you get
          organized and increase your productivity.
        </p>
      </div>
    </FirstSlideDiv>
  );
};
