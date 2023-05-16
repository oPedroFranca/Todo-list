import React, { useState } from 'react';
import { FalseCategory, NewTask, NewTaskContent } from './style';

export const CreateNewTask = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <NewTaskContent>
      <div>
        <FalseCategory isHovered={isHovered}>Task</FalseCategory>
      </div>
      <NewTask onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Add New Task
      </NewTask>
    </NewTaskContent>
  );
};
