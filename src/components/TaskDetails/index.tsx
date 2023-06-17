import React from 'react';
import {
  ButtonBack,
  TaskDetailsBody,
  TaskDetailsContent,
  TaskHeader,
  TaskName,
} from './style';
import { useDetailTaskContext } from '../../context/DetailsTasks';
import { TaskSelected } from '../../utils/TaskSelectedDetails';

export const TaskDetails = () => {
  const { closeTaskDetails } = useDetailTaskContext();
  const taskSelected = TaskSelected();

  const handleclick = () => {
    closeTaskDetails();
  };

  return (
    <TaskDetailsContent>
      <TaskDetailsBody>
        <TaskHeader>
          <ButtonBack onClick={handleclick}>close</ButtonBack>
          <TaskName>{taskSelected?.taskName}</TaskName>
        </TaskHeader>
      </TaskDetailsBody>
    </TaskDetailsContent>
  );
};
