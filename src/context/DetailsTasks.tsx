import React, { useState, createContext, useContext } from 'react';

export interface DetailTaskContextValue {
  isTaskDetailsOpen: boolean;
  openTaskDetails: (taskID: string) => void;
  closeTaskDetails: () => void;
}

export const DetailTaskContext = createContext<DetailTaskContextValue>({
  isTaskDetailsOpen: false,
  openTaskDetails: () => {},
  closeTaskDetails: () => {},
});

export const useDetailTaskContext = (): DetailTaskContextValue =>
  useContext(DetailTaskContext);

export const DetailTaskProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false);

  const openTaskDetails = (taskID: string) => {
    setIsTaskDetailsOpen(true);
    console.log(taskID);
  };

  const closeTaskDetails = () => {
    setIsTaskDetailsOpen(false);
  };

  const value: DetailTaskContextValue = {
    isTaskDetailsOpen,
    openTaskDetails,
    closeTaskDetails,
  };

  return (
    <DetailTaskContext.Provider value={value}>
      {children}
    </DetailTaskContext.Provider>
  );
};
