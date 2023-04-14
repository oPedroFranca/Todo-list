import React, { useState } from 'react';
import { FormName, ModalForm, ModalMainDiv } from './style';
import { FaUser } from 'react-icons/fa';
import { IconSelected } from '../iconSelected';
import { IconOptionUser } from '../IconOptionUser';
import { SubmitButtonModal } from '../SubmitButton';

// List with paths to user icons
const iconFilePaths = [
  'public/icon_user/icon_apple.png',
  'public/icon_user/icon_basketball.png',
  'public/icon_user/icon_book.png',
  'public/icon_user/icon_cake.png',
  'public/icon_user/icon_carrot.png',
  'public/icon_user/icon_cherry.png',
  'public/icon_user/icon_clock.png',
  'public/icon_user/icon_cutlery.png',
  'public/icon_user/icon_coffee.png',
  'public/icon_user/icon_drugs.png',
  'public/icon_user/icon_egg.png',
  'public/icon_user/icon_globe.png',
  'public/icon_user/icon_hamburguer.png',
  'public/icon_user/icon_hat.png',
  'public/icon_user/icon_maple.png',
  'public/icon_user/icon_murshow.png',
  'public/icon_user/icon_paper.png',
  'public/icon_user/icon_pen.png',
  'public/icon_user/icon_pizza.png',
  'public/icon_user/icon_poison.png',
  'public/icon_user/icon_pumpkin.png',
  'public/icon_user/icon_seed.png',
  'public/icon_user/icon_ticken.png',
  'public/icon_user/icon_watermelon.png',
];

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
                onChange={handleFirstNameInputChange}
                type="text"
                placeholder="First Name"
                maxLength={10}
                required
              />
              <i>
                <FaUser />
              </i>
            </span>

            {/* Display of selected icon */}
            <IconSelected selectedIcon={selectedIcon} />
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
