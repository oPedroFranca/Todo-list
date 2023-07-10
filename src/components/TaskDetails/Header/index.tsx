import React from 'react';
import { useDetailTaskContext } from '../../../context/DetailsTasks';
import { TaskSelected } from '../../../utils/TaskSelectedDetails';
import { TaskHeader, TaskName, ButtonBack, MenuKebab } from './style';

/**
 * Component to display the task details header.
 */
export const HeaderTaskDetails = () => {
  const { closeTaskDetails } = useDetailTaskContext();
  const taskSelected = TaskSelected();

  /**
   * Event handler to close task details.
   */

  return (
    <TaskHeader>
      <ButtonBack onClick={handleClick} />
      <TaskName>
        {taskSelected?.taskName ? taskSelected.taskName : 'Task'}
      </TaskName>
      <MenuKebab />
    </TaskHeader>
  );
};
