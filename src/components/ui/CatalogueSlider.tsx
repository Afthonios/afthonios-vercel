'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Virtual } from 'swiper/modules';

import 'swiper/css';

/**
 * Simple reusable catalogue slider.
 *
 * Props:
 *  - slides: Array<{ src: string; text: string; alt?: string }>
 *
 * The parent can place its own heading/button above or below this component.
 */
export interface CatalogueSlide {
  src: string;
  text: string;
  alt?: string;
}

interface CatalogueSliderProps {
  slides: CatalogueSlide[];
}

export default function CatalogueSlider({ slides }: CatalogueSliderProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Virtual, Autoplay]}
        virtual
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={28}
        breakpoints={{
          0:    { slidesPerView: 1,   spaceBetween: 12, centeredSlides: true },
          480:  { slidesPerView: 1.15,spaceBetween: 16, centeredSlides: true },
          640:  { slidesPerView: 2,   spaceBetween: 12, centeredSlides: true },
          768:  { slidesPerView: 2.5, spaceBetween: 16 },
          1024: { slidesPerView: 4,   spaceBetween: 28 },
          1280: { slidesPerView: 5,   spaceBetween: 32 },
        }}
        className="w-full"
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx} virtualIndex={idx}>
            <div className="flex flex-col rounded-2xl bg-white dark:bg-slate-600/90 text-gray-900 dark:text-white shadow-none dark:shadow-none transition-shadow duration-300 overflow-hidden h-80">
              <img
                src={item.src.replace('/upload/', '/upload/f_auto,q_auto,w_600/')}
                alt={item.alt ?? item.text}
                className="h-48 w-full object-cover"
              />
              <p className="p-4 text-center text-base md:text-lg leading-snug font-semibold">
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
