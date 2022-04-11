function playSound(event) {
  // 그냥 audio 하면 첫 번째 해당 요소만 선택됨 -> data-key로 알맞은 것 접근
  const { keyCode } = event;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  // 해당 keyCode의 audio가 존재하지 않는다면 함수 종료
  if (!audio) {
    return;
  }

  // * 소리 재생
  // 누를 때 currentTime을 초기화시켜주지 않으면 연속으로 드럼 칠 수가 없음
  // ==> audio의 play 시간이 다 끝나야만 다음 입력의 audio play 함
  audio.currentTime = 0;
  audio.play();

  // * 애니메이션 추가
  key.classList.add("playing");
}

function removeTransition(e) {
  // transform이 아닌 transitionend는 신경 쓰지 말고
  if (e.propertyName !== "transform") {
    return;
  }

  // transform이 끝난 경우에 playing 클래스 remove
  // ? event Listener 콜백함수를 호출한 것이 this가 됨
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playSound);

// keydown 이벤트 이후 key 클래스의 모든 것들 중 transitionend가 발생하는지 확인
// setTimeout을 사용하면 transition time이 바뀔 때마다 일일이 수정해 줘야 함
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
