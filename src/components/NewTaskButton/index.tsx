import React, { useContext } from 'react';
import { NewTask, NewTaskContent } from './style';
import { TaskContent } from '../../context/NewTaskContent';

/**
 * Component responsible for creating a new task.
 */
export const CreateNewTask: React.FC = () => {
  const { openModalTask } = useContext(TaskContent);

  /**
   * Event handler to open task creation modal.
   */
  function handleModalIsOpen() {
    openModalTask();
  }

  return (
    <NewTaskContent>
      <NewTask onClick={handleModalIsOpen}>Add New Task</NewTask>
    </NewTaskContent>
  );
};
