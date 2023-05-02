import React from 'react';
import type { Swiper as SwiperType } from 'swiper';

type RenderDotsProps = {
  numSlides: number;
  currentSlide: number;
  swiper: SwiperType | null;
};

const RenderDots = ({ numSlides, currentSlide, swiper }: RenderDotsProps) => {
  const dots = [];
  for (let i = 0; i < numSlides; i++) {
    dots.push(
      <span
        key={i}
        className={`dot ${currentSlide === i ? 'active' : ''}`}
        onClick={() => swiper?.slideTo(i)}
      />,
    );
  }
  return <div className="dots">{dots}</div>;
};

export default RenderDots;
