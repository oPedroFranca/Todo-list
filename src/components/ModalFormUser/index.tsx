import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import { IconOptionUser } from './IconOptionUser';
import { SubmitButtonModal } from './SubmitButton';
import { IconSelected } from './iconSelected';
import {
  FormName,
  ModalContent,
  ModalDiv,
  ModalForm,
  ModalHeader,
  ModalHeaderDiv,
  ModalHeaderIcon,
  ModalHeaderInfo,
  ModalHeaderTitle,
  ModalMain,
} from './style';

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

export const ModalFormUser = () => {
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
    <ModalDiv>
      <ModalContent>
        <ModalHeader>
          <span>
            <ModalHeaderDiv>
              <ModalHeaderIcon src="public/icons/icon-Todo.png" alt="" />
              <ModalHeaderTitle>To-do List.</ModalHeaderTitle>
            </ModalHeaderDiv>

            <ModalHeaderInfo>
              Simplify your daily routine with the help of our intuitive <br />{' '}
              and easy-to-use to-do list.
            </ModalHeaderInfo>
          </span>
        </ModalHeader>
        <ModalMain>
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
        </ModalMain>

        {/* Form submit button */}
        <SubmitButtonModal name={firstName} />
      </ModalContent>
    </ModalDiv>
  );
};
