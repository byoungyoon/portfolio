'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './customSwiper.module.css';
import type { Swiper as SwiperClass } from 'swiper/types';
import { ReactNode, useRef, useState } from 'react';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

import 'swiper/css';

type Props = {
  slide: ReactNode[];
};

export default function CustomSwiper({ slide }: Props) {
  const ref = useRef<SwiperClass>();
  const [count, setCount] = useState(1);

  const onClickNav = (type: 'pre' | 'next') => () => {
    if (type === 'pre') {
      ref.current?.slidePrev();
      return;
    }

    ref.current?.slideNext();
  };

  const onChangeNav = (swiper: SwiperClass) => {
    setCount(swiper.activeIndex + 1);
  };

  const onSwiper = (swiper: SwiperClass) => {
    ref.current = swiper;
  };

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={onChangeNav}
        onSwiper={onSwiper}
      >
        {slide.map((value, index) => (
          <SwiperSlide key={index}>{value}</SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.pagination}>
        <MdKeyboardArrowLeft className={styles.icon} onClick={onClickNav('pre')} />
        <span>
          {count}/{slide.length}
        </span>
        <MdKeyboardArrowRight className={styles.icon} onClick={onClickNav('next')} />
      </div>
    </div>
  );
}
