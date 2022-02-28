define(() => {
  // define의 첫번째 인자: 내가 쓰고자 하는 타인의 코드를 배열에 나열
  // define의 두번째 인자: 콜백 함수에서 매개변수로 받는다
  // index.js 파일에서 require 에 지정해 준 부분과 같이 아래 return 부분이 실행되기전
  // 로드될 모듈을 지정해 줄 수 있습니다. (콜백 함수를 작성하여 불러온 모듈 사용 가능)
  return {
    sayHello: () => console.log("Hello World!"),
  };
});
