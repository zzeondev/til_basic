window.addEventListener("load", function () {
  // 데이터
  const tripApiData = [
    {
      링크: "#",
      이미지: "images/trip_2.avif",
      alt: "여행상품",
      대상: "아이",
      상품타이틀:
        "[영어캠프홀릭]일본 오키나와 1주 영어캠프, 25년 여름방학 맞이 오키나와 놀이형 영어캠프",
      스케쥴: ["6박 7일", "노쇼핑"],
      상품가격: "2,150,000",
      정상가: "",
    },
    {
      링크: "#",
      이미지: "images/trip_1.avif",
      alt: "여행상품",
      대상: "아이",
      상품타이틀:
        "[베스트셀러/W트립] 나트랑 5일, 셀렉텀노아, 올인클루시브, 워터파크 포함 자유여행",
      스케쥴: ["3박 5일", "인천 출발", "이스타항공", "노쇼핑"],
      상품가격: "683,050",
      정상가: "정상가 719,000",
    },
    {
      링크: "#",
      이미지: "images/trip_3.avif",
      alt: "여행상품",
      대상: "친구연인",
      상품타이틀:
        "[베스트셀러/W트립] 서유럽4국10일, 영국/프랑스/스위스/이탈리아, 대한항공+월드체인호텔",
      스케쥴: ["8박 10일", "인천 출발", "대한항공", "쇼핑6회"],
      상품가격: "4,179,000",
      정상가: "정상가 4,299,000",
    },
    {
      링크: "#",
      이미지: "images/trip_4.avif",
      alt: "여행상품",
      대상: "친구연인",
      상품타이틀:
        "[베스트셀러/W트립]보홀 5일, 리조트선택가능, 나팔링투어+반딧불+선셋투어+SNS맛집 포함",
      스케쥴: ["3박 5일", "인천 출발", "제주항공", "쇼핑2회"],
      상품가격: "626,050",
      정상가: "정상가 659,000",
    },
    {
      링크: "#",
      이미지: "images/trip_5.avif",
      alt: "여행상품",
      대상: "친구연인",
      상품타이틀:
        "[베스트셀러/W트립] 튀르키예 9일, 아시아나직항, 월드체인3박UP, 3대옵션포함",
      스케쥴: ["7박 9일", "인천 출발", "아시아나항공", "쇼핑6회"],
      상품가격: "1,390,050",
      정상가: "1,199,000",
    },
    {
      링크: "#",
      이미지: "images/trip_6.avif",
      alt: "여행상품",
      대상: "가족",
      상품타이틀:
        "[베스트셀러/W트립] 싱가포르 5일, 마리나베이샌즈 1박, 노쇼핑, 4인이상 출발보장",
      스케쥴: ["3박 5일", "인천 출발", "제주항공", "노쇼핑"],
      상품가격: "1,310,050",
      정상가: "정상가 1,379,000",
    },
    {
      링크: "#",
      이미지: "images/trip_7.avif",
      alt: "여행상품",
      대상: "가족",
      상품타이틀:
        "[베스트셀러/W트립] 4성급 밍가든VS판보르네오 호핑+자유일정 포함 코타키나발루 5일",
      스케쥴: ["3박 5일", "인천 출발", "제주항공", "쇼핑3회"],
      상품가격: "239,000",
      정상가: "",
    },
    {
      링크: "#",
      이미지: "images/trip_8.avif",
      alt: "여행상품",
      대상: "아이",
      상품타이틀:
        "[영어캠프홀릭] 사이판 2주, 명문 국제 사립학교 커리큘럼 스쿨링 영어캠프",
      스케쥴: ["13박 14일", "인천 출발", "노쇼핑"],
      상품가격: "2,600,000",
      정상가: "",
    },
  ];

  // html 태그 만들고 배치하기
  const tripPos = document.querySelector(".sw_trip .swiper-wrapper");
  let html = `
  <div class="swiper-slide">
    <a href="${tripApiData[0].링크}" class="trip_slide_item">
      <div class="trip_image">
        <img
          src="${tripApiData[0].이미지}"
          alt="${tripApiData[0].alt}"
        />
      </div>
      <div class="trip_info">
        <div class="trip_icon">
          <img src="images/w_logo_new.svg" alt="trip" />
          ${tripApiData[0].대상}
        </div>
        <p class="trip_item_title">
          ${tripApiData[0].상품타이틀}
        </p>
        <p class="trip_schedule">
          <span>${tripApiData[0].스케쥴[0]}</span>
          <span>${tripApiData[0].스케쥴[1]}</span>
          <span>${tripApiData[0].스케쥴[2]}</span>
          <span>${tripApiData[0].스케쥴[3]}</span>
        </p>
        <p class="trip_price">
          <b>${tripApiData[0].상품가격}</b>
          원~
          <span class="m_line">${tripApiData[0].정상가}</span>
        </p>
      </div>
    </a>
  </div>
  `;

  // 실제 데이터 개수 만큼 swiper-slide 태그 만들어 배치하기
  html = "";
  for (let i = 0; i < tripApiData.length; i++) {
    let tag = `
  <div class="swiper-slide">
    <a href="${tripApiData[i].링크}" class="trip_slide_item">
      <div class="trip_image">
        <img
          src="${tripApiData[i].이미지}"
          alt="${tripApiData[i].alt}"
        />
      </div>
      <div class="trip_info">
        <div class="trip_icon">
          <img src="images/icon_w_logo_new.svg" alt="trip" />
          ${tripApiData[i].대상}
        </div>
        <p class="trip_item_title">
          ${tripApiData[i].상품타이틀}
        </p>

        <p class="trip_schedule">
        `;

    for (let j = 0; j < tripApiData[i].스케쥴.length; j++) {
      tag = tag + `<span>${tripApiData[i].스케쥴[j]}</span>`;
    }

    tag =
      tag +
      `</p>
        
        <p class="trip_price">
          <b>${tripApiData[i].상품가격}</b>
          원~
          <span class="m_line">${tripApiData[i].정상가}</span>
        </p>
      </div>
    </a>
  </div>
    `;

    html = html + tag;
  }

  console.log("만들어진 태그 : ", html);

  tripPos.innerHTML = html;

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
});
