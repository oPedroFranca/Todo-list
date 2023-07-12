import React, { useContext } from 'react';
import { MainContent, Styled_Main } from './style';
import { CollectionTaskContext } from '../../../context/ColectionTaskContext';
import { CreateNewTask } from '../../../components/NewTaskButton';
import { useDetailTaskContext } from '../../../context/DetailsTasks';
import { TaskDetails } from '../../../components/TaskDetails';
import { Header } from '../Header';

export function Main() {
  const { showTasks } = useContext(CollectionTaskContext);
  const { isTaskDetailsOpen } = useDetailTaskContext();

  return (
    <Styled_Main>
      {isTaskDetailsOpen ? (
        <TaskDetails />
      ) : (
        <MainContent>
          <Header />

          {showTasks()}
          <CreateNewTask />
        </MainContent>
      )}
    </Styled_Main>
  );
}
