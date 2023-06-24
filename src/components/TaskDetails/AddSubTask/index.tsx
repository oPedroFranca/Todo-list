/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from 'react';
import { AddButton, AddTaskContent } from './style';
import { TaskSelected } from '../../../utils/TaskSelectedDetails';
import { DetailTaskContext, Subtask } from '../../../context/DetailsTasks';
import { SubTaskCreating } from './SubTaskCreating';

export const AddSubTask = ({
  onAddSubtask,
}: {
  onAddSubtask: (newSubtask: Subtask) => void;
}) => {
  const { addDetailTaskToTask } = useContext(DetailTaskContext);
  const taskSelected = TaskSelected();
  const [isCreating, setisCreating] = useState(false);

  const handleAddDetailsTask = () => {
    setisCreating(true);
  };

  const handleSaveSubtask = (subtaskDescription: string) => {
    if (subtaskDescription.trim() !== '') {
      const newSubtask = addDetailTaskToTask(taskSelected!);
      newSubtask.subtaskDescription = subtaskDescription;
      setisCreating(false);
      onAddSubtask(newSubtask);
    }
  };

  return (
    <>
      {isCreating ? (
        <SubTaskCreating handleSaveSubtask={handleSaveSubtask} />
      ) : (
        <AddTaskContent onClick={handleAddDetailsTask}>
          <div>
            <AddButton />
          </div>
          <p>Add a task</p>
        </AddTaskContent>
      )}
    </>
  );
};
