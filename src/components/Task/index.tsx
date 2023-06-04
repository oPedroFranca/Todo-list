import React, { useContext } from 'react';
import { Category, LineDashed, Task, TaskContent } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';
import {
  CollectionTaskContext,
  Task as TaskType,
} from '../../context/ColectionTaskContext';

type TasksProps = {
  task: TaskType;
};

export const Tasks = ({ task }: TasksProps) => {
  const { removeTask, toggleFavorite } = useContext(CollectionTaskContext);
  const { taskId, taskName, taskDescription, isFavorite } = task;

  const handleStarClick = () => {
    toggleFavorite(taskId);
  };

  const handleDeleteTask = () => {
    removeTask(taskId);
  };

  return (
    <TaskContent>
      <div>
        <Category active={isFavorite}>High</Category>
      </div>
      <Task>
        <h1>{taskName ? taskName : 'Task'}</h1>
        <DescriptionTask value={taskDescription} />
        <LineDashed />
        <FooterTask
          id={taskId}
          onStarClick={handleStarClick}
          onDeleteTask={handleDeleteTask}
          starActive={isFavorite}
        />
      </Task>
    </TaskContent>
  );
};
