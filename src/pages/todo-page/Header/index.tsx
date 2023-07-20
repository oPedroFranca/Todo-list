import React, { useContext, useState } from 'react';
import { Bell, CategoryTask, Styled_Header, Today } from './style.js';
import { Search } from '../../../components/Search/index.js';
import { StackDays } from '../../../components/StackDays/index.js';
import { CollectionTaskContext } from '../../../context/ColectionTaskContext.js';

export function Header() {
  const { taskList } = useContext(CollectionTaskContext);
  const [bellClicked, setBellClicked] = useState(false);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}, ${currentDate.toLocaleString(
    'default',
    { month: 'short' },
  )} ${currentDate.getDate()}`;

  return (
    <>
      <Styled_Header>
        <Search />
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
