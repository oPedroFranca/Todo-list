import React from 'react';
import { ModalDiv } from './style';

type ModalProps = {
  isOpen: boolean;
};

export const Modal = ({ isOpen }: ModalProps) => {
  return (
    <>
      {isOpen ? (
        <ModalDiv>
          <p>oi</p>
        </ModalDiv>
      ) : null}
    </>
  );
};
