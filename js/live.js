window.addEventListener("DOMContentLoaded", function () {
  // 1. 백엔드
  async function getData() {
    try {
      const res = await fetch("/apis/live.json");
      const result = await res.json();
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }
  // 2. html
  function makeHtml(data) {
    const livePos = document.querySelector(".sw_live .swiper-wrapper");
    let html = ``;

    // 실제 데이터 갯수 만큼 slide html 만들기
    html = "";
    for (let i = 0; i < data.length; i++) {
      let tag = `
      <div class="swiper-slide">
        <a href="${data[i].링크}" class="live_slide_item">

          <div class="live_image">
            <img
              src="${data[i].메인이미지}"
              alt="${data[i].타이틀}"
            />
          </div>

          <div class="live_info">
            <div class="live_state">
              <span class="live_wait">${data[i].방송}</span>
            </div>
            <p class="live_item_title">
              ${data[i].타이틀}
            </p>
            <div class="live_day">
              <div class="live_day_date">${data[i].날짜}</div>
              <div class="live_day_time">${data[i].시간}</div>
            </div>
          </div>`;

      if (data[i].서브이미지 !== "") {
        tag =
          tag +
          ` <div class="live_detail">
              <div class="live_detail_image">
                <img
                  src="${data[i].서브이미지}"
                  alt="${data[i].타이틀}"
                />
              </div>
              <p class="live_detail_title">${data[i].서브타이틀}</p>
            </div>`;
      }

      tag =
        tag +
        `</a>
    </div>
    `;
      html = html + tag;
    }
    // console.log(html);
    livePos.innerHTML = html;
    makeSlide();
  }

  // 3. 슬라이드
  function makeSlide() {
    new Swiper(".sw_live", {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,

      navigation: {
        nextEl: ".live_slide_next",
        prevEl: ".live_slide_prev",
      },

      breakpoints: {
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  getData();
});
