window.addEventListener("load", function () {
  // swiper 만들기 실행
  new Swiper(".sw_trip", {
    slidesPerView: 8,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".trip_slide_prev",
      prevEl: ".trip_slide_next",
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
