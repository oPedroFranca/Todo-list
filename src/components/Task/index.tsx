import React from 'react';
import { Category, LineDashed, Task, TaskContent } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';

type TasksProps = {
  taskName: string;
  taskDescription: string;
};

export const Tasks = ({ taskName, taskDescription }: TasksProps) => {
  return (
    <TaskContent>
      <div>
        <Category>Hight</Category>
      </div>
      <Task>
        <h1>{taskName}</h1>
        <DescriptionTask value={taskDescription} />
        <LineDashed />
        <FooterTask />
      </Task>
    </TaskContent>
  );
};
