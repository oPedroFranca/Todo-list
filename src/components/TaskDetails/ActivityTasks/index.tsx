import React, { useRef, useEffect } from 'react';
import { Activity, Check, CheckButton, DescriptionActivity } from './style';

export const ActivityTasks = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

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

  return (
    <Activity>
      <Check>
        <CheckButton />
      </Check>
      <DescriptionActivity ref={textareaRef} onChange={handleTextareaChange} />
    </Activity>
  );
};
