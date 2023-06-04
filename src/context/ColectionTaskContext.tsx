import React, { useState, createContext, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Tasks } from '../components/Task';

export type Task = {
  taskId: string;
  taskName: string;
  taskDescription: string;
  isFavorite: boolean;
};

export interface TaskContextValue {
  taskList: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  showTasks: () => JSX.Element[];
  toggleFavorite: (taskId: string) => void; // Nova função para alternar o estado de favorito da tarefa
}

// Creating the contenxt
export const CollectionTaskContext = createContext<TaskContextValue>({
  taskList: [],
  addTask: () => {},
  removeTask: () => {},
  showTasks: () => [],
  toggleFavorite: () => {},
});

// Custom hook to use context
export const useCollectionTaskContext = (): TaskContextValue =>
  useContext(CollectionTaskContext);

export const CollectionTaskProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addTask = ({ taskName, taskDescription }: Task) => {
    const taskId = uuidv4();
    const newTask: Task = {
      taskId,
      taskName,
      taskDescription,
      isFavorite: false,
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
    toggleFavorite, // Adiciona a função toggleFavorite ao contexto
  };

  return (
    <CollectionTaskContext.Provider value={value}>
      {children}
    </CollectionTaskContext.Provider>
  );
};
