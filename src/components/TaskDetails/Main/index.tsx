import React, { useEffect, useState } from 'react';
import { AllTasks, NumberTasks, TaskDetailsMain } from './style';
import { ActivityTasks } from '../ActivityTasks';
import { AddTask } from '../AddTask';
import { TaskSelected } from '../../../utils/TaskSelectedDetails';
import { Subtask } from '../../../context/DetailsTasks';

export const MainTaskDetails = () => {
  const taskSelected = TaskSelected();
  const [subtasks, setSubtasks] = useState<Subtask[]>(taskSelected!.subtasks);

  const handleAddSubtask = (newSubtask: Subtask) => {
    const updatedSubtasks = [...subtasks, newSubtask];
    setSubtasks(updatedSubtasks);
  };

  useEffect(() => {
    console.log('Subtasks:', subtasks);
  }, [subtasks]);

  return (
    <TaskDetailsMain>
      <AddTask onAddSubtask={handleAddSubtask} />

      <NumberTasks>Tasks - {subtasks.length}</NumberTasks>

      <AllTasks>
        {subtasks.map((subtask) => (
          <ActivityTasks key={subtask.subtaskId} />
        ))}
      </AllTasks>
    </TaskDetailsMain>
  );
};
