// * 윈도우 이벤트와 디바운스 관련 !
// * 그냥 scroll 이벤트를 찍어보면 top to bottom 스크롤에 약 50회 로그 -> 성능 문제 -> 디바운스 사용 (몇 초만 실행)
// * 여기에서 사용된 것은 leading edge debouncing!

// ? scrollX / scrollY : 수직/수평으로 얼마나 스크롤됐는지
// ? innerHeight : 윈도우 창 크기 높이

function debounce(func, wait = 20, immediate = true) {
  var timeout;

  return function() {
    var context = this, args = arguments;

    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(event) {
  sliderImages.forEach(sliderImage => {
    // * half way through the image
    // window.scrollY + window.innerHeight => 현재 보이는 페이지 높이
    // sliderImage.height => 등록된 이미지의 높이(길이)
    // sliderImage.offsetTop => 등록된 이미지 최상단의 위치
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 10);

    // * bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    // 페이지에서 반 이상 보이고 이전에 스크롤한 적이 없으면 이미지 슬라이드
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));