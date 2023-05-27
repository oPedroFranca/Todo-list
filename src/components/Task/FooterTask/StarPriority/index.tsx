import React, { useState } from 'react';
import { OutlineStar, Star, StarContent } from './style';

export const StarPriority = () => {
  const [showStar, setShowStar] = useState(false);


  return (
    <>
      <StarContent>
        <OutlineStar onClick={handleStarClick} show={!showStar} />
        <Star onClick={handleStarClick} show={showStar} />
      </StarContent>
    </>
  );
};
