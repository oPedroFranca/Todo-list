import React from 'react';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

/**
 * Component that represents a modal.
 * @param isOpen Indicates whether the modal is open or closed.
 * @param children Content of the modal.
 */
export const Modal = ({ isOpen, children }: ModalProps) => {
  return <>{isOpen ? children : null}</>;
};
