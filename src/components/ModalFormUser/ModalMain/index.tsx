import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import { FormName, ModalForm, ModalMainDiv } from './style';
import { capitalizeFirstLetter } from '../../../utils/CapitalizeFirstLetter';
import { IconSelected } from './iconSelected';
import { IconOptionUser } from './IconOptionUser';
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
  const [selectedIcon, setSelectedIcon] = useState(iconFilePaths[0]);

  const handleFirstNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFirstName(capitalizeFirstLetter(event.target.value));
  };

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
      <SubmitButtonModal icon={selectedIcon} name={firstName} />
    </>
  );
};
