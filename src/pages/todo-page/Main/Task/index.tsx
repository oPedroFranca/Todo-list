import React, { useState } from 'react';
import { Description, Task } from './style';

export const Tasks = () => {
  const [value, setValue] = useState('');
  const [editing, setEditing] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValue(value);
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  const charCount = value.length;
  return (
    <>
      <Task>
        <h1>Task 1</h1>

        <Description>
          <textarea
            rows={1}
            cols={4}
            maxLength={100}
            value={value}
            onBlur={handleBlur}
            onChange={handleInputChange}
            placeholder="description for this task."
          />

          {editing && (
            <span>
              <p>{charCount}/100</p>
            </span>
          )}
        </Description>
      </Task>
    </>
  );
};
