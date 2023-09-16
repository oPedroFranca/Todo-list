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
  taskStatus: string;
};

export const FooterTask = ({
  id,
  onStarClick,
  starActive,
  taskStatus,
}: FooterTaskProps) => {
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
