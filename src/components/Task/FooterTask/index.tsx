import React, { useEffect, useState } from 'react';
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
};

/**
 * Component that represents the footer of a task.
 * @param id The ID of the task.
 * @param subtasks The array of subtasks.
 * @param onStarClick Function to handle priority star click.
 * @param onDeleteTask Function to handle task deletion.
 * @param starActive Indicates whether the task's priority is active.
 */
export const FooterTask = ({
  id,
  subtasks,
  onStarClick,
  onDeleteTask,
  starActive,
}: FooterTaskProps) => {
  const [status, setStatus] = useState<string>('Uncompleted');

  useEffect(() => {
    const checked = subtasks.filter((subtask) => subtask.checked).length;
    const total = subtasks.length;
    const newStatus = calculateStatus(total, checked);

    setStatus(newStatus);
  }, [subtasks]);

  const calculateStatus = (total: number, checked: number) => {
    if (total === 0) {
      return 'In Progress';
    } else if (checked === total) {
      return 'Complete';
    } else {
      return 'Uncompleted';
    }
  };

  const handleDeleteTask = (event: React.MouseEvent<Element, MouseEvent>) => {
    onDeleteTask(id, event);
  };

  return (
    <Content>
      <LeftContent>
        <StatusTask status={status}>{status}</StatusTask>
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
