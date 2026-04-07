'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="text-center p-8 bg-black/20 rounded-lg border border-white/10">
              <blockquote className="text-lg md:text-xl italic text-white mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-sm text-gray-300">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-xs opacity-75">{testimonial.role}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};