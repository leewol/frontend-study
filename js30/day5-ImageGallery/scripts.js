const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  // * this는 event가 발생하는 각 panel (panel을 class로 가지는 딱 그 element와 하위 요소들)
  // * event.target로 제어하려 한다면, panel을 class로 가지는 그 element의 하위 요소들 중 하나를 클릭한다면 그 단 하나가 target
  // * 그래서 가장 넓은 범위의 div에 class toggle을 할 수 없는 상황이 나옴
  this.classList.toggle("open");
}

function toggleActive(evt) {
  console.log(evt.propertyName);
  // flex 관련 transition 발생할 때만 "open-active" class 토글!
  // * 여러 개의 transition end 이벤트가 존재하기 때문에 하나 정해서 해주어야 함
  // * 이렇게 안 하면 아예 classList에 변화가 없음

  if (evt.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

// transition 완료됨을 감지하고 이벤트 수행
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
