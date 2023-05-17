import { useState } from 'react';

export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [editing, setEditing] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValue(value);
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  return { value, editing, handleChange, handleBlur };
};
