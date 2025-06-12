window.addEventListener("load", function () {
  new Swiper(".sw_ticket", {
    slidesPerView: 8,
    spaceBetween: 10,
    slidesPerGroup: 4,
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },
    breakpoints: {
      960: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      760: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
