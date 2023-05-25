import React from 'react';
import { LineDashed, Task, TaskContentForm } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';

type TasksFormProps = {
  taskName: string;
  setTaskName: (value: string) => void;
  taskDescription: string;
  setTaskDescription: (value: string) => void;
};

export const TasksForm = ({
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
}: TasksFormProps) => {
  return (
    <TaskContentForm>
      <Task>
        <input
          placeholder="Task Name"
          value={taskName}
          maxLength={29}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <DescriptionTask
          value={taskDescription}
          onChange={(value) => setTaskDescription(value)}
        />
        <LineDashed />
        <FooterTask />
      </Task>
    </TaskContentForm>
  );
};
