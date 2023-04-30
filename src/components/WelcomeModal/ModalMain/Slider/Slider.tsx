import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/css';

interface SliderProps {
  settings: SwiperProps;
  children: React.ReactNode;
}

export const Slider = ({ settings, children }: SliderProps) => {
  return <Swiper {...settings}>{children}</Swiper>;
};
