import React from 'react';
import { ModalDiv, ModalContent, ModalHeader } from './style';

type ModalProps = {
  isOpen: boolean;
};

export const Modal = ({ isOpen }: ModalProps) => {
  return (
    <>
      {isOpen ? (
        <ModalDiv>
          <ModalContent>
            <ModalHeader>
              <img src="public/icons/icon-Todo.png" alt="" />
              <span>
                <p>To-do List</p>
                <p>Manage your tasks simply and efficiently.</p>
              </span>
            </ModalHeader>
          </ModalContent>
        </ModalDiv>
      ) : null}
    </>
  );
};
