import React, { useRef } from 'react';
import { ModalMainDiv } from './style';
import { SubmitButtonModal } from '../SubmitButton';
import Slider, { SliderType } from './Slider/Slider';

/**
 * Main component of the modal.
 */
export const ModalMain = (): JSX.Element => {
  const sliderRef = useRef<SliderType>(null);

  /**
   * Advance to the next slide
   */
  const goToNextSlide = (): void => {
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
