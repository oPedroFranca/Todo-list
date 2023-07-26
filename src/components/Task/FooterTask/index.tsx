import React from 'react';
import { Content, LeftContent, RightContent, StatusTask } from './style';
import { StarPriority } from './StarPriority';
import { Trash } from './Trash';
import { DotsMenu } from './DotsMenu';
import { Subtask } from '../../../context/DetailsTasks';

type FooterTaskProps = {
  id: string;
  subtasks: Subtask[];
  onStarClick: (event: React.MouseEvent) => void;
  onDeleteTask: (
    taskId: string,
    event: React.MouseEvent<Element, MouseEvent>,
  ) => void;
  starActive: boolean;
  calculateStatus: (taskId: string, subtasks: Subtask[]) => string; // Atualize o tipo para corresponder à função correta
};

export const FooterTask = ({
  id,
  subtasks,
  onStarClick,
  starActive,
  calculateStatus,
}: FooterTaskProps) => {
  const taskStatus = calculateStatus(id, subtasks);

  return (
    <Content>
      <LeftContent>
        <StatusTask status={taskStatus}>{taskStatus}</StatusTask>
      </LeftContent>

      <RightContent>
        {/* Task priority component */}
        <StarPriority onClick={onStarClick} active={starActive} />

        {/* Task deletion component */}
        <Trash taskId={id} />

        {/* Dot menu component */}
        <DotsMenu />
      </RightContent>
    </Content>
  );
};
