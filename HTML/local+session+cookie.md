# 💾 Local Storage & Session Storage & Cookie

- 클라이언트 상에서 key/value 쌍을 저장
- value는 반드시 문자열
- 동일 출처 정책(SOP, Same-Origin Policy)를 따르므로 다른 도메인에서 접근 불가
- XSS 공격에 취약

<br />

##### _동일 출처 정책은 어떤 출처에서 불러온 문서나 스크립트가 **다른 출처에서 가져온 리소스와 상호작용하는 것을 제한**하는 중요한 보안 방식입니다. 동일 출처 정책은 잠재적으로 해로울 수 있는 문서를 분리함으로써 공격받을 수 있는 경로를 줄여줍니다._

<br/>

> 1. Web Storage (Local & Session)
> 2. Cookie
> 3. Local Storage vs. Session Storage
> 4. Web Storage vs. Cookie

<br/>

## ✔ Web Storage

HTML5에서 브라우저에 key/value를 쿠키보다 더 직관적으로 저장할 수 있도록 추가된 저장소

<br />

- **Local Storage**와 **Web Storage**
  - 구문: setItem, getItem, removeItem, key, length, ...
    - [Windows.localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)
    - [Windows.sessionStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/sessionStorage)
- 페이지 프로토콜별로 저장한 자료가 구분되어, HTTP로 방문한 페이지에 데이터를 저장해도 같은 페이지의 HTTPS에 저장되지 않음
- 서버에 불필요하게 데이터를 저장하지 않음

## ✔ Cookie

웹사이트가 웹 브라우저를 통해 방문자의 컴퓨터에 남기는 key/value로 이루어진 작은 데이터 파일

- 웹사이트에서 사용자 경험을 개인화하는 데 사용  
  (ex: language를 '한국어'로 선택하면 cookies는 기억했다가 문서를 한국어로 보여 줌)
- 클라이언트의 상태 정보를 로컬에 저장했다가 참조
- 사용자가 따로 요청하지 않아도 브라우저가 Request시에 Request Header를 넣어서 자동으로 서버에 전송
- 사용자는 쿠키를 수락/거부/삭제할 수 있음
- 매 HTTP 요청마다 포함되어 api 호출로 서버에 부담
- 암호화가 존재하지 않아 사용자 정보 도난 위험이 있음
- 구문: [document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie) 이용

<br />

## ✔ Local Storage vs. Session Storage

- Session Storage는 같은 URL이더라도 다수 탭/창의 각각에 새로운 storage가 생성됨
- Session Storage는 저장 공간을 페이지 세션이 유지되는 동안(브라우저가 열려있는 동안) 제공
- Local Storage는 유효기간 없이 데이터를 저장하고, JavaScript를 사용하거나 브라우저 캐시/로컬 저장 데이터를 지워야만 사라짐

<br />

## ✔ Local Storage vs. Session Storage vs. Cookie

|           | Local Storage                   | Session Storage                | Cookie                |
| --------- | ------------------------------- | ------------------------------ | --------------------- |
| 유효기간  | 명시적으로 데이터를 지울 때까지 | 브라우저 또는 탭이 닫힐 때까지 | 존재, 설정에 따름     |
| 저장 용량 | 가장 큼                         | 최대 5MB                       | 최대 4KB              |
| 서버 통신 | X                               | X                              | O                     |
| 개수 제한 | X                               | X                              | O                     |
| 이용 예시 | 자동 로그인                     | 비로그인 장바구니              | 다시보지 않음 팝업 창 |

<br />

## ✔ 참고

**blogs**  
[\[web\] LocalStorage, SessionStorage, Cookie의 차이점](https://velog.io/@ejchaid/localstorage-sessionstorage-cookie%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)  
[브라우저 저장소 ( Local, Session, Cookies)](https://velog.io/@faunus/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%A0%80%EC%9E%A5%EC%86%8C-Local-Session-Cookies)  
[Local, Session, Cookie Storage의 차이점](https://jjeongil.tistory.com/1220)  
[쿠키와 세션 그리고 로컬 스토리지와 세션 스토리지](https://racoonlotty.tistory.com/entry/%EC%BF%A0%ED%82%A4%EC%99%80-%EC%84%B8%EC%85%98-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EB%A1%9C%EC%BB%AC-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%EC%99%80-%EC%84%B8%EC%85%98-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80)  
[local storage vs session storage vs cookie](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/html/web-storage-api.md)

<br/>

**MDN**  
[동일 출처 정책](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy)  
[Web Storage API](https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API)  
[Cookie](https://developer.mozilla.org/en-US/docs/Glossary/Cookie)
