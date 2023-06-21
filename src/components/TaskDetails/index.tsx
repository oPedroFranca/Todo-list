import React from 'react';
import { TaskDetailsBody, TaskDetailsContent } from './style';
import { HeaderTaskDetails } from './Header';
import { MainTaskDetails } from './Main';

/**
 * Component to display task details.
 */
export const TaskDetails = () => {
  return (
    <TaskDetailsContent>
      <TaskDetailsBody>
        <HeaderTaskDetails />

        <MainTaskDetails />
      </TaskDetailsBody>
    </TaskDetailsContent>
  );
};
