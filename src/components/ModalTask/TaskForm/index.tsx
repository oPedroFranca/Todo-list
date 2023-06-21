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

/**
 * Component responsible for rendering the task form.
 */
export const TasksForm = ({
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
}: TasksFormProps) => {
  return (
    <TaskContentForm>
      <Task>
        {/* Input field for task name */}
        <input
          placeholder="Task Name"
          value={taskName}
          maxLength={25}
          onChange={(e) => setTaskName(e.target.value)}
        />

        {/* Component for task description */}
        <DescriptionTask
          value={taskDescription}
          onChange={(value) => setTaskDescription(value)}
        />

        {/* Dashed line */}
        <LineDashed />

        {/* Task footer component */}
        <FooterTask />
      </Task>
    </TaskContentForm>
  );
};
