import React, { useState } from 'react';
import { Description } from './style';
import { DateToday } from '../Date';

export const DescriptionTask = () => {
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

  return (
    <Description>
      <textarea
        maxLength={150}
        value={value}
        onBlur={handleBlur}
        onChange={handleInputChange}
        placeholder="description for this task."
      />

      <span>
        <DateToday />

        {editing && <p>{value.length}/150</p>}
      </span>
    </Description>
  );
};
