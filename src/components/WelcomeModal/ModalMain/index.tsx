import React, { useRef } from 'react';
import { ModalMainDiv } from './style';
import { SubmitButtonModal } from '../SubmitButton';
import Slider from './Slider/Slider';
import type { Slider as SliderType } from './Slider/Slider';

export const ModalMain = () => {
  const sliderRef = useRef<SliderType>(null);

  const goToNextSlide = () => {
    try {
      sliderRef.current?.handleNextSlide();
    } catch (error) {
      console.error(`Error while calling handleNextSlide: ${error}`);
    }
  };

  return (
    <>
      <ModalMainDiv>
        <Slider handleNextSlide={goToNextSlide} ref={sliderRef} />
      </ModalMainDiv>
      <SubmitButtonModal onClick={goToNextSlide} />
    </>
  );
};
