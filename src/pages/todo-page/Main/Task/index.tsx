import React from 'react';
import { Category, LineDashed, Task, TaskContent } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';

export const Tasks = () => {
  return (
    <TaskContent>
      <div>
        <Category>Main</Category>
      </div>
      <Task>
        <h1>Task 1</h1>
        <DescriptionTask />
        <LineDashed />
        <FooterTask />
      </Task>
    </TaskContent>
  );
};
