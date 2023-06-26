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
    // Get tasks from Local Storage
    const savedTasks = localStorage.getItem('tasks');
    const tasks = savedTasks ? JSON.parse(savedTasks) : [];

    // Find the task with the corresponding ID in Local Storage
    const selectedTask = tasks.find(
      (task: { taskId: string }) => task.taskId === taskSelected?.taskId,
    );

    // Update the subtasks state
    setSubtasks(selectedTask?.subtasks || []);
  }, [taskSelected]);

  const handleAddSubtask = (newSubtask: Subtask) => {
    const updatedSubtasks = [...subtasks, newSubtask];
    setSubtasks(updatedSubtasks);

    // Update the subtasks array in the selected task in Local Storage
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

  const updateSubtask = (subtaskId: string, checked: boolean) => {
    const updatedSubtasks = subtasks.map((subtask) => {
      if (subtask.subtaskId === subtaskId) {
        return { ...subtask, checked };
      }
      return subtask;
    });

    setSubtasks(updatedSubtasks);

    // Update the subtasks array in the selected task in Local Storage
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

  const handleDeleteSubtask = (subtaskId: string) => {
    const updatedSubtasks = subtasks.filter(
      (subtask) => subtask.subtaskId !== subtaskId,
    );
    setSubtasks(updatedSubtasks);

    // Atualize o array de subtasks no Local Storage

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
