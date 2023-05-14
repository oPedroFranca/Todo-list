import React from 'react';
import { LineDashed, Task } from './style';
import { DescriptionTask } from './Description';

export const Tasks = () => {
  return (
    <>
      <Task>
        <h1>Task 1</h1>

        <DescriptionTask />

        <LineDashed />
      </Task>
    </>
  );
};
