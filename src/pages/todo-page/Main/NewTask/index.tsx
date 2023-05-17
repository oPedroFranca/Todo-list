import React, { useState } from 'react';
import { FalseCategory, NewTask, NewTaskContent } from './style';

interface CreateNewTaskProps {
  onClick: () => void;
}

export const CreateNewTask: React.FC<CreateNewTaskProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NewTaskContent>
      <div>
        <FalseCategory isHovered={isHovered}>Task</FalseCategory>
      </div>
      <NewTask
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        Add New Task
      </NewTask>
    </NewTaskContent>
  );
};
