import React from 'react';
import { MainContent, Styled_Main } from './style';
import { CreateNewTask } from './NewTask';
import { Tasks } from './Task';

export function Main() {
  return (
    <Styled_Main>
      <MainContent>
        <Tasks />
        <CreateNewTask />
      </MainContent>
    </Styled_Main>
  );
}
