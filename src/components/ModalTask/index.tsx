import React, { useContext, useEffect, useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleAddTask = () => {
    const taskId = uuidv4();

    addTask({ taskId, taskName, taskDescription });
    closeModalTask();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        // Check if the pressed key is ESC and the modal is open
        closeModalTask();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModalTask, isModalOpen]);

  useEffect(() => {
    setIsModalOpen(true);
  }, [closeModalTask]);

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
