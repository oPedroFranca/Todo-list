import React from 'react';
import { SubmitButtonModal } from '../SubmitButton';
import { ModalMainDiv } from './style';
import { Slider } from './Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { FirstSlide } from './FirstSlide';
import { SecondSlide } from './SecondSlide';
import { ThirdSlide } from './ThirdSlide';

export const ModalMain = () => {
  const settings = {
    spaceBetween: 50,
    slidesPerView: 3,
  };

  return (
    <>
      <ModalMainDiv>
        <Slider settings={settings}>
          <SwiperSlide>
            <FirstSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SecondSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ThirdSlide />
          </SwiperSlide>
        </Slider>
      </ModalMainDiv>
      <SubmitButtonModal />
    </>
  );
};
