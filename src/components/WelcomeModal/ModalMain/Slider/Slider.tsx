// /* eslint-disable react/jsx-key */
// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper';

// import './style.css';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { FirstSlide } from './FirstSlide';
// import { SecondSlide } from './SecondSlide';
// import { ThirdSlide } from './ThirdSlide';

// export const Slider = () => {
//   const [swiper, setSwiper] = useState(null);
//   const slides = [<FirstSlide />, <SecondSlide />, <ThirdSlide />];

//   const handleNextClick = () => {
//     if (swiper) {
//       swiper.slideNext();
//     }
//   };
//   return (
//     <Swiper
//       modules={[Navigation]}
//       style={{ marginLeft: '0px' }}
//       navigation
//       spaceBetween={50}
//       slidesPerView={1}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => setSwiper(swiper)}
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>{slide}</SwiperSlide>
//       ))}
//       <button onClick={handleNextClick}>next</button>
//     </Swiper>
//   );
// };
