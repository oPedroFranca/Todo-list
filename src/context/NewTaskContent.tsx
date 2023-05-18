/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

type ModalContextType = {
  isOpenTask: boolean;
  openModalTask: () => void;
  closeModaTask: () => void;
};

export const TaskContent = createContext<ModalContextType>({
  isOpenTask: true,
  openModalTask: () => {},
  closeModaTask: () => {},
});

export const NewTaskProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isOpenTask, setIsOpenTask] = useState(false);

  const openModalTask = () => {
    setIsOpenTask(true);
  };

  const closeModaTask = () => {
    setIsOpenTask(false);
  };

  return (
    <TaskContent.Provider
      value={{
        isOpenTask,
        openModalTask,
        closeModaTask,
      }}
    >
      {children}
    </TaskContent.Provider>
  );
};
