import React, { useImperativeHandle, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './style';
import { FirstSlide } from './FirstSlide';
import { SecondSlide } from './SecondSlide';
import { ThirdSlide } from './ThirdSlide';
import RenderDots, { RenderDotsProps } from './RenderDots';

export type SliderType = {
  handleNextSlide: () => void;
};

/**
 * Slider component that displays content slides.
 */
const Slider = React.forwardRef((props: SliderType, ref) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isSliding, setIsSliding] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideComponents = [<FirstSlide />, <SecondSlide />, <ThirdSlide />];
  const numSlides = slideComponents.length;

  useImperativeHandle(ref, () => ({
    handleNextSlide: () => {
      if (!isSliding && swiper) {
        setIsSliding(true);
        swiper.slideNext();
      }
    },
  }));

  const handleSlideChange = (swiper: SwiperType) => {
    setIsSliding(false);
    setCurrentSlide(swiper.realIndex);

    if (swiper.realIndex === 2) {
      setTimeout(() => {
        swiper.params.touchRatio = 1;
      }, 5000);
    }
  };

  const swiperProps = {
    modules: [Navigation],
    style: {
      width: '100%',
      display: 'flex',
      marginBottom: '23px',
    },
    navigation: true,
    spaceBetween: 50,
    slidesPerView: 1,
    touchRatio: 0,
    onSlideChange: handleSlideChange,
    onSwiper: (swiper: SwiperType) => setSwiper(swiper),
  };

  const renderDotsProps: RenderDotsProps = {
    numSlides,
    currentSlide,
    swiper,
  };

  return (
    <>
      <Swiper {...swiperProps}>
        {slideComponents.map((component, index) => (
          <SwiperSlide key={index}>{component}</SwiperSlide>
        ))}
      </Swiper>
      <RenderDots {...renderDotsProps} />
    </>
  );
});

export default Slider;
