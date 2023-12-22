'use strict';

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  let currentSlide = 0;
  let maxSlide = slides.length - 1;

  // Creating dots
  const createDots = function () {
    slides.forEach((s, i) => {
      const html = `<div class="dots__dot" data-slide="${i}"></div>`;

      dotsContainer.insertAdjacentHTML('beforeend', html);
    });
  };

  // Activating the dots
  const activeDots = function (slideNum) {
    const currentDot = document.querySelector(`.dots__dot[data-slide="${slideNum}"]`);

    document.querySelectorAll('.dots__dot').forEach((dot) => {
      dot.classList.remove('dots__dot--active');
    });

    currentDot.classList.add('dots__dot--active');
  };

  // go to the current slide
  const goToSlide = function (s) {
    slides.forEach((el) => {
      if (el.dataset.slide === `${s}`) {
        el.classList.add('slide--active');
      } else {
        el.classList.remove('slide--active');
      }
    });
  };

  // intializing
  const init = function () {
    goToSlide(0);
    createDots();

    activeDots(0);
  };
  init();

  // go to the next slide
  const nextSlide = function () {
    currentSlide++;
    if (currentSlide > maxSlide) currentSlide = 0;

    goToSlide(currentSlide);
    activeDots(currentSlide);
  };

  // go to the previous slide
  const prevSlide = function () {
    currentSlide--;
    if (currentSlide < 0) currentSlide = maxSlide;

    goToSlide(currentSlide);
    activeDots(currentSlide);
  };

  // EVENT LISTNERS
  dotsContainer.addEventListener('click', function (e) {
    if (!e.target.classList.contains('dots__dot')) return;

    const slideNum = e.target.dataset.slide;
    goToSlide(slideNum);
    activeDots(slideNum);
  });

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    else if (e.key === 'ArrowLeft') prevSlide();
  });
};

slider();
