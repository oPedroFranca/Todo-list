import React, { useContext, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import { LineDashed, Task, TaskContent } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';
import {
  CollectionTaskContext,
  Task as TaskType,
} from '../../context/ColectionTaskContext';
import { DateToday } from './Date';
import { Subtask, useDetailTaskContext } from '../../context/DetailsTasks';
import { CategoryComponent } from './Category';

type TasksProps = {
  task: TaskType;
};

export const Tasks = ({ task }: TasksProps) => {
  const { removeTask, toggleFavorite } = useContext(CollectionTaskContext);
  const { taskId, taskName, taskDescription, isFavorite, dateCreated } = task;
  const { openTaskDetails } = useDetailTaskContext();

  const [taskStatus, setTaskStatus] = useState('In Progress');

  useEffect(() => {
    setTaskStatus(calculateStatus(task.subtasks));
  }, [task.subtasks, setTaskStatus]);

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

  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 100, friction: 20 },
  });

  return (
    <animated.div style={animationProps}>
      <TaskContent>
        <div>
          <CategoryComponent isFavorite={task.isFavorite} />
        </div>
        <Task
          onClick={handleTaskClick}
          className={`task ${taskStatus.toLowerCase()}`}
        >
          <h1>{taskName ? taskName : 'Task'}</h1>
          <DescriptionTask value={taskDescription} />
          <DateToday value={dateCreated} />
          <LineDashed />
          <FooterTask
            id={taskId}
            subtasks={task.subtasks}
            onStarClick={handleStarClick}
            onDeleteTask={handleDeleteTask}
            starActive={isFavorite}
            taskStatus={taskStatus}
          />
        </Task>
      </TaskContent>
    </animated.div>
  );
};

const calculateStatus = (subtasks: Subtask[]) => {
  const total = subtasks.length;
  const checked = subtasks.filter((subtask) => subtask.checked).length;

  if (total === 0) {
    return 'In Progress';
  } else if (checked === total) {
    return 'Complete';
  } else {
    return 'In Progress';
  }
};
