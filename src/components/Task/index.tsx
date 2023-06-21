import React, { useContext } from 'react';
import { LineDashed, Task, TaskContent } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';
import {
  CollectionTaskContext,
  Task as TaskType,
} from '../../context/ColectionTaskContext';
import { DateToday } from './Date';
import { useDetailTaskContext } from '../../context/DetailsTasks';
import { CategoryComponent } from './Category';

type TasksProps = {
  task: TaskType;
};

/**
 * Component that represents a task.
 * @param task The task to display.
 */
export const Tasks = ({ task }: TasksProps) => {
  const { removeTask, toggleFavorite } = useContext(CollectionTaskContext);
  const { taskId, taskName, taskDescription, isFavorite, dateCreated } = task;

  const { openTaskDetails } = useDetailTaskContext();
  const handleTaskClick = () => {
    openTaskDetails(taskId);
  };

  const handleStarClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleFavorite(taskId);
  };

  const handleDeleteTask = (
    taskId: string,
    event: React.MouseEvent<Element, MouseEvent>,
  ) => {
    event.stopPropagation();
    removeTask(taskId);
  };

  return (
    <TaskContent>
      <div>
        <CategoryComponent isFavorite={task.isFavorite} />
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
