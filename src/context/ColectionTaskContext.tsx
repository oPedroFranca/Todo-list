/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext, useContext } from 'react';
import { Tasks } from '../components/Task';

type Task = {
  taskId: string;
  taskName: string;
  taskDescription: string;
};

export interface TaskContextValue {
  taskList: JSX.Element[];
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  showTasks: () => JSX.Element[];
}

export const CollectionTaskContext = createContext<TaskContextValue>({
  taskList: [],
  addTask: () => {},
  removeTask: () => {},
  showTasks: () => [],
});

export const useCollectionTaskContext = (): TaskContextValue =>
  useContext(CollectionTaskContext);

export const CollectionTaskProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [taskList, setTaskList] = useState<JSX.Element[]>([]);

  const addTask = ({ taskId, taskName, taskDescription }: Task) => {
    const task = (
      <Tasks
        id={taskId}
        taskName={taskName}
        taskDescription={taskDescription}
      />
    );

    setTaskList((prevTaskList) => [...prevTaskList, task]);
  };

  const removeTask = (taskId: string) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.props.id !== taskId),
    );
  };

  const showTasks = () => {
    return taskList;
  };

  const value: TaskContextValue = {
    taskList,
    addTask,
    removeTask,
    showTasks,
  };

  return (
    <CollectionTaskContext.Provider value={value}>
      {children}
    </CollectionTaskContext.Provider>
  );
};
