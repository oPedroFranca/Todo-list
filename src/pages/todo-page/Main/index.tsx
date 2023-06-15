import React, { useContext } from 'react';
import { MainContent, Styled_Main } from './style';
import { CollectionTaskContext } from '../../../context/ColectionTaskContext';
import { CreateNewTask } from '../../../components/NewTaskButton';
import { useDetailTaskContext } from '../../../context/DetailsTasks';
import { TaskDetails } from '../../../components/TaskDetails';

export function Main() {
  return (
    <Styled_Main>
      {isTaskDetailsOpen ? (
        <TaskDetails />
      ) : (
        <MainContent>
          {showTasks()}
          <CreateNewTask />
        </MainContent>
      )}
    </Styled_Main>
  );
}
