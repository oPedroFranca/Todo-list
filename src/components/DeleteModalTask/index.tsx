import React from 'react';
import {
  CloseIcon,
  CloseSpan,
  DeleteModalContent,
  DeleteModalDiv,
  DoneIcon,
  DoneSpan,
} from './style';

export const DeleteTaskModal = () => {
  return (
    <DeleteModalDiv>
      <DeleteModalContent>
        <p>Delete</p>

        <DoneSpan>
          <DoneIcon />
        </DoneSpan>
        <CloseSpan>
          <CloseIcon />
        </CloseSpan>
      </DeleteModalContent>
    </DeleteModalDiv>
  );
};
