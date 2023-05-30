import React from 'react';
import { OutlineStar, Star, StarContent } from './style';

type StarPriorityProps = {
  onClick: () => void;
  active: boolean;
};

export const StarPriority = ({ onClick, active }: StarPriorityProps) => {
  return (
    <>
      <StarContent>
        <OutlineStar onClick={onClick} show={!active} />
        <Star onClick={onClick} show={active} />
      </StarContent>
    </>
  );
};
