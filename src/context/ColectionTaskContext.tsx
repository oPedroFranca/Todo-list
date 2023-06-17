/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, createContext, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Tasks } from '../components/Task';
import { SaveDateToday } from '../utils/SaveDateToday';

export type Task = {
  taskId: string;
  taskName: string;
  taskDescription: string;
  isFavorite: boolean;
  dateCreated?: string;
};

export interface TaskContextValue {
  taskList: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  showTasks: () => JSX.Element[];
  toggleFavorite: (taskId: string) => void;
  selectTask: (taskId: string) => void;
}

// Creating the contenxt
export const CollectionTaskContext = createContext<TaskContextValue>({
  taskList: [],
  addTask: () => {},
  removeTask: () => {},
  showTasks: () => [],
  toggleFavorite: () => {},
  selectTask: () => {},
});

// Custom hook to use context
export const useCollectionTaskContext = (): TaskContextValue =>
  useContext(CollectionTaskContext);

export const CollectionTaskProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const selectTask = (taskId: string) => {
    setSelectedTaskId(taskId);
  };

  const addTask = ({ taskName, taskDescription }: Task) => {
    const taskId = uuidv4();
    const newTask: Task = {
      taskId,
      taskName,
      taskDescription,
      isFavorite: false,
      dateCreated: SaveDateToday(),
    };

    const updatedTasks = [...taskList, newTask];
    setTaskList(updatedTasks);

    saveTasksToLocalStorage(updatedTasks);
  };

  const removeTask = (taskId: string) => {
    const updatedTasks = taskList.filter((task) => task.taskId !== taskId);
    setTaskList(updatedTasks);

    saveTasksToLocalStorage(updatedTasks);
  };

  const toggleFavorite = (taskId: string) => {
    const updatedTasks = taskList.map((task) => {
      if (task.taskId === taskId) {
        return {
          ...task,
          isFavorite: !task.isFavorite,
        };
      }
      return task;
    });

    setTaskList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const showTasks = () => {
    return taskList.map((task) => <Tasks key={task.taskId} task={task} />);
  };

  const value: TaskContextValue = {
    taskList,
    addTask,
    removeTask,
    showTasks,
    toggleFavorite,
    selectTask,
  };

  return (
    <CollectionTaskContext.Provider value={value}>
      {children}
    </CollectionTaskContext.Provider>
  );
};
