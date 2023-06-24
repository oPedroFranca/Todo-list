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

  return (
    <TaskDetailsMain>
      <AddSubTask onAddSubtask={handleAddSubtask} />

      <NumberTasks>Tasks - {subtasks.length}</NumberTasks>

      <AllTasks>
        {subtasks.map((subtask) => (
          <ActivityTasks
            key={subtask.subtaskId}
            subtaskDescription={subtask.subtaskDescription}
          />
        ))}
      </AllTasks>
    </TaskDetailsMain>
  );
};
