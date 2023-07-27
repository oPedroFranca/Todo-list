import React, { useRef, useEffect } from 'react';
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
  // Reference to the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Clear the input and select the text
  const clearInputAndSelect = () => {
    onSubtaskDescriptionChange({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  // Side effect to focus on the input when the component is mounted
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Event handler for the keydown event on the input

  return (
    <CreatingSubTaskContent>
      {/* Input for the description of the subtask */}
      <input
        type="text"
        value={subtaskDescription}
        placeholder="Description for this"
        onChange={onSubtaskDescriptionChange}
        onKeyDown={handleKeyDown} // Add the keydown event handler
        ref={inputRef}
      />
      <div>
        {/* Button to save the subtask */}
        <CreatingButton
          onClick={() => {
            handleSaveSubtask(); // Call the function to save the subtask
            clearInputAndSelect(); // Clear the input and select the text
            if (inputRef.current) {
              inputRef.current.focus(); // Focus again on the input
            }
          }}
        />
      </div>
    </CreatingSubTaskContent>
  );
};
