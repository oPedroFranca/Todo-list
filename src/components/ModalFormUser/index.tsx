import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IconOptionUser } from '../IconOptionUser';
import { SubmitButtonModal } from '../SubmitButton';
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

export const ModalFormUser = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="First Name"
                  maxLength={10}
                  required
                />
                <i>
                  <FaUser />
                </i>
              </span>

              <span id="Span_form_Icon">
                <img src="/public/icon_user/icon_coffee.png" alt="" />
              </span>
            </FormName>
            <IconOptionUser
              icons={[
                'public/icon_user/icon_apple.png',
                'public/icon_user/icon_apple.png',
                'public/icon_user/icon_apple.png',
                'public/icon_user/icon_apple.png',
              ]}
            />
          </ModalForm>
        </ModalMain>

        <SubmitButtonModal name={name} />
      </ModalContent>
    </ModalDiv>
  );
};
