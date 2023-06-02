import React, { useState, createContext, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Tasks } from '../components/Task';

type Task = {
  taskId: string;
  taskName: string;
  taskDescription: string;
};

export interface TaskContextValue {
  taskList: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  showTasks: () => JSX.Element[];
}

// Creating the contenxt
export const CollectionTaskContext = createContext<TaskContextValue>({
  taskList: [],
  addTask: () => {},
  removeTask: () => {},
  showTasks: () => [],
});

// Custom hook to use context
export const useCollectionTaskContext = (): TaskContextValue =>
  useContext(CollectionTaskContext);

export const CollectionTaskProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    // Retrieves tasks saved in localStorage, if any
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const removeTask = (taskId: string) => {
    const updatedTasks = taskList.filter((task) => task.taskId !== taskId);
    setTaskList(updatedTasks);

    saveTasksToLocalStorage(updatedTasks);
  };

  const showTasks = () => {
    return taskList.map((task) => (
      <Tasks
        key={task.taskId}
        taskName={task.taskName}
        taskDescription={task.taskDescription}
      />
    ));
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
