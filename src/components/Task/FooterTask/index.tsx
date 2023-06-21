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

/**
 * Component that represents the footer of a task.
 * @param id The ID of the task.
 * @param onStarClick Function to handle priority star click.
 * @param onDeleteTask Function to handle task deletion.
 * @param starActive Indicates whether the task's priority is active.
 */
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

        {/* Task deletion component */}
        <Trash onClick={handleDeleteTask} />

        {/* Dot menu component */}
        <DotsMenu />
      </RightContent>
    </Content>
  );
};
