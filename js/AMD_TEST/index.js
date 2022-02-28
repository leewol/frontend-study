require.config({
  baseUrl: "./", // 기본경로 지정
  paths: {
    // 모듈명: '모듈에 해당하는 경로'
    helloWorld: "./helloWorld",
  },
});

// 첫 번째 인자에 해당하는 모듈이 로드 되었을 때, helloWorld 로 받아서,
// sayHello 함수를 호출합니다. 의존성 모듈을 지정해주는 것이라고 할 수 있습니다.

// require(['모듈명'], (받을 인자이름 지정) => {
//	 지정한 인자.지정함수()
// })
require(["helloWorld"], (helloWorld) => {
  helloWorld.sayHello();
});
