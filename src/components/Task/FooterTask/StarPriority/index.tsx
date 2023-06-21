import React from 'react';
import { OutlineStar, Star, StarContent } from './style';

type StarPriorityProps = {
  onClick: (event: React.MouseEvent) => void;
  active: boolean;
};

/**
 * Component that represents the priority of a task.
 * @param onClick Function to handle component click.
 * @param active Indicates whether the priority is active or not.
 */
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
