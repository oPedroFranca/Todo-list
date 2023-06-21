import React from 'react';
import { Description } from './style';
import { DateToday } from '../Date';
import { useInput } from '../../../../utils/useInput';

type DescriptionTaskProps = {
  value: string;
  onChange: (value: string) => void;
};

/**
 * Component responsible for rendering the description of a task.
 */
export const DescriptionTask = ({ value, onChange }: DescriptionTaskProps) => {
  const { editing, handleChange, handleBlur } = useInput(value);

  /**
   * Event handler for text field changes.
   * Updates the value and calls the handleChange function of the useInput hook.
   */
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
    handleChange(e);
  };

  return (
    <Description>
      <textarea
        maxLength={150}
        defaultValue={value}
        onBlur={handleBlur}
        onChange={handleTextareaChange}
        placeholder="description for this task."
      />

      <span>
        <DateToday />

        {editing && <p>{value.length}/150</p>}
      </span>
    </Description>
  );
};
