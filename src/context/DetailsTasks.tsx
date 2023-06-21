import React, { useState, createContext, useContext } from 'react';
import { Task } from './ColectionTaskContext';
import { v4 as uuidv4 } from 'uuid';

export type Subtask = {
  subtaskId: string;
  subtaskChecked: boolean;
  subtaskDescription: string;
};

export interface DetailTaskContextValue {
  isTaskDetailsOpen: boolean;
  openTaskDetails: (taskID: string) => void;
  closeTaskDetails: () => void;
  taskSelected: () => string;
  addDetailTaskToTask: (task: Task) => Subtask;
}

export const DetailTaskContext = createContext<DetailTaskContextValue>({
  isTaskDetailsOpen: false,
  openTaskDetails: () => {},
  closeTaskDetails: () => {},
  taskSelected: String,
  addDetailTaskToTask: () => {
    return {
      subtaskId: '',
      subtaskChecked: false,
      subtaskDescription: '',
    };
  },
});

export const useDetailTaskContext = (): DetailTaskContextValue =>
  useContext(DetailTaskContext);

export const DetailTaskProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(String);
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);

  const openTaskDetails = (taskID: string) => {
    setIsTaskDetailsOpen(true);
    setTaskOpen(taskID);
  };

  const taskSelected = () => {
    return taskOpen;
  };

  const closeTaskDetails = () => {
    setIsTaskDetailsOpen(false);
  };

  const addDetailTaskToTask = () => {
    const taskId = uuidv4();

    const newSubtask: Subtask = {
      subtaskId: taskId,
      subtaskChecked: false,
      subtaskDescription: 'Subtask description',
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
