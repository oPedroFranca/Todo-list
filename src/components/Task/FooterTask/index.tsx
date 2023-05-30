import React from 'react';
import { Content, LeftContent, RightContent, StatusTask } from './style';
import { StarPriority } from './StarPriority';
import { Trash } from './Trash';
import { DotsMenu } from './DotsMenu';

type FooterTaskProps = {
  id: string;
  onStarClick: () => void;
  onDeleteTask: (taskId: string) => void;
  starActive: boolean;
};
export const FooterTask = ({
  id,
  onStarClick,
  onDeleteTask,
  starActive,
}: FooterTaskProps) => {
  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <Content>
      <LeftContent>
        <StatusTask>Complete</StatusTask>
      </LeftContent>

      <RightContent>
        <StarPriority onClick={onStarClick} active={starActive} />
        <Trash onClick={handleDeleteTask} />
        <DotsMenu />
      </RightContent>
    </Content>
  );
};
