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
import { CapitalizeFirstLetter } from '../../utils/CapitalizeFirstLetter';

/**
 * Component responsible for rendering the task modal.
 */
export const ModalTask = () => {
  const { addTask } = useContext(CollectionTaskContext);
  const { closeModalTask } = useContext(TaskContent);
  const [tasksName, setTasksName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

  /**
   * Event handler for adding a new task.
   * Generate a unique ID, format the task name, and add the task using the context's addTask function.
   * Closes the task modal after adding the task.
   */
  const handleAddTask = () => {
    const taskId = uuidv4();

    let taskName: string = tasksName;

    if (taskName === '') taskName = 'Task';
    else taskName = CapitalizeFirstLetter(tasksName);

    addTask({
      taskId,
      taskName,
      taskDescription,
      isFavorite: false,
      subtasks: [],
    });
    closeModalTask();
  };

  /**
   * Side effect to close task modal when ESC key is pressed.
   * The effect is added and removed when mounting and dismounting the component.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModalTask();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModalTask, isModalOpen]);

  /**
   * Side effect to keep modal open when closing task modal.
   * The effect is triggered whenever closeModalTask is called.
   */
  useEffect(() => {
    setIsModalOpen(true);
  }, [closeModalTask]);

  return (
    <ModalContainer>
      <ModalTaskContent>
        <TaskFormDiv>
          {/* Task form component */}
          <TasksForm
            taskName={tasksName}
            setTaskName={setTasksName}
            taskDescription={taskDescription}
            setTaskDescription={setTaskDescription}
          />
        </TaskFormDiv>
        <ButtonDiv>
          {/* Confirmation button to add the task */}
          <button onClick={handleAddTask}>Ready</button>
        </ButtonDiv>
      </ModalTaskContent>
    </ModalContainer>
  );
};
