window.addEventListener("load", function () {
  // swiper 만들기 실행
  new Swiper(".sw_live", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,

    navigation: {
      nextEl: ".live_slide_prev",
      prevEl: ".live_slide_next",
    },

    breakpoints: {
      960: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
