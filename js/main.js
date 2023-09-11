document.addEventListener('DOMContentLoaded', function () {
  const introBanner = document.querySelector('.ku-intro__banner');
  const splideBanner = new Swiper(introBanner, {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const $slides = introBanner.querySelectorAll('.ku-intro__banner .swiper-slide');
  for (let i of $slides) {
    i.addEventListener('mouseover', function () {
      splideBanner.autoplay.stop();
    });
    i.addEventListener('mouseout', function () {
      splideBanner.autoplay.start();
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const splideLink = new Swiper('.ku-intro__link', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // loop: true,
    loopAdditionalSlides: 1,
    spaceBetween: 50,
    breakpoints: {
      280: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 6, spaceBetween: 0 },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

let index = 0;
let interval = 1000;

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const animate = (star) => {
  star.style.setProperty('--star-left', `${rand(-10, 100)}%`);
  star.style.setProperty('--star-top', `${rand(-40, 80)}%`);

  star.style.animation = 'none';
  star.offsetHeight;
  star.style.animation = '';
};

for (const star of document.getElementsByClassName('magic-star')) {
  setTimeout(() => {
    animate(star);

    setInterval(() => {
      animate(star);
    }, 1000);
  }, index++ * (interval / 3));
}
