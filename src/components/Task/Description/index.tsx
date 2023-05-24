import React from 'react';
import { Description } from './style';
import { DateToday } from '../Date';
import { useInput } from '../../../utils/useInput';

type DescriptionTaskProps = {
  value: string;
};

export const DescriptionTask = ({ value }: DescriptionTaskProps) => {
  const { editing, handleBlur } = useInput('');

  return (
    <Description>
      <textarea
        maxLength={150}
        value={value}
        onBlur={handleBlur}
        readOnly
        placeholder="description for this task."
      />

      <span>
        <DateToday />

        {editing && <p>{value.length}/150</p>}
      </span>
    </Description>
  );
};
