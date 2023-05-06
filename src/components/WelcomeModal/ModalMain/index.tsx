import React, { useRef } from 'react';
import { ModalMainDiv } from './style';
import { SubmitButtonModal } from '../SubmitButton';
import Slider, { SliderType } from './Slider/Slider';

export const ModalMain = () => {
  const sliderRef = useRef<SliderType>(null);

  return (
    <>
      <ModalMainDiv>
        <Slider handleNextSlide={goToNextSlide} ref={sliderRef} />
      </ModalMainDiv>
      <SubmitButtonModal onClick={goToNextSlide} />
    </>
  );
};
