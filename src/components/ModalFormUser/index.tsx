import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { SubmitButtonModal } from '../SubmitButton';
import {
  FormName,
  IconOption,
  ModalContent,
  ModalDiv,
  ModalForm,
  ModalHeader,
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
          <img src="public/icons/icon-Todo.png" alt="" />
          <span>
            <h1>To-do List.</h1>
            <p>manage your tasks in a simple and efficient way.</p>
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
            <IconOption></IconOption>
          </ModalForm>
        </ModalMain>

        <SubmitButtonModal name={name} />
      </ModalContent>
    </ModalDiv>
  );
};
