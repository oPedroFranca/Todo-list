/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

type ModalContextType = {
  isOpen: boolean;
  isOpenWelcome: boolean;
  isOpenDeleteTask: boolean;
  taskClicked: string;
  openModal: () => void;
  closeModal: () => void;
  openModalWelcome: () => void;
  closeModalWelcome: () => void;
  openDeleteTaskModal: (taskID: string) => void;
  closeDeleteTaskModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: true,
  isOpenDeleteTask: false,
  isOpenWelcome: true,
  taskClicked: '',
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
  const [isOpenDeleteTask, setIsOpenDeleteTask] = useState(false);
  const [taskClicked, setTaskClicked] = useState('');

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

  const openDeleteTaskModal = (taskID: string) => {
    setIsOpenDeleteTask(true);
    setTaskClicked(taskID);
  };

  const closeDeleteTaskModal = () => {
    setIsOpenDeleteTask(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        isOpenWelcome,
        isOpenDeleteTask,
        taskClicked,
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
