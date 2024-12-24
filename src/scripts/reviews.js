import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const swiper = new Swiper('.reviewsSwiper', {
  modules: [Pagination],
  centeredSlides: true,
  spaceBetween: 20,
  initialSlide: 2,
  slidesPerView: 1.2,
  slideToClickedSlide: true,
  breakpoints: {
    1200: {
      slidesPerView: 3.2,
      spaceBetween: 20,
      initialSlide: 2,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

swiper
  .on('slideChange', function () {
    swiper.slides.forEach(slide => slide.classList.remove('active-slide'));
    swiper.slides[swiper.activeIndex].classList.add('active-slide');
  })
  .init(function () {
    swiper.slides[swiper.activeIndex].classList.add('active-slide');
  });
