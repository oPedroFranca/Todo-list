import React from 'react';
import { useDetailTaskContext } from '../../../context/DetailsTasks';
import { TaskSelected } from '../../../utils/TaskSelectedDetails';
import { TaskHeader, TaskName, ButtonBack, MenuKebab } from './style';

export const HeaderTaskDetails = () => {
  const { closeTaskDetails } = useDetailTaskContext();
  const taskSelected = TaskSelected();

  const handleclick = () => {
    closeTaskDetails();
  };

  return (
    <TaskHeader>
      <ButtonBack onClick={handleclick}>close</ButtonBack>
      <TaskName>
        {taskSelected?.taskName ? taskSelected.taskName : 'Task'}
      </TaskName>
      <MenuKebab />
    </TaskHeader>
  );
};
