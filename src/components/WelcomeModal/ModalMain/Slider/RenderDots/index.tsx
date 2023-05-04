import React from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { ActiveDot, Dot, DotsWrapper } from './style';

export type RenderDotsProps = {
  numSlides: number;
  currentSlide: number;
  swiper: SwiperType | null;
};

const RenderDots = ({ numSlides, currentSlide, swiper }: RenderDotsProps) => {
  const dots = [];
  for (let i = 0; i < numSlides; i++) {
    dots.push(
      currentSlide === i ? (
        <ActiveDot key={i} onClick={() => swiper?.slideTo(i)} />
      ) : (
        <Dot key={i} onClick={() => swiper?.slideTo(i)} />
      ),
    );
  }
  return <DotsWrapper>{dots}</DotsWrapper>;
};

export default RenderDots;
