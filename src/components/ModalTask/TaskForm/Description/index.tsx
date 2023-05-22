import React from 'react';
import { Description } from './style';
import { DateToday } from '../Date';
import { useInput } from '../../../../utils/useInput';

export const DescriptionTask = () => {
  const { value, editing, handleChange, handleBlur } = useInput('');

  return (
    <Description>
      <textarea
        maxLength={150}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="description for this task."
      />

      <span>
        <DateToday />

        {editing && <p>{value.length}/150</p>}
      </span>
    </Description>
  );
};
