declare var Swiper: any;

window.addEventListener("DOMContentLoaded", (): void => {
  // 가짜 데이터(Dummy 데이터 또는 Mock 데이터)
  type BannerDataType = {
    id: number;
    link: string;
    image: string;
    alt: string;
  };
  const apiData: BannerDataType[] = [
    {
      id: 2,
      link: "#",
      image:
        "https://common-media.interparkcdn.net/exhibition/250416002/17f1e3f2-1a7b-4694-8a18-5a7ecacce9c1.png",
      alt: "도쿄 타워 슈퍼 위크",
    },
    {
      id: 3,
      link: "#",
      image:
        "https://common-media.interparkcdn.net/exhibition/250522002/594a1e1a-4598-40be-8ad8-1b88f503c80d.png",
      alt: "2025 여름맞이 숙박세일 페스타",
    },
    {
      id: 4,
      link: "#",
      image:
        "https://common-media.interparkcdn.net/exhibition/250122001/3925f6ac-bb9c-4c4b-a756-61b0cf77569b.jpg",
      alt: "6월 해외여행 혜택 모음",
    },
    {
      id: 5,
      link: "#",
      image:
        "https://common-media.interparkcdn.net/exhibition/250416002/17f1e3f2-1a7b-4694-8a18-5a7ecacce9c1.png",
      alt: "나의 세계를 놀랍게 NOL",
    },
    {
      id: 6,
      link: "#",
      image:
        "https://common-media.interparkcdn.net/exhibition/200417034/286ccc6f-610b-4dee-88f8-092fed3ec3e7.png",
      alt: "인터파크TV_목요일",
    },
    {
      id: 7,
      link: "#",
      image:
        "https://common-media.interparkcdn.net/exhibition/250124003/14dceb6e-a745-4897-85ca-87b468b99988.png",
      alt: "6월 티켓 혜택 모음",
    },
  ];

  // 슬라이드 갯수
  const total: number = apiData.length;
  // 슬라이드 배치 장소
  const bannerPos: Element | null = document.querySelector(
    ".sw_banner .swiper-wrapper"
  );
  // 아래 코드는 별도로 작성을 한 것입니다. (보관 권장)
  const banner: Element | null = document.querySelector(".sw_banner");

  // html 태그 만들기
  // 6개 만들기
  let htmlTag: string = "";

  function makeHtml(): void {
    for (let i: number = 0; i < total; i++) {
      const tempData: BannerDataType = apiData[i];

      htmlTag += `<div class="swiper-slide">
                    <a href="${tempData.link}" class="banner_slide_item">
                        <img src="${tempData.image}" alt="${tempData.alt}" />
                    </a>
                </div>`;
    }
    // html 장소에 배치하기
    if (bannerPos) {
      bannerPos.innerHTML = htmlTag;
    }
  }
  // 슬라이드 만들기
  function makeSlide(): any {
    const swiper: any = new Swiper(".sw_banner", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".banner_slide_next",
        prevEl: ".banner_slide_prev",
      },
      pagination: {
        el: ".banner_slide_pg",
        clickable: true,
      },
      breakpoints: {
        760: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });
    return swiper;
  }

  makeHtml();
  const swiper = makeSlide();

  // 배너 영역에 마우스가 걸친다면
  banner!.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });
  // 배너 영역에 마우스가 빠져나간다면
  banner!.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
});
