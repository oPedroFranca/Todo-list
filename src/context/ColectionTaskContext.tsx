import React, { useState, createContext, useContext } from 'react';
import { Tasks } from '../components/Task';
import { v4 as uuidv4 } from 'uuid';

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
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = ({ taskName, taskDescription }: Task) => {
    const taskId = uuidv4();
    const newTask: Task = {
      taskId,
      taskName,
      taskDescription,
    };

    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
  };

  const removeTask = (taskId: string) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.taskId !== taskId),
    );
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
