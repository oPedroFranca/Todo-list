/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

type ModalContextType = {
  isOpen: boolean;
  isOpenWelcome: boolean;
  isOpenDeleteTask: boolean;
  openModal: () => void;
  closeModal: () => void;
  openModalWelcome: () => void;
  closeModalWelcome: () => void;
  openDeleteTaskModal: () => void;
  closeDeleteTaskModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: true,
  isOpenDeleteTask: false,
  isOpenWelcome: true,
  openModal: () => {},
  closeModal: () => {},
  openModalWelcome: () => {},
  closeModalWelcome: () => {},
  openDeleteTaskModal: () => {},
  closeDeleteTaskModal: () => {},
});

export const ModalProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWelcome, setIsOpenWelcome] = useState(true);
  const [isOpenDeleteTask, setIsOpenDeleteTask] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModalWelcome = () => {
    setIsOpenWelcome(true);
  };

  const closeModalWelcome = () => {
    setIsOpenWelcome(false);
  };

  const openDeleteTaskModal = () => {
    setIsOpenDeleteTask(true);
  };

  const closeDeleteTaskModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        isOpenWelcome,
        isOpenDeleteTask,
        openModal,
        closeModal,
        openModalWelcome,
        closeModalWelcome,
        openDeleteTaskModal,
        closeDeleteTaskModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
