import React from 'react';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, children }: ModalProps) => {
  return <>{isOpen ? children : null}</>;
};
