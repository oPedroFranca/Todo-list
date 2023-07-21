import React, { useContext, useState } from 'react';
import { Bell, CategoryTask, Styled_Header, Today } from './style.js';
import { Search } from '../../../components/Search/index.js';
import { StackDays } from '../../../components/StackDays/index.js';
import { CollectionTaskContext } from '../../../context/ColectionTaskContext.js';

interface Props {
  onSearch: (searchTerm: string) => void;
}

export function Header({ onSearch }: Props) {
  const { taskList } = useContext(CollectionTaskContext);
  const [bellClicked, setBellClicked] = useState(false);
  const [, setSearchValue] = useState('');

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}, ${currentDate.toLocaleString(
    'default',
    { month: 'short' },
  )} ${currentDate.getDate()}`;

  const handleSearch = (value: string) => {
    setSearchValue(value);

    // Pass the search value to the onSearch function in the Main component
    onSearch(value);
  };

  return (
    <>
      <Styled_Header>
        <Search onSearch={handleSearch} />
        <Today>{formattedDate}</Today>
        <div>
          <Bell
            onClick={() => {
              setBellClicked(!bellClicked);
            }}
            isbellClicked={bellClicked}
          />
          <StackDays />
        </div>
      </Styled_Header>
      <CategoryTask>
        <h1>All tasks ({taskList.length} tasks)</h1>
      </CategoryTask>
    </>
  );
}
