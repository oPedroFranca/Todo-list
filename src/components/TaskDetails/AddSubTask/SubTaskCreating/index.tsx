import React from 'react';
import { CreatingButton, CreatingSubTaskContent } from './style';

type SubTaskCreatingProps = {
  handleSaveSubtask: () => void;
  subtaskDescription: string;
  onSubtaskDescriptionChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

export const SubTaskCreating: React.FC<SubTaskCreatingProps> = ({
  handleSaveSubtask,
  subtaskDescription,
  onSubtaskDescriptionChange,
}) => {
  return (
    <CreatingSubTaskContent>
      <input
        type="text"
        value={subtaskDescription}
        placeholder="Description for this"
        onChange={onSubtaskDescriptionChange}
      />
      <div>
        <CreatingButton onClick={handleSaveSubtask}>Save</CreatingButton>
      </div>
    </CreatingSubTaskContent>
  );
};
