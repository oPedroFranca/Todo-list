import React, { useContext, useState } from 'react';
import { FalseStatus, NewTask, NewTaskContent } from './style';
import { TaskContent } from '../../context/NewTaskContent';

/**
 * Component responsible for creating a new task.
 */
export const CreateNewTask: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { openModalTask } = useContext(TaskContent);

  /**
   * Event handler to open task creation modal.
   */
  function handleModalIsOpen() {
    openModalTask();
  }

  return (
    <NewTaskContent>
      <div>
        {/* Visual element to display false status */}
        <FalseStatus isHovered={isHovered}></FalseStatus>
      </div>
      <NewTask
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleModalIsOpen}
      >
        Add New Task
      </NewTask>
    </NewTaskContent>
  );
};
