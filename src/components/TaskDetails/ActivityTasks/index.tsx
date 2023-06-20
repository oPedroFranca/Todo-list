import React, { useRef, useEffect, useState } from 'react';
import { Activity, Check, CheckButton, DescriptionActivity } from './style';

export const ActivityTasks = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = '16px';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = '16px';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleCheckClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Activity>
      <Check checked={isChecked} onClick={handleCheckClick}>
        <CheckButton />
      </Check>
      <DescriptionActivity ref={textareaRef} onChange={handleTextareaChange} />
    </Activity>
  );
};
