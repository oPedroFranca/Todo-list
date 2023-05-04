/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

type ModalContextType = {
  isOpen: boolean;
  isOpenWelcome: boolean;
  openModal: () => void;
  closeModal: () => void;
  openModalWelcome: () => void;
  closeModalWelcome: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: true,
  openModal: () => {},
  closeModal: () => {},
  isOpenWelcome: true,
  openModalWelcome: () => {},
  closeModalWelcome: () => {},
});

export const ModalProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWelcome, setIsOpenWelcome] = useState(true);

  const openModalWelcome = () => {
    setIsOpenWelcome(true);
  };

  const closeModalWelcome = () => {
    setIsOpenWelcome(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        isOpenWelcome,
        openModal,
        closeModal,
        openModalWelcome,
        closeModalWelcome,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
