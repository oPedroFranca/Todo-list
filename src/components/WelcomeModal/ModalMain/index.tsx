import React from 'react';
import { SubmitButtonModal } from '../SubmitButton';
import { ModalMainDiv } from './style';

import { Slider } from './Slider/Slider';

export const ModalMain = () => {
  const handleNextClick = () => {
    console.log('cloicado');
  };

  return (
    <>
      <ModalMainDiv>
        <Slider />
      </ModalMainDiv>
      <SubmitButtonModal onClick={handleNextClick} />
    </>
  );
};
