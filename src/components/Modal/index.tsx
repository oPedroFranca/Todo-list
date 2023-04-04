import React from 'react';
import { FaUser } from 'react-icons/fa';
import { SubmitButtonModal } from '../SubmitButton';
import {
  ModalDiv,
  ModalContent,
  ModalHeader,
  ModalMain,
  ModalForm,
  FormName,
  IconOption,
} from './style';

type ModalProps = {
  isOpen: boolean;
};

export const Modal = ({ isOpen }: ModalProps) => {
  return (
    <>
      {isOpen ? (
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

            <SubmitButtonModal />
          </ModalContent>
        </ModalDiv>
      ) : null}
    </>
  );
};
