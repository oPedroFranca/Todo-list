import React, { useEffect, useRef, useState } from 'react';
import {
  Activity,
  Check,
  CheckButton,
  DescriptionActivity,
  TrashContent,
  TrashIcon,
} from './style';

type ActivityTasksProps = {
  subtaskId: string;
  subtaskDescription: string;
  isChecked: boolean;
  updateSubtask: (subtaskId: string, checked: boolean) => void;
  onDelete: (subtaskId: string) => void;
};

export const ActivityTasks: React.FC<ActivityTasksProps> = ({
  subtaskId,
  subtaskDescription,
  isChecked: initialChecked,
  updateSubtask,
  onDelete,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

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

  const handleCheckClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    updateSubtask(subtaskId, newChecked);
  };

  const handleDeleteActivityTask = () => {
    onDelete(subtaskId);
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
