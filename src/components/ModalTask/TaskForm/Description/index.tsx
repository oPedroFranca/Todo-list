import React from 'react';
import { Description } from './style';
import { DateToday } from '../Date';
import { useInput } from '../../../../utils/useInput';

type DescriptionTaskProps = {
  value: string;
  onChange: (value: string) => void;
};

export const DescriptionTask = ({ value, onChange }: DescriptionTaskProps) => {
  const { editing, handleChange, handleBlur } = useInput(value);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
    handleChange(e); // Call the handleChange function of the useInput hook
  };
  return (
    <Description>
      <textarea
        maxLength={150}
        defaultValue={value} // Alterado de 'value' para 'defaultValue'
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
