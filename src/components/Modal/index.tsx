import React from 'react';
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
                <h1>To-do List</h1>
                <p>Manage your tasks simply and efficiently.</p>
              </span>
            </ModalHeader>
            <ModalMain>
              <ModalForm>
                <FormName>
                  <span id="Span_form_name">
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                  </span>
                  <span id="Span_form_Icon">
                    <img src="/public/icon_user/icon_coffee.png" alt="" />
                  </span>
                </FormName>
                <IconOption></IconOption>
              </ModalForm>
            </ModalMain>
          </ModalContent>
        </ModalDiv>
      ) : null}
    </>
  );
};
