'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function LogoSlider() {
  const logos = [
    "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748608737/credit-agricole-logo_kgqvj1.svg",
    "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748608736/air-liquide-3_w3knmb.svg",
    "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748608736/air-france-logo-1_ivn08c.svg",
    "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748608735/Logo_M%C3%A9tropole_Lyon_-_2022_riho8n.svg",
    "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748664059/safran-sagem_mmbn3i.svg",
    "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748665021/essilor-logo_gqkcfe.svg",
    "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748664061/suez-logo_i3556d.svg",
    "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748664057/maif_o6ezy7.svg",
    "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748664055/sncf_mbdu0j.svg",
    "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748664058/sfr_k87nob.svg"
  ];

  return (
    <section className="pt-8 pb-12 px-6 bg-gray-200 dark:bg-gray-800 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto flex justify-center">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0:     { slidesPerView: 1,   spaceBetween: 12 },
            480:   { slidesPerView: 1.5, spaceBetween: 16 },
            768:   { slidesPerView: 2,   spaceBetween: 20 },
            1024:  { slidesPerView: 3,   spaceBetween: 24 },
            1280:  { slidesPerView: 4,   spaceBetween: 32 },
          }}
          className="w-full max-w-4xl"
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx} className="flex justify-center items-center w-full">
              <div className="w-full sm:w-48 h-24 sm:h-28 flex items-center justify-center 
bg-white dark:bg-white 
rounded-lg shadow-none dark:shadow-md dark:hover:shadow-lg 
p-4 transition-all duration-300">
                <img
                  src={logo.replace('/upload/', '/upload/f_auto,q_auto,w_300,dpr_auto/')}
                  alt={`Logo ${idx + 1}`}
                  className="max-h-full max-w-full object-contain dark:brightness-125 dark:contrast-125"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}