'use strict';

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
let maxSlide = slides.length - 1;

const goToSlide = function () {
  slides.forEach((el) => {
    if (el.dataset.slide === `${currentSlide}`) {
      el.classList.add('slide--active');
    } else {
      el.classList.remove('slide--active');
    }
  });
};
const getCurrentSlide = function () {
  slides.forEach((el) => {
    if (el.classList.contains('slide--active')) {
      currentSlide = +el.dataset.slide;
    }
  });
};

// initialize by using IIFE;
(function () {
  goToSlide();
  getCurrentSlide();
})();

btnRight.addEventListener('click', function () {
  currentSlide++;
  if (currentSlide > maxSlide) currentSlide = 0;
  goToSlide();
});

btnLeft.addEventListener('click', function () {
  currentSlide--;
  if (currentSlide < 0) currentSlide = maxSlide;
  goToSlide();
});
