import React from 'react';
import { FalseCategory, NewTask, NewTaskContent } from './style';

export const CreateNewTask = () => {
  return (
    <NewTaskContent>
      <div>
        <FalseCategory>Task</FalseCategory>
      </div>
      <NewTask>Add New Task</NewTask>
    </NewTaskContent>
  );
};
