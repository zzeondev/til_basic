window.addEventListener("DOMContentLoaded", function () {
  // 1. 데이터 부르기
  const TOUR_DATA_JSON = [
    "tour.json",
    "tour.json",
    "tour.json",
    "tour.json",
    "tour.json",
  ];
  async function getData(file) {
    // console.log("새로 불러올 데이터 : ", file);
    try {
      const res = await fetch("/apis/tour.json");
      const result = await res.json();
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }
  // 2. html 태그 만들기
  function makeHtml(data) {
    let html = "";

    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      const tag = `    
      <div class="swiper-slide">
        <a href="#" class="tour_item">
            <div class="tour_item_image">
                <img
                src="${obj.image}"
                alt="${obj.alt}"
                />
            </div>
            <div class="tour_item_info">
                <p class="tour_city">${obj.city}</p>
                <p class="tour_sale">${obj.sale}</p>
                <p class="tour_item_title">${obj.title}</p>
                <p class="tour_price"><b>${obj.price}</b>원~</p>
            </div>
        </a>
    </div>`;

      html = html + tag;
    }

    const where = document.querySelector(".sw_tour .swiper-wrapper");
    // 기존의 html 내용을 삭제한다.
    where.innerHTML = "";
    // 다시 새로운 내용을 채운다.
    where.innerHTML = html;

    makeSlide();
  }
  // 3. 슬라이드 만들기
  let swTour;
  function makeSlide() {
    if (swTour) {
      // 슬라이드가 이미 존재 한다면 지운다
      swTour.destroy();
    }
    swTour = new Swiper(".sw_tour", {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 10,
      slidesPerGroup: 1,

      navigation: {
        nextEl: ".tour_slide_next",
        prevEl: ".tour_slide_prev",
      },

      // 반응형
      breakpoints: {
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 26,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
        1280: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 26,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
      },
    });
  }

  // 4. 버튼 포커스 만들기
  const bts = document.querySelectorAll(".tour_button_list li button");
  // 포커스 되었을 때 적용될 포커스 이름
  const focusName = "tour_focus";

  function makeButton() {
    bts.forEach(function (item, index) {
      item.addEventListener("click", function () {
        // 모든 버튼에서 tour_focus 클래스 제거
        removeFocus();
        // 클릭된 버튼은 tour_focus 클래스 추가
        item.classList.add(focusName);

        // json 을 다시 불러들인다.
        getData(TOUR_DATA_JSON[index]);
      });
    });
  }
  // 버튼에서 포커스 제거하는 기능
  function removeFocus() {
    bts.forEach(function (item) {
      item.classList.remove(focusName);
    });
  }

  getData(TOUR_DATA_JSON[0]);
  makeButton();
});
