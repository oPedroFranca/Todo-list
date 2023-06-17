import React, { useState, createContext, useContext } from 'react';

export interface DetailTaskContextValue {
  isTaskDetailsOpen: boolean;
  openTaskDetails: (taskID: string) => void;
  closeTaskDetails: () => void;
  taskSelected: () => string;
}

export const DetailTaskContext = createContext<DetailTaskContextValue>({
  isTaskDetailsOpen: false,
  openTaskDetails: () => {},
  closeTaskDetails: () => {},
  taskSelected: String,
});

export const useDetailTaskContext = (): DetailTaskContextValue =>
  useContext(DetailTaskContext);

export const DetailTaskProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(String);

  const openTaskDetails = (taskID: string) => {
    setIsTaskDetailsOpen(true);
    setTaskOpen(taskID);
  };

  const taskSelected = () => {
    return taskOpen;
  };

  const closeTaskDetails = () => {
    setIsTaskDetailsOpen(false);
  };

  const value: DetailTaskContextValue = {
    isTaskDetailsOpen,
    taskSelected,
    openTaskDetails,
    closeTaskDetails,
  };

  return (
    <DetailTaskContext.Provider value={value}>
      {children}
    </DetailTaskContext.Provider>
  );
};
