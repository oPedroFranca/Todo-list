import { useContext } from 'react';
import { CollectionTaskContext } from '../context/ColectionTaskContext';
import { DetailTaskContext } from '../context/DetailsTasks';

export const TaskSelected = () => {
  const { taskList } = useContext(CollectionTaskContext);
  const { taskSelected } = useContext(DetailTaskContext);

  const selectedTask = taskList.find((task) => task.taskId === taskSelected());

  return selectedTask;
};
