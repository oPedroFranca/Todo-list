import { Subtask } from '../../../context/DetailsTasks';

export const updateLocalStorageSubtasks = (
  updatedSubtasks: Subtask[],
  subtaskId: string,
  taskSelected: any,
) => {
  const savedTasks = localStorage.getItem('tasks');
  const tasks = savedTasks ? JSON.parse(savedTasks) : [];
  const selectedTaskIndex = tasks.findIndex(
    (task: { taskId: string }) => task.taskId === taskSelected?.taskId,
  );

  if (selectedTaskIndex !== -1) {
    tasks[selectedTaskIndex].subtasks = updatedSubtasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Update the 'checked' value of the subtask in localStorage
    const selectedSubtaskIndex = updatedSubtasks.findIndex(
      (subtask) => subtask.subtaskId === subtaskId,
    );

    if (selectedSubtaskIndex !== -1) {
      tasks[selectedTaskIndex].subtasks[selectedSubtaskIndex].checked =
        updatedSubtasks[selectedSubtaskIndex].checked;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
};
