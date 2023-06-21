/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { AddButton, AddTaskContent } from './style';
import { TaskSelected } from '../../../utils/TaskSelectedDetails';
import { DetailTaskContext } from '../../../context/DetailsTasks';

export const AddSubTask = ({
  onAddSubtask,
}: {
  onAddSubtask: (newSubtask: any) => void;
}) => {
  const { addDetailTaskToTask } = useContext(DetailTaskContext);
  const taskSelected = TaskSelected();

  const handleAddDetailsTask = () => {
    const newSubtask = addDetailTaskToTask(taskSelected!);

    // Check if taskSelected is defined
    if (taskSelected) {
      // Get tasks from Local Storage
      const savedTasks = localStorage.getItem('tasks');
      const tasks = savedTasks ? JSON.parse(savedTasks) : [];

      // Find the task with the corresponding ID in Local Storage
      const selectedTask = tasks.find(
        (task: { taskId: string }) => task.taskId === taskSelected.taskId,
      );

      if (selectedTask) {
        // Add the new subtask to the array of subtasks in the task
        selectedTask.subtasks.push(newSubtask);
        // Save the updated tasks back to Local Storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }

    onAddSubtask(newSubtask);
  };

  return (
    <AddTaskContent onClick={handleAddDetailsTask}>
      <div>
        <AddButton />
      </div>
      <p>Add a task</p>
    </AddTaskContent>
  );
};
