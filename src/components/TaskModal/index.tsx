import React, { useContext } from 'react';

import { ModalTaskContent, ModalTaskDiv } from './style';
import { TaskContent } from '../../context/NewTaskContent';
import { CollectionTaskContext } from '../../context/ColectionTaskContext';
import { Tasks } from '../Task';

export const ModalTask = () => {
  const { addTask } = useContext(CollectionTaskContext);
  const { closeModaTask } = useContext(TaskContent);

  return (
    <ModalTaskDiv>
      <ModalTaskContent>
        <Tasks />
        <button
          onClick={() => {
            addTask(<Tasks />);
            closeModaTask();
          }}
        >
          Ready
        </button>
      </ModalTaskContent>
    </ModalTaskDiv>
  );
};
