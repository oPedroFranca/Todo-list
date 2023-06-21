import React from 'react';
import { FirstSlideDiv } from './style';
import { colors } from '../../../../../theme/GlobalStyles';

/**
 * Component to display the second slide.
 */
export const SecondSlide = () => {
  return (
    <FirstSlideDiv>
      <img src="public/icons/WebsiteCreator.gif" alt="" />
      <div>
        <h1>
          <span style={{ marginRight: '6px', color: colors.purple }}>
            Clean
          </span>
          design<span>.</span>
        </h1>
        <p>
          The design was carefully thought out to offer users a pleasant and
          intuitive experience. With a clean and modern interface, you can
          easily and quickly manage your tasks.
        </p>
      </div>
    </FirstSlideDiv>
  );
};
