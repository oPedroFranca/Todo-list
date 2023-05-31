import React, { useContext, useState } from 'react';
import { Category, LineDashed, Task, TaskContent } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';
import { CollectionTaskContext } from '../../context/ColectionTaskContext';

type TasksProps = {
  taskName: string;
  taskDescription: string;
};

export const Tasks = ({ taskName, taskDescription }: TasksProps) => {
  const [starActive, setStarActive] = useState(false);
  const { taskList, removeTask } = useContext(CollectionTaskContext);

  const task = taskList.find(
    (task) =>
      task.taskName === taskName && task.taskDescription === taskDescription,
  );

  if (!task) {
    return null; // Return null if the task is not found
  }

  const { taskId } = task;

  const handleStarClick = () => {
    setStarActive(!starActive);
  };

  const handleDeleteTask = () => {
    removeTask(taskId);
  };

  return (
    <TaskContent>
      <div>
        <Category active={starActive}>High</Category>
      </div>
      <Task>
        <h1>{taskName ? taskName : 'Task'}</h1>
        <DescriptionTask value={taskDescription} />
        <LineDashed />
        <FooterTask
          id={taskId}
          onStarClick={handleStarClick}
          onDeleteTask={handleDeleteTask}
          starActive={starActive}
        />
      </Task>
    </TaskContent>
  );
};
