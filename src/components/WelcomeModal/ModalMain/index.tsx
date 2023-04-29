import React from 'react';
import { SubmitButtonModal } from '../SubmitButton';
import { ModalMainDiv } from './style';

export const ModalMain = () => {
  return (
    <>
      <ModalMainDiv>
        <img src="public/icons/Hello.png" alt="" />
        <div>
          <h1>Welcome to my project.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Consectetur
            sed eveniet veniam rem, alias nesciunt magnam doloribus, facere
          </p>
        </div>
      </ModalMainDiv>
      <SubmitButtonModal />
    </>
  );
};
