import React, { useContext } from 'react';
import { Category, LineDashed, Task, TaskContent } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';
import {
  CollectionTaskContext,
  Task as TaskType,
} from '../../context/ColectionTaskContext';
import { DateToday } from './Date';

type TasksProps = {
  task: TaskType;
};

export const Tasks = ({ task }: TasksProps) => {
  const { removeTask, toggleFavorite, selectTask } = useContext(
    CollectionTaskContext,
  );
  const { taskId, taskName, taskDescription, isFavorite, dateCreated } = task;

  const handleTaskClick = () => {
    selectTask(taskId);
    console.log(taskId);
  };

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
      <Task onClick={handleTaskClick}>
        <h1>{taskName ? taskName : 'Task'}</h1>
        <DescriptionTask value={taskDescription} />
        <DateToday value={dateCreated} />
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
