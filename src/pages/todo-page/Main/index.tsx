import React from 'react';
import { MainContent, Styled_Main } from './style';
import { CreateNewTask } from './NewTaskButton';
import { CollectionTask } from './Task/CollectionTasks';

export function Main() {
  const taskLinst = CollectionTask();

  return (
    <Styled_Main>
      <MainContent>
        {taskLinst.showTasks()}
        <CreateNewTask />
      </MainContent>
    </Styled_Main>
  );
}
