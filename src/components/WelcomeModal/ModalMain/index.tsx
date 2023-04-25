import React from 'react';
import { ModalMainDiv } from './style';
import { SubmitButtonModal } from '../SubmitButton';

export const ModalMain = () => {
  return (
    <>
      <ModalMainDiv>
        <h1>Welcome to My project</h1>
      </ModalMainDiv>
      <SubmitButtonModal />
    </>
  );
};
