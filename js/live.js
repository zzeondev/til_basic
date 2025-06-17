window.addEventListener("load", function () {
  // API 데이터
  const liveApiData = [
    {
      uid: 1,
      링크: "#",
      이미지: "images/live_1.jpeg",
      방송: "방송예정",
      상품타이틀: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00 ",
      디테일이미지: "images/live_1_1.jpg",
      디테일정보: "휘닉스 리조트 평창 85% 123,670원",
    },
    {
      uid: 2,
      링크: "#",
      이미지: "images/live_2.png",
      방송: "방송예정",
      상품타이틀:
        "[싱가포르항공] 월드 클래스 서비스 항공사 싱가포르/허니문/호주 노선 특가👑",
      날짜: "06월 18일 (수)",
      시간: "11:00",
      디테일이미지: "",
      디테일정보: "",
    },
    {
      uid: 3,
      링크: "#",
      이미지: "images/live_3.png",
      방송: "방송예정",
      상품타이틀:
        "[몬드리안 이태원&테이크호텔 서울광명&인제 스피디움] 도심 호캉스&강원 숲캉스 특집!",
      날짜: "06월 19일 (목)",
      시간: "19:00",
      디테일이미지: "",
      디테일정보: "",
    },
    {
      uid: 4,
      링크: "#",
      이미지: "images/live_4.jpg",
      방송: "라이브 다시보기",
      상품타이틀:
        "[푸꾸옥 자유여행] 5성급 노보텔 vs 4성급 빈홀리데이 피에스타! 30만원대~ 🏝 프라이빗 렌터카+객실당 망고 1kg",
      날짜: "",
      시간: "",
      디테일이미지: "images/live_4_1.jpg",
      디테일정보: "[상품보기] 푸꾸옥 자유여행 혜택 보러가기",
    },
    {
      uid: 5,
      링크: "#",
      이미지: "images/live_5.png",
      방송: "라이브 다시보기",
      상품타이틀:
        "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      날짜: "",
      시간: "",
      디테일이미지: "images/live_5_1.png",
      디테일정보: "월요라이브 자세히보기!",
    },
    {
      uid: 6,
      링크: "#",
      이미지: "images/live_6.png",
      방송: "라이브 다시보기",
      상품타이틀: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가🎊",
      날짜: "",
      시간: "",
      디테일이미지: "images/live_1_1.jpg",
      디테일정보: "라마다 스위츠 거제 호텔 84% 71,100원",
    },
    {
      uid: 7,
      링크: "#",
      이미지: "images/live_7.png",
      방송: "라이브 다시보기",
      상품타이틀: "[쿠폰 기획전] 진에어 라이브 특가",
      날짜: "",
      시간: "",
      디테일이미지: "images/live_7_1.png",
      디테일정보: "[쿠폰 기획전] 진에어 라이브 특가",
    },
    {
      uid: 8,
      링크: "#",
      이미지: "images/live_8.png",
      방송: "라이브 다시보기",
      상품타이틀: "[리솜리조트] 여름을 빛낼 가장 특별한 여정 힐링 특가",
      날짜: "",
      시간: "",
      디테일이미지: "images/live_8_1.jpg",
      디테일정보: "스플라스 리솜(덕산) 67% 125,280원",
    },
    {
      uid: 9,
      링크: "#",
      이미지: "images/live_9.jpg",
      방송: "라이브 다시보기",
      상품타이틀:
        "[이스타항공] 부산 ↔ 푸꾸옥 국적사 단독 신규취항! 27개 노선, 왕복 8만원대부터 🎈",
      날짜: "",
      시간: "",
      디테일이미지: "images/live_9_1.png",
      디테일정보: "[쿠폰/전노선] 이스타항공 기획전",
    },
    {
      uid: 1,
      링크: "#",
      이미지: "images/live_10.jpg",
      방송: "라이브 다시보기",
      상품타이틀: "[강릉 세인트존스호텔] 여름맞이 오션뷰 호캉스 최대 76% 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      디테일이미지: "images/live_10_1.jpg",
      디테일정보: "휘닉스 리조트 평창 85% 123,670원",
    },
    {
      uid: 1,
      링크: "#",
      이미지: "images/live_1.jpeg",
      방송: "라이브 다시보기",
      상품타이틀: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      디테일이미지: "images/live_1_1.jpg",
      디테일정보: "휘닉스 리조트 평창 85% 123,670원",
    },
    {
      uid: 1,
      링크: "#",
      이미지: "images/live_1.jpeg",
      방송: "라이브 다시보기",
      상품타이틀: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      디테일이미지: "images/live_1_1.jpg",
      디테일정보: "휘닉스 리조트 평창 85% 123,670원",
    },
  ];
  // html 태그 만들고 배치
  const swLivePos = document.querySelector(".sw_live .swiper-wrapper");

  let html = ``;

  // 데이터 개수만큼 swiper-slide 태그 만들어 배치
  html = ``;
  for (let i = 0; i < liveApiData.length; i++) {
    let tag = `
  <div class="swiper-slide">
    <a href="${liveApiData[i].링크}"class="live_slide_item">
      <div class="live_image">
        <img
          src="${liveApiData[i].이미지}"
          alt="${liveApiData[i].alt}"
        />
      </div>
      <div class="live_info">
        <div class="live_state">
          <span class="live_wait">${liveApiData[i].방송}</span>
        </div>
        <p class="live_item_title">
          
        ${liveApiData[i].상품타이틀}
        </p>
        <div class="live_day">
          <div class="live_day_date">${liveApiData[i].날짜}</div>
          <div class="live_day_time">${liveApiData[i].시간}</div>
        </div>

        <div class="live_detail">
          <div class="live_detail_image">
            <img
              src="${liveApiData[i].디테일이미지}"
              alt="${liveApiData[i].alt}"
            />
          </div>
          <p class="live_detail_title">
            ${liveApiData[i].디테일정보}
          </p>

        </div>
      </div>
    </a>
  </div>
  `;

    html = html + tag;
  }
  swLivePos.innerHTML = html;

  new Swiper(".sw_live", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
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
});
