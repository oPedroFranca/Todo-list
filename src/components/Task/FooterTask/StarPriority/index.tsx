import React, { useState } from 'react';
import { OutlineStar, Star, StarContent } from './style';

export const StarPriority = () => {
  const [showStar, setShowStar] = useState(false);

  const handleStarClick = () => {
    setShowStar(!showStar);
  };

  return (
    <>
      <StarContent>
        <OutlineStar onClick={handleStarClick} show={!showStar} />
        <Star onClick={handleStarClick} show={showStar} />
      </StarContent>
    </>
  );
};
