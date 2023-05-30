import React, { useContext, useState } from 'react';
import { Category, LineDashed, Task, TaskContent } from './style';
import { DescriptionTask } from './Description';
import { FooterTask } from './FooterTask';
import { CollectionTaskContext } from '../../context/ColectionTaskContext';

type TasksProps = {
  id: string;
  taskName: string;
  taskDescription: string;
};

export const Tasks = ({ id, taskName, taskDescription }: TasksProps) => {
  const [starActive, setStarActive] = useState(false);
  const { removeTask } = useContext(CollectionTaskContext);

  const handleStarClick = () => {
    setStarActive(!starActive);
  };

  const handleDeleteTask = () => {
    removeTask(id);
    console.log('Tarefa excluída!');
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
          id={id}
          onStarClick={handleStarClick}
          onDeleteTask={handleDeleteTask}
          starActive={starActive}
        />
      </Task>
    </TaskContent>
  );
};
