import React, { useContext, useState } from 'react';

import {
  ButtonDiv,
  ModalTaskContent,
  ModalContainer,
  TaskFormDiv,
} from './style';

import { CollectionTaskContext } from '../../context/ColectionTaskContext';
import { TaskContent } from '../../context/NewTaskContent';
import { Tasks } from '../Task';
import { TasksForm } from './TaskForm';

export const ModalTask = () => {
  const { addTask } = useContext(CollectionTaskContext);
  const { closeModaTask } = useContext(TaskContent);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    const task = (
      <Tasks taskName={taskName} taskDescription={taskDescription} />
    );
    addTask(task);
    closeModaTask();
  };

  return (
    <ModalContainer>
      <ModalTaskContent>
        <TaskFormDiv>
          <TasksForm
            taskName={taskName}
            setTaskName={setTaskName}
            taskDescription={taskDescription}
            setTaskDescription={setTaskDescription}
          />
        </TaskFormDiv>
        <ButtonDiv>
          <button onClick={handleAddTask}>Ready</button>
        </ButtonDiv>
      </ModalTaskContent>
    </ModalContainer>
  );
};