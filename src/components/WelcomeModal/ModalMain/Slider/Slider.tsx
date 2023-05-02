/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import React, { useImperativeHandle, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Swiper as SwiperType } from 'swiper';
import { FirstSlide } from './FirstSlide';
import { SecondSlide } from './SecondSlide';
import { ThirdSlide } from './ThirdSlide';

type SliderProps = {
  handleNextSlide: () => void;
};

const Slider = React.forwardRef((props: SliderProps, ref) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const slideComponents = [<FirstSlide />, <SecondSlide />, <ThirdSlide />];
  const [isSliding, setIsSliding] = useState(false);

  useImperativeHandle(ref, () => ({
    handleNextSlide: () => {
      if (!isSliding && swiper) {
        setIsSliding(true);
        swiper.slideNext();
      }
    },
  }));

  const swiperProps = {
    modules: [Navigation],
    style: {
      width: '100%',
      display: 'flex',
    },
    navigation: true,
    spaceBetween: 50,
    slidesPerView: 1,
    onSlideChange: () => setIsSliding(false),
    onSwiper: (swiper: SwiperType) => setSwiper(swiper),
  };

  return (
    <>
      <Swiper {...swiperProps}>
        {slideComponents.map((component, index) => (
          <SwiperSlide key={index}>{component}</SwiperSlide>
        ))}
      </Swiper>
      <p>...</p>
    </>
  );
});

export default Slider;
