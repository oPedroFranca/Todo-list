import React from 'react';
import { HiTrash } from 'react-icons/hi';
import { TrashContent } from './style';

type TrashProps = {
  onClick: () => void;
};

export const Trash = ({ onClick }: TrashProps) => {
  return (
    <>
      <TrashContent onClick={onClick}>
        <HiTrash />
      </TrashContent>
    </>
  );
};
