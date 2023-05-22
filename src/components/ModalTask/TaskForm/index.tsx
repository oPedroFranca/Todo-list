import React from 'react';
import { Category, LineDashed, Task, TaskContentForm } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';

export const TasksForm = () => {
  return (
    <TaskContentForm>
      <div>
        <Category>Status</Category>
      </div>
      <Task>
        <h1>Task</h1>
        <DescriptionTask />
        <LineDashed />
        <FooterTask />
      </Task>
    </TaskContentForm>
  );
};
