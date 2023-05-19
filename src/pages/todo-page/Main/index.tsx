import React, { useContext } from 'react';
import { MainContent, Styled_Main } from './style';
import { CollectionTaskContext } from '../../../context/ColectionTaskContext';
import { CreateNewTask } from '../../../components/NewTaskButton';

export function Main() {
  const { showTasks } = useContext(CollectionTaskContext);
  return (
    <Styled_Main>
      <MainContent>
        {showTasks()}
        <CreateNewTask />
      </MainContent>
    </Styled_Main>
  );
}
