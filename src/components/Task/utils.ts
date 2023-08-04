import { Subtask } from '../../context/DetailsTasks';

export const calculateStatus = (taskId: string) => {
  const savedTasks = localStorage.getItem('tasks');
  const tasks = savedTasks ? JSON.parse(savedTasks) : [];
  const selectedTask = tasks.find(
    (task: { taskId: string }) => task.taskId === taskId,
  );

  if (selectedTask) {
    const subtasks = selectedTask.subtasks;
    const total = subtasks.length;
    const checked = subtasks.filter(
      (subtask: Subtask) => subtask.checked,
    ).length;

    if (total === 0) {
      return 'In Progress';
    } else if (checked === total) {
      return 'Complete';
    } else {
      return 'In Progress';
    }
  }

  return 'In Progress';
};
