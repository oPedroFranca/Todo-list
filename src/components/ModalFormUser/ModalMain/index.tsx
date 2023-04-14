import React, { useState } from 'react';
import { FormName, ModalForm, ModalMainDiv } from './style';
import { FaUser } from 'react-icons/fa';
import { IconSelected } from '../iconSelected';
import { IconOptionUser } from '../IconOptionUser';
import { SubmitButtonModal } from '../SubmitButton';

// List with paths to user icons
const iconNames = [
  'apple',
  'basketball',
  'book',
  'cake',
  'carrot',
  'cherry',
  'clock',
  'cutlery',
  'coffee',
  'drugs',
  'egg',
  'globe',
  'hamburguer',
  'hat',
  'maple',
  'murshow',
  'paper',
  'pen',
  'pizza',
  'poison',
  'pumpkin',
  'seed',
  'ticken',
  'watermelon',
];

const iconFilePaths = iconNames.map(
  (name) => `public/icon_user/icon_${name}.png`,
);

export const ModalMain = () => {
  const [firstName, setFirstName] = useState('');
  // Set the state for the selected icon, initialized with the first one in the list
  const [selectedIcon, setSelectedIcon] = useState(iconFilePaths[0]);

  // Function to update the state of the name field
  const handleFirstNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFirstName(event.target.value);
  };

  // Function to update the state of the selected icon
  const handleUserIconClick = (icon: string) => {
    setSelectedIcon(icon);
  };

  return (
    <>
      <ModalMainDiv>
        <ModalForm>
          <FormName>
            <span id="Span_form_name">
              {/* Name field with user icon */}
              <input
                type="text"
                placeholder="First Name"
                maxLength={10}
                required
                onChange={handleFirstNameInputChange}
              />
              <i>
                <FaUser />
              </i>
            </span>

            {/* Display of selected icon */}
            <IconSelected iconFilePath={selectedIcon} />
          </FormName>

          <IconOptionUser
            icons={iconFilePaths}
            onIconClick={handleUserIconClick}
          />
        </ModalForm>
        {/* Form submit button */}
      </ModalMainDiv>
      <SubmitButtonModal name={firstName} />
    </>
  );
};
