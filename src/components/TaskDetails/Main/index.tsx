import React, { useEffect, useState } from 'react';
import { AllTasks, NumberTasks, TaskDetailsMain } from './style';
import { ActivityTasks } from '../ActivityTasks';
import { AddSubTask } from '../AddSubTask';
import { TaskSelected } from '../../../utils/TaskSelectedDetails';
import { Subtask } from '../../../context/DetailsTasks';
import { updateLocalStorageSubtasks } from './utils';

export const MainTaskDetails = () => {
  const taskSelected = TaskSelected();
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    const tasks = savedTasks ? JSON.parse(savedTasks) : [];
    const selectedTask = tasks.find(
      (task: { taskId: string }) => task.taskId === taskSelected?.taskId,
    );

    setSubtasks(selectedTask?.subtasks || []);
  }, [taskSelected]);

  const handleAddSubtask = (newSubtask: Subtask) => {
    const updatedSubtasks = [...subtasks, newSubtask];
    setSubtasks(updatedSubtasks);
    updateLocalStorageSubtasks(
      updatedSubtasks,
      newSubtask.subtaskId,
      taskSelected,
    );
  };

  const updateSubtask = (subtaskId: string, checked: boolean) => {
    const updatedSubtasks = subtasks.map((subtask) =>
      subtask.subtaskId === subtaskId ? { ...subtask, checked } : subtask,
    );

    setSubtasks(updatedSubtasks);
    updateLocalStorageSubtasks(updatedSubtasks, subtaskId, taskSelected);
  };

  const handleDeleteSubtask = (subtaskId: string) => {
    const updatedSubtasks = subtasks.filter(
      (subtask) => subtask.subtaskId !== subtaskId,
    );
    updateLocalStorageSubtasks(updatedSubtasks, subtaskId, taskSelected);
  };

  return (
    <TaskDetailsMain>
      <AddSubTask onAddSubtask={handleAddSubtask} />

      <NumberTasks>Tasks - {subtasks.length}</NumberTasks>

      <AllTasks>
        {subtasks.map((subtask) => (
          <ActivityTasks
            key={subtask.subtaskId}
            subtaskId={subtask.subtaskId}
            subtaskDescription={subtask.subtaskDescription}
            isChecked={subtask.checked}
            updateSubtask={(subtaskId, checked) =>
              updateSubtask(subtaskId, checked)
            }
            onDelete={(subtaskId) => handleDeleteSubtask(subtaskId)}
          />
        ))}
      </AllTasks>
    </TaskDetailsMain>
  );
};
