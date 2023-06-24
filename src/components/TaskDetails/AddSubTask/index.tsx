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
  const [subtaskDescription, setSubtaskDescription] = useState('');

  const handleAddDetailsTask = () => {
    setisCreating(true);
  };

  const handleSaveSubtask = () => {
    if (subtaskDescription.trim() !== '') {
      const newSubtask = addDetailTaskToTask(taskSelected!);
      newSubtask.subtaskDescription = subtaskDescription;
      setisCreating(false);
      onAddSubtask(newSubtask);
    }
  };

  const handleSubtaskDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSubtaskDescription(event.target.value);
  };

  return (
    <>
      {isCreating ? (
        <SubTaskCreating
          handleSaveSubtask={handleSaveSubtask}
          subtaskDescription={subtaskDescription}
          onSubtaskDescriptionChange={handleSubtaskDescriptionChange}
        />
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
