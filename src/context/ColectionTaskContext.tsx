/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext, useContext } from 'react';

export interface TaskContextValue {
  taskList: JSX.Element[];
  addTask: (task: JSX.Element) => void;
  showTasks: () => JSX.Element[];
}

export const CollectionTaskContext = createContext<TaskContextValue>({
  taskList: [],
  addTask: () => {},
  showTasks: () => [],
});

export const useCollectionTaskContext = (): TaskContextValue =>
  useContext(CollectionTaskContext);

export const CollectionTaskProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [taskList, setTaskList] = useState<JSX.Element[]>([]);

  const addTask = (task: JSX.Element) => {
    setTaskList((prevTaskList) => [...prevTaskList, task]);
  };

  const showTasks = () => {
    return taskList;
  };

  const value: TaskContextValue = {
    taskList,
    addTask,
    showTasks,
  };

  return (
    <CollectionTaskContext.Provider value={value}>
      {children}
    </CollectionTaskContext.Provider>
  );
};
