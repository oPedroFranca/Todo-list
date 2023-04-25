/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

type ModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: true,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
