import React, { useContext, useState } from 'react';
import { FalseStatus, NewTask, NewTaskContent } from './style';
import { TaskContent } from '../../context/NewTaskContent';

export const CreateNewTask: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { openModalTask } = useContext(TaskContent);
  function handleModalIsOpen() {
    openModalTask();
  }

  return (
    <NewTaskContent>
      <div>
        <FalseStatus isHovered={isHovered}>Status</FalseStatus>
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
