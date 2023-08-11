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
import { useDetailTaskContext } from '../../context/DetailsTasks';
import { CategoryComponent } from './Category';
import { calculateStatus } from './utils';
import { StatusTaskContext } from '../../context/StatusTasksContext';

type TasksProps = {
  task: TaskType;
};

export const Tasks = ({ task }: TasksProps) => {
  // Contexts
  const { removeTask, toggleFavorite, taskList } = useContext(
    CollectionTaskContext,
  );
  const { openTaskDetails } = useDetailTaskContext();
  const {
    setCompleted,
    numberCompleted,
    completedTasks,
    setCompletedTasks,
    setInProgress,
  } = useContext(StatusTaskContext);

  // Task properties
  const { taskId, taskName, taskDescription, isFavorite, dateCreated } = task;

  // Status and Effects
  const [taskStatus, setTaskStatus] = useState('In Progress');

  useEffect(() => {
    setTaskStatus(calculateStatus(taskId));
  }, [taskId]);

  useEffect(() => {
    updateCompletedTasks();
    updateInProgress();
  }, [completedTasks, taskList]);

  const updateCompletedTasks = () => {
    const status = calculateStatus(taskId);

    if (status === 'Complete' && !completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId]);
      setCompleted(numberCompleted + 1);
    } else if (status !== 'Complete' && completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter((id) => id !== taskId));
      setCompleted(numberCompleted - 1);
    }
  };

  const updateInProgress = () => {
    const completedTasksInList = completedTasks.filter((id) =>
      taskList.some((task) => task.taskId === id),
    );
    setInProgress(taskList.length - completedTasksInList.length);
  };

  // Event Handlers
  const handleTaskClick = () => {
    openTaskDetails(taskId);
  };

  const handleStarClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleFavorite(taskId);

    const { numberHighPriority, setHighPriority } =
      useContext(StatusTaskContext);

    if (!isFavorite) {
      setHighPriority(numberHighPriority + 1);
    } else {
      setHighPriority(numberHighPriority - 1);
    }
  };

  const handleDeleteTask = (
    taskId: string,
    event: React.MouseEvent<Element, MouseEvent>,
  ) => {
    event.stopPropagation();
    removeTask(taskId);
  };

  // Animation
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 100, friction: 20 },
  });

  return (
    <animated.div style={animationProps}>
      <TaskContent>
        <div>
          <CategoryComponent isFavorite={isFavorite} />
        </div>
        <Task
          onClick={handleTaskClick}
          className={`task ${taskStatus.toLowerCase()}`}
        >
          <h1>{taskName}</h1>
          <DescriptionTask value={taskDescription} />
          <DateToday value={dateCreated} />
          <LineDashed />
          <FooterTask
            id={taskId}
            subtasks={task.subtasks}
            onStarClick={handleStarClick}
            onDeleteTask={handleDeleteTask}
            starActive={isFavorite}
            calculateStatus={calculateStatus}
          />
        </Task>
      </TaskContent>
    </animated.div>
  );
};
