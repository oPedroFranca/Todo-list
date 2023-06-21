/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { AddButton, AddTaskContent } from './style';
import { TaskSelected } from '../../../utils/TaskSelectedDetails';
import { DetailTaskContext } from '../../../context/DetailsTasks';

export const AddTask = ({
  onAddSubtask,
}: {
  onAddSubtask: (newSubtask: any) => void;
}) => {
  const { addDetailTaskToTask } = useContext(DetailTaskContext);
  const taskSelected = TaskSelected();

  const handleAddDetailsTask = () => {
    const newSubtask = addDetailTaskToTask(taskSelected!);
    onAddSubtask(newSubtask);
  };

  return (
    <AddTaskContent onClick={handleAddDetailsTask}>
      <div>
        <AddButton />
      </div>
      <p>Add a task</p>
    </AddTaskContent>
  );
};
