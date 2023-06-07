import React from 'react';
import { Description } from './style';

type DescriptionTaskProps = {
  value: string;
};

export const DescriptionTask = ({ value }: DescriptionTaskProps) => {
  return (
    <Description>
      <textarea
        maxLength={150}
        value={value}
        readOnly
        placeholder="description for this task."
      />
    </Description>
  );
};
