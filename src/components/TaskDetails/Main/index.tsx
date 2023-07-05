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
    setSubtasks(updatedSubtasks);
    updateLocalStorageSubtasks(updatedSubtasks);
  };

  const updateSubtask = (subtaskId: string, checked: boolean) => {
    const updatedSubtasks = subtasks.map((subtask) =>
      subtask.subtaskId === subtaskId ? { ...subtask, checked } : subtask,
    );
    const updatedSubtask = updatedSubtasks.find(
      (subtask) => subtask.subtaskId === subtaskId,
    );

    setSubtasks(updatedSubtasks);
    updateLocalStorageSubtasks(updatedSubtasks);

    if (updatedSubtask) {
      console.log(updatedSubtask);
    }
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
