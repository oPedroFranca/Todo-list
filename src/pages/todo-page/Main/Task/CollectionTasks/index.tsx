import { useState } from 'react';

export const CollectionTask = () => {
  const [taskList, setTaskList] = useState<JSX.Element[]>([]);

  const addTask = (task: JSX.Element) => {
    setTaskList((prevTaskList) => [...prevTaskList, task]);
  };

  const showTasks = () => {
    return taskList;
  };

  return {
    addTask,
    showTasks,
  };
};
