import React, { useContext } from 'react';
import {
  CloseIcon,
  CloseSpan,
  DeleteModalContent,
  DeleteModalDiv,
  DoneIcon,
  DoneSpan,
} from './style';
import { ModalContext } from '../../context/ModalContext';

export const DeleteTaskModal = () => {
  const { closeDeleteTaskModal } = useContext(ModalContext);

  return (
    <DeleteModalDiv>
      <DeleteModalContent>
        <p>Delete</p>

        <CloseSpan
          onClick={() => {
            closeDeleteTaskModal();
          }}
        >
          <CloseIcon />
        </CloseSpan>
        <DoneSpan>
          <DoneIcon />
        </DoneSpan>
      </DeleteModalContent>
    </DeleteModalDiv>
  );
};
