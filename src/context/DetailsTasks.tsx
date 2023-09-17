import React, { useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './ColectionTaskContext';

export type Subtask = {
  subtaskId: string;
  checked: boolean;
  subtaskDescription: string;
  parentTaskId: string;
};

export interface DetailTaskContextValue {
  isTaskDetailsOpen: boolean;
  openTaskDetails: (taskId: string) => void;
  closeTaskDetails: () => void;
  taskSelected: () => string;
  addDetailTaskToTask: (task: Task) => Subtask;
}

export const DetailTaskContext = createContext<DetailTaskContextValue>({
  isTaskDetailsOpen: false,
  openTaskDetails: () => {},
  closeTaskDetails: () => {},
  taskSelected: () => '',
  addDetailTaskToTask: () => {
    return {
      subtaskId: '',
      checked: false,
      subtaskDescription: '',
      parentTaskId: '',
    };
  },
});

export const useDetailTaskContext = (): DetailTaskContextValue =>
  useContext(DetailTaskContext);

export const DetailTaskProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState('');
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);

  const openTaskDetails = (taskId: string) => {
    setIsTaskDetailsOpen(true);
    setTaskOpen(taskId);
  };

  const closeTaskDetails = () => {
    setIsTaskDetailsOpen(false);
  };

  const taskSelected = () => {
    return taskOpen;
  };

  const addDetailTaskToTask = () => {
    const taskId = uuidv4();

    const newSubtask: Subtask = {
      subtaskId: taskId,
      checked: false,
      subtaskDescription: 'Subtask description',
      parentTaskId: taskId,
    };

    const updatedSubtasks = [...subtasks, newSubtask];
    setSubtasks(updatedSubtasks);

    return newSubtask;
  };

  const value: DetailTaskContextValue = {
    isTaskDetailsOpen,
    taskSelected,
    openTaskDetails,
    closeTaskDetails,
    addDetailTaskToTask,
  };

  return (
    <DetailTaskContext.Provider value={value}>
      {children}
    </DetailTaskContext.Provider>
  );
};
