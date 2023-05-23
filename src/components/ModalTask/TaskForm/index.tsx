import React from 'react';
import { LineDashed, Task, TaskContentForm } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';

export const TasksForm = () => {
  return (
    <TaskContentForm>
      <div></div>
      <Task>
        <input placeholder="Task Name" />
        <DescriptionTask />
        <LineDashed />
        <FooterTask />
      </Task>
    </TaskContentForm>
  );
};
