import React, { useRef, useEffect, useState } from 'react';
import { Activity, Check, CheckButton, DescriptionActivity } from './style';

type ActivityTasksProps = {
  subtaskDescription: string;
};

export const ActivityTasks: React.FC<ActivityTasksProps> = ({
  subtaskDescription,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    adjustTextareaHeight();
  }, []);

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
    setIsChecked(!isChecked);
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
    </Activity>
  );
};
