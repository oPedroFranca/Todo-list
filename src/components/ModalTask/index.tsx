import React, { useContext } from 'react';

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

  return (
    <ModalContainer>
      <ModalTaskContent>
        <TaskFormDiv>
          <TasksForm />
        </TaskFormDiv>
        <ButtonDiv>
          <button
            onClick={() => {
              addTask(<Tasks />);
              closeModaTask();
            }}
          >
            Ready
          </button>
        </ButtonDiv>
      </ModalTaskContent>
    </ModalContainer>
  );
};
