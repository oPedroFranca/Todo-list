/* eslint-disable react/display-name */
import React, { useImperativeHandle, useRef, useState } from 'react';
import { SubmitButtonModal } from '../SubmitButton';
import { ModalMainDiv } from './style';

/* eslint-disable react/jsx-key */
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { FirstSlide } from './Slider/FirstSlide';
import { SecondSlide } from './Slider/SecondSlide';
import { ThirdSlide } from './Slider/ThirdSlide';
import { Navigation } from 'swiper';

const Slider = React.forwardRef((_props, ref) => {
  const [swiper, setSwiper] = useState(null);
  const slides = [<FirstSlide />, <SecondSlide />, <ThirdSlide />];

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  useImperativeHandle(ref, () => ({
    handleNextClick,
  }));

  return (
    <Swiper
      modules={[Navigation]}
      style={{ marginLeft: '0px' }}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
});

export const ModalMain = () => {
  const sliderRef = useRef(null);

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.handleNextClick();
    }
  };

  return (
    <>
      <ModalMainDiv>
        <Slider ref={sliderRef} />
      </ModalMainDiv>
      <SubmitButtonModal onClick={handleNextClick} />
    </>
  );
};
