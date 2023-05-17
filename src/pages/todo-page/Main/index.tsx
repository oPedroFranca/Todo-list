import React from 'react';
import { MainContent, Styled_Main } from './style';
import { CreateNewTask } from './NewTask';
import { CollectionTask } from './Task/CollectionTasks';
import { Tasks } from './Task';

export function Main() {
  const taskLinst = CollectionTask();

  const addTasks = () => {
    taskLinst.addTask(<Tasks />);
  };

  return (
    <Styled_Main>
      <MainContent>
        {taskLinst.showTasks()}
        <CreateNewTask onClick={addTasks} />
      </MainContent>
    </Styled_Main>
  );
}
