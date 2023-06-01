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
  // Event handler for deleting the task
  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <Content>
      <LeftContent>
        <StatusTask>Complete</StatusTask>
      </LeftContent>

      <RightContent>
        {/* Task priority component */}
        <StarPriority onClick={onStarClick} active={starActive} />

        {/* Task exclusion component */}
        <Trash onClick={handleDeleteTask} />

        {/* Dot menu component */}
        <DotsMenu />
      </RightContent>
    </Content>
  );
};
