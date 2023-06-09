import React from 'react';
import { TaskDetailsContent } from './style';
import { useDetailTaskContext } from '../../context/DetailsTasks';

export const TaskDetails = () => {
  const { closeTaskDetails } = useDetailTaskContext();

  const handleclick = () => {
    closeTaskDetails();
  };

  return (
    <TaskDetailsContent>
      <button onClick={handleclick}>close</button>
    </TaskDetailsContent>
  );
};
