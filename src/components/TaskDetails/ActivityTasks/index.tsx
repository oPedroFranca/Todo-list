import React, { useEffect, useRef, useState } from 'react';
import {
  Activity,
  Check,
  CheckButton,
  CloseIcon,
  CloseIconContent,
  DescriptionActivity,
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
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Activity onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Check checked={isChecked} onClick={handleCheckClick}>
        <CheckButton />
      </Check>
      <DescriptionActivity
        checked={isChecked}
        ref={textareaRef}
        onChange={handleTextareaChange}
        value={subtaskDescription}
      />
      <CloseIconContent onClick={handleDeleteActivityTask}>
        <CloseIcon hovered={isHovered} />
      </CloseIconContent>
    </Activity>
  );
};
