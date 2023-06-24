import React, { useState } from 'react';
import { CreatingButton, CreatingSubTaskContent } from './style';

type SubTaskCreatingProps = {
  handleSaveSubtask: (subtaskDescription: string) => void;
};

export const SubTaskCreating: React.FC<SubTaskCreatingProps> = ({
  handleSaveSubtask,
}) => {
  const [subtaskDescription, setSubtaskDescription] = useState('');

  const handleSubtaskDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSubtaskDescription(event.target.value);
  };

  const handleSaveButtonClick = () => {
    handleSaveSubtask(subtaskDescription);
  };

  return (
    <CreatingSubTaskContent>
      <input
        type="text"
        value={subtaskDescription}
        placeholder="Description for this"
        onChange={handleSubtaskDescriptionChange}
      />
      <div>
        <CreatingButton onClick={handleSaveButtonClick}>Save</CreatingButton>
      </div>
    </CreatingSubTaskContent>
  );
};
