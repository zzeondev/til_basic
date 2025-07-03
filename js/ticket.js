// HTML 완성되면
window.addEventListener("DOMContentLoaded", function () {
  // 1. 백엔드 데이터 가져오기 : 1번만 실행
  let originData;

  async function getData() {
    try {
      const res = await fetch("/apis/ticket.json");
      const result = await res.json();
      // 전역에서 사용하도록 보관함
      originData = result;

      makeCategoryHtml();
      makeSlideHtml();
    } catch (error) {
      console.log(error);
    }
  }

  // 2. html 생성
  // 2.1 카테고리 버튼 생성
  function makeCategoryHtml() {
    let cateHtml = "";
    for (let i = 0; i < originData.length; i++) {
      const obj = originData[i];
      const tag = `<li><button>${obj.카테고리}</button></li>`;
      cateHtml = cateHtml + tag;
    }
    const where = document.querySelector(".ticket_category_list");
    where.innerHTML = cateHtml;

    makeBtnInit();
  }
  // 2.2 슬라이드 html 태그 생성
  let showIndex = 0; // 보여주어야 할 배열의 인덱스 보관
  function makeSlideHtml() {
    let html = "";

    // 현재 배열의 몇번째 데이터를 보여주어야 하는가?
    const showData = originData[showIndex].데이터;
    for (let i = 0; i < showData.length; i++) {
      const obj = showData[i];

      // 임시 태그
      let tag = `
    <div class="swiper-slide">
      <a href="${obj.링크}" class="ticket_slide_item">
        <div class="ticket_image">
          <img
            src="${obj.이미지}"
            alt="${obj.타이틀}"
          />
          <div class="ticket_rank">${obj.랭크}</div>
        </div>

        <div class="ticket_info">
          <p class="ticket_item_title">
            ${obj.타이틀}
          </p>
          <p class="ticket_place">
            ${obj.장소}
          </p>
          <p class="ticket_day">${obj.날짜}</p>
          <div class="ticket_option">`;

      // console.log(obj.옵션.length);
      for (let j = 0; j < obj.옵션.length; j++) {
        tag =
          tag +
          `<span class="ticket_${obj.옵션[j].스타일}">${obj.옵션[j].텍스트}</span>`;
      }

      tag =
        tag +
        `</div>
        </div>
      </a>
    </div> 
    `;
      html = html + tag;
    }
    const where = document.querySelector(".sw_ticket .swiper-wrapper");
    where.innerHTML = html;

    makeSlide();
  }
  // 3. Swiper 를 만들기
  let swiperTicekt;
  function makeSlide() {
    if (swiperTicekt) {
      swiperTicekt.destory();
    }
    // swiper 만들기 실행
    new Swiper(".sw_ticket", {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".ticket_slide_next",
        prevEl: ".ticket_slide_prev",
      },
      breakpoints: {
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

  // 4. 카테고리 버튼 선택시 다시 슬라이드 html 태그 생성
  //    2.2 과정, 3 과정을 다시 진행

  // 5. 버튼 포커스 기능
  // 기능은 1번만 등록하기
  function makeBtnInit() {
    const btlist = document.querySelectorAll(".ticket_category_list li button");
    btlist[showIndex].classList.add("ticket_focus")
    btlist.forEach(function (item, index) {
      item.addEventListener("click", function () {
        resetFocus();
        showIndex = index;
        item.classList.add("ticket_focus");
        makeSlideHtml();
      });
    });
  }

  // 6. 포커스 해제 기능
  function resetFocus() {
    const btlist = document.querySelectorAll(".ticket_category_list li button");
    btlist.forEach(function (item) {
      item.classList.remove("ticket_focus");
    });
  }
  getData();
});
