import React, { useContext, useState, useEffect } from 'react';
import {
  CloseIcon,
  CloseSpan,
  DeleteModalContent,
  DeleteModalDiv,
  DoneIcon,
  DoneSpan,
} from './style';
import { ModalContext } from '../../context/ModalContext';
import { CollectionTaskContext } from '../../context/ColectionTaskContext';

export const DeleteTaskModal = () => {
  const { closeDeleteTaskModal, taskClicked } = useContext(ModalContext);
  const { removeTask } = useContext(CollectionTaskContext);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = () => {
    setVisible(false);
    closeDeleteTaskModal();
  };

  const handleDoneClick = () => {
    removeTask(taskClicked);
    closeDeleteTaskModal();
    setVisible(false);
  };

  if (!visible) {
    return null; // Renderiza nada se visible for false
  }

  return (
    <div>
      <DeleteModalDiv>
        <DeleteModalContent>
          <p>Delete</p>

          <CloseSpan onClick={handleCloseClick}>
            <CloseIcon />
          </CloseSpan>
          <DoneSpan onClick={handleDoneClick}>
            <DoneIcon />
          </DoneSpan>
        </DeleteModalContent>
      </DeleteModalDiv>
    </div>
  );
};
