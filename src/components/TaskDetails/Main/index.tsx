import React, { useEffect, useState } from 'react';
import { AllTasks, NumberTasks, TaskDetailsMain } from './style';
import { ActivityTasks } from '../ActivityTasks';
import { AddSubTask } from '../AddSubTask';
import { TaskSelected } from '../../../utils/TaskSelectedDetails';
import { Subtask } from '../../../context/DetailsTasks';

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
    updateLocalStorageSubtasks(updatedSubtasks);
  };

  const updateSubtask = (subtaskId: string, checked: boolean) => {
    const updatedSubtasks = subtasks.map((subtask) =>
      subtask.subtaskId === subtaskId ? { ...subtask, checked } : subtask,
    );
    updateLocalStorageSubtasks(updatedSubtasks);
  };

  const handleDeleteSubtask = (subtaskId: string) => {
    const updatedSubtasks = subtasks.filter(
      (subtask) => subtask.subtaskId !== subtaskId,
    );
    updateLocalStorageSubtasks(updatedSubtasks);
  };

  const updateLocalStorageSubtasks = (updatedSubtasks: Subtask[]) => {
    const savedTasks = localStorage.getItem('tasks');
    const tasks = savedTasks ? JSON.parse(savedTasks) : [];
    const selectedTaskIndex = tasks.findIndex(
      (task: { taskId: string }) => task.taskId === taskSelected?.taskId,
    );

    if (selectedTaskIndex !== -1) {
      tasks[selectedTaskIndex].subtasks = updatedSubtasks;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      setSubtasks(updatedSubtasks);
    }
  };

  return (
    <TaskDetailsMain>
      <AddSubTask onAddSubtask={handleAddSubtask} />

      <NumberTasks>Tasks - {subtasks.length}</NumberTasks>

      <AllTasks>
        {subtasks.map((subtask) => (
          <ActivityTasks
            key={subtask.subtaskId}
            subtaskDescription={subtask.subtaskDescription}
            isChecked={subtask.checked}
            updateSubtask={(checked) =>
              updateSubtask(subtask.subtaskId, checked)
            }
            onDelete={() => handleDeleteSubtask(subtask.subtaskId)}
          />
        ))}
      </AllTasks>
    </TaskDetailsMain>
  );
};
