import React from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Dot, DotsWrapper } from './style';

export type RenderDotsProps = {
  numSlides: number;
  currentSlide: number;
  swiper: SwiperType | null;
};

const RenderDots = ({ numSlides, currentSlide }: RenderDotsProps) => {
  const dots = [];
  for (let i = 0; i < numSlides; i++) {
    dots.push(
      <Dot key={i} className={currentSlide === i ? 'active filled' : ''} />,
    );
  }
  return <DotsWrapper>{dots}</DotsWrapper>;
};

export default RenderDots;
