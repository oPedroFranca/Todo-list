import React, { useRef, useEffect } from 'react';
import {
  Activity,
  Check,
  CheckButton,
  DescriptionActivity,
  TrashContent,
  TrashIcon,
} from './style';
import { TaskSelected } from '../../../utils/TaskSelectedDetails';

type ActivityTasksProps = {
  subtaskDescription: string;
  isChecked: boolean;
  updateSubtask: (checked: boolean) => void;
  onDelete: () => void;
};

export const ActivityTasks: React.FC<ActivityTasksProps> = ({
  subtaskDescription,
  isChecked,
  updateSubtask,
  onDelete,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    adjustTextareaHeight();
  }, [isChecked]);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = '16px';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleTextareaChange = () => {
    adjustTextareaHeight();
  };

  const taskSelected = TaskSelected();
  const handleCheckClick = () => {
    const subtasks = taskSelected?.subtasks;
    updateSubtask(!isChecked);
    const subtask = subtasks?.find(
      (subtask) => subtask.subtaskDescription === subtaskDescription,
    );
    const subtaskId = subtask?.subtaskId;
    console.log(subtaskId);
  };

  const handleDeleteActivityTask = () => {
    onDelete();
  };

  return (
    <Activity>
      <Check checked={isChecked} onClick={handleCheckClick}>
        <CheckButton />
      </Check>
      <DescriptionActivity
        checked={isChecked}
        ref={textareaRef}
        onChange={handleTextareaChange}
        value={subtaskDescription}
      />
      <TrashContent onClick={handleDeleteActivityTask}>
        <TrashIcon />
      </TrashContent>
    </Activity>
  );
};
