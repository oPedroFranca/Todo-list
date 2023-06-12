import React from 'react';
import { Content, LeftContent, RightContent, StatusTask } from './style';
import { StarPriority } from './StarPriority';
import { Trash } from './Trash';
import { DotsMenu } from './DotsMenu';

type FooterTaskProps = {
  id: string;
  onStarClick: (event: React.MouseEvent) => void;
  onDeleteTask: (
    taskId: string,
    event: React.MouseEvent<Element, MouseEvent>,
  ) => void;
  starActive: boolean;
};

export const FooterTask = ({
  id,
  onStarClick,
  onDeleteTask,
  starActive,
}: FooterTaskProps) => {
  // Event handler for deleting the task
  const handleDeleteTask = (event: React.MouseEvent<Element, MouseEvent>) => {
    onDeleteTask(id, event);
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
