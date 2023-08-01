/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CollectionTaskContext } from './ColectionTaskContext';

interface StatusTaskContextType {
  numberTasks: number;
  numberCompleted: number;
  numberInProgress: number;
  numberHighPriority: number;
  setHighPriority: React.Dispatch<React.SetStateAction<number>>;
}

// Create a new context for user details
export const StatusTaskContext = createContext<StatusTaskContextType>({
  numberTasks: 0,
  numberCompleted: 0,
  numberInProgress: 0,
  numberHighPriority: 0,
  setHighPriority: () => {}, // Provide a default empty function to satisfy the context value
});

interface UserDetailsProps {
  children: React.ReactNode;
}

export function StatusTaskProvider({ children }: UserDetailsProps) {
  const [numberCompleted, setCompleted] = useState<number>(0);
  const [numberInProgress, setInProgress] = useState<number>(0);
  const [numberHighPriority, setHighPriority] = useState<number>(0);

  const { taskList } = useContext(CollectionTaskContext);
  const getAllTasks = (): number => taskList.length;

  useEffect(() => {
    const highPriorityTasks = taskList.filter((task) => task.isFavorite);
    setHighPriority(highPriorityTasks.length);
  }, [taskList, numberCompleted]);

  // Update the value object with the function to get numberTasks
  const value: StatusTaskContextType = {
    numberTasks: getAllTasks(),
    numberCompleted,
    numberInProgress,
    numberHighPriority,
    setHighPriority,
  };

  return (
    <StatusTaskContext.Provider value={value}>
      {children}
    </StatusTaskContext.Provider>
  );
}
