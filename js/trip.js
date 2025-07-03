window.addEventListener("DOMContentLoaded", function () {
  // 1.백엔드가져오기
  async function getData() {
    try {
      const res = await fetch("/apis/trip.json");
      const result = await res.json();
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }

  // 2. html 태그 만들기
  function makeHtml(data) {
    // html 태그 만들고 배치하기
    const tripPos = document.querySelector(".sw_trip .swiper-wrapper");
    let html = ``;

    // 실제 데이터 개수 만큼 swiper-slide 태그 만들어 배치하기
    html = "";
    for (let i = 0; i < data.length; i++) {
      let tag = `
  <div class="swiper-slide">
    <a href="${data[i].링크}" class="trip_slide_item">
      <div class="trip_image">
        <img
          src="${data[i].이미지}"
          alt="${data[i].alt}"
        />
      </div>
      <div class="trip_info">
        <div class="trip_icon">
          <img src="images/icon_w_logo_new.svg" alt="trip" />
          ${data[i].대상}
        </div>
        <p class="trip_item_title">
          ${data[i].상품타이틀}
        </p>
        <p class="trip_schedule">
    `;

      for (let j = 0; j < data[i].스케줄.length; j++) {
        tag = tag + `<span>${data[i].스케줄[j]}</span>`;
      }

      tag =
        tag +
        `</p>
        <p class="trip_price">
          <b>${data[i].상품가격}</b>
          원~
          <span class="m_line">${data[i].정상가}</span>
        </p>
      </div>
    </a>
  </div>
    `;

      html = html + tag;
    }
    tripPos.innerHTML = html;
    makeSlide();
  }
  //3. 슬라이드 만들기
  function makeSlide() {
    // swiper 만들기 실행
    new Swiper(".sw_trip", {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".trip_slide_next",
        prevEl: ".trip_slide_prev",
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
  }
  getData();
});
