import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  ButtonDiv,
  ModalTaskContent,
  ModalContainer,
  TaskFormDiv,
} from './style';

import { TaskContent } from '../../context/NewTaskContent';
import { TasksForm } from './TaskForm';
import { CollectionTaskContext } from '../../context/ColectionTaskContext';

export const ModalTask = () => {
  const { addTask } = useContext(CollectionTaskContext);
  const { closeModalTask } = useContext(TaskContent);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    const taskId = uuidv4();

    addTask({ taskId, taskName, taskDescription });
    closeModalTask();
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
