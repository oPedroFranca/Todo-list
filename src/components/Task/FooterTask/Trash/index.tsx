import React, { useContext } from 'react';
import { HiTrash } from 'react-icons/hi';
import { TrashContent } from './style';
import { ModalContext } from '../../../../context/ModalContext';

export const Trash = ({ taskId }: { taskId: string }) => {
  const { openDeleteTaskModal } = useContext(ModalContext);

  const openHandleDeleteTask = (
    event: React.MouseEvent<Element, MouseEvent>,
  ) => {
    event.stopPropagation();
    openDeleteTaskModal(taskId);
  };

  return (
    <>
      <TrashContent onClick={openHandleDeleteTask}>
        <HiTrash />
      </TrashContent>
    </>
  );
};
