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
        <Category>High</Category>
      </div>
      <Task>
        <h1>{taskName ? taskName : 'Task'}</h1>
        <DescriptionTask value={taskDescription} />
        <LineDashed />
        <FooterTask />
      </Task>
    </TaskContent>
  );
};
