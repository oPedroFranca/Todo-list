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
            <div>
              <img src="public/icons/icon-Todo.png" alt="" />
              <h1>To-do List.</h1>
            </div>

            <p>
              Simplify your daily routine with the help of our intuitive <br />{' '}
              and easy-to-use to-do list.
            </p>
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
            <IconOptionUser />
          </ModalForm>
        </ModalMain>

        <SubmitButtonModal name={name} />
      </ModalContent>
    </ModalDiv>
  );
};
