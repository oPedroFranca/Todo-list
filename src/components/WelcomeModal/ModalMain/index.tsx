import React, { useRef, useState } from 'react';
import { ModalMainDiv } from './style';
import { SubmitButtonModal } from '../SubmitButton';
import Slider from './Slider/Slider';
import type { Slider as SliderType } from './Slider/Slider';

export const ModalMain = () => {
  const sliderRef = useRef<SliderType>(null);
  const [isSliding, setIsSliding] = useState(false);

  const handleNextSlide = () => {
    if (!isSliding && sliderRef.current) {
      setIsSliding(true);
      sliderRef.current.handleNextSlide();
      setIsSliding(false);
    }
  };

  return (
    <>
      <ModalMainDiv>
        <Slider handleNextSlide={handleNextSlide} ref={sliderRef} />
      </ModalMainDiv>
      <SubmitButtonModal onClick={handleNextSlide} />
    </>
  );
};
