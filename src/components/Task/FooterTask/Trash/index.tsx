import React from 'react';
import { HiTrash } from 'react-icons/hi';
import { TrashContent } from './style';

type TrashProps = {
  onClick: (event: React.MouseEvent) => void;
};

/**
 * Component representing a trash can icon.
 * @param onClick Function to handle component click.
 */
export const Trash = ({ onClick }: TrashProps) => {
  return (
    <>
      <TrashContent onClick={onClick}>
        <HiTrash />
      </TrashContent>
    </>
  );
};
