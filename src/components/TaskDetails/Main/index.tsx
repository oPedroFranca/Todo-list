import React from 'react';
import {
  AddButton,
  AddTask,
  AllTasks,
  NumberTasks,
  TaskDetailsMain,
} from './style';
import { ActivityTasks } from '../ActivityTasks';

export const MainTaskDetails = () => {
  return (
    <TaskDetailsMain>
      <AddTask>
        <div>
          <AddButton />
        </div>
        <p>Add a task</p>
      </AddTask>

      <NumberTasks>Tasks - 0</NumberTasks>
      <AllTasks>
        <ActivityTasks />
        <ActivityTasks />
        <ActivityTasks />
      </AllTasks>
    </TaskDetailsMain>
  );
};
