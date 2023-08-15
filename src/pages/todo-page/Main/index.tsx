import React, { useContext, useState } from 'react';
import { MainContent, Styled_Main } from './style';
import { CollectionTaskContext } from '../../../context/ColectionTaskContext';
import { CreateNewTask } from '../../../components/NewTaskButton';
import { useDetailTaskContext } from '../../../context/DetailsTasks';
import { TaskDetails } from '../../../components/TaskDetails';
import { Header } from '../Header';
import { useCategoryContext } from '../../../context/CategoryContext';

export function Main() {
  const { showTasks } = useContext(CollectionTaskContext);
  const { isTaskDetailsOpen } = useDetailTaskContext();

  // State to store the search value and selected category
  const [searchValue, setSearchValue] = useState('');

  // Context for category
  const { selectedCategory } = useCategoryContext();

  // Function to update the search value when the Header's Search component is used
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <Styled_Main>
      {isTaskDetailsOpen ? (
        <TaskDetails />
      ) : (
        <MainContent>
          {/* Pass the handleSearch function to the Header component */}
          <Header onSearch={handleSearch} />

          {/* Pass the searchValue state and selectedCategory to the showTasks function */}
          {showTasks(searchValue, selectedCategory)}
          <CreateNewTask />
        </MainContent>
      )}
    </Styled_Main>
  );
}
