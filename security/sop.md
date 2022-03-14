# Same-Origin Policy (동일 출처 정책)

어떤 *출처에서 불러온 문서나 스크립트가 **다른 출처에서 가져온 리소스와 상호작용하는 것을 제한**하는 보안 방식   
ex) `XMLHttpRequest`, `<img>` 요소 사용할 때 등의 상호작용 통제   
잠재적으로 해로울 수 있는 문서를 분리함으로써 공격받을 수 있는 경로를 줄여줌

### *웹 콘텐츠의 출처(Origin)
접근할 때 사용하는 URL의 **스킴(프로토콜), 호스트(도메인), 포트**로 정의   
모두 일치하는 경우 같은 출처   

`http://example.com/app1/에 요청`

|리소스 요청|결과|이유|
|----------|----|----|
|http://example.com/app2/|성공|스킴(http)과 호스트(example.com) 일치, 경로만 다름|
|http://example.com:80/app1/|성공|HTTP의 기본 포트는 80|
|https://example.com/app1|실패|다른 스킴|
|http://www.example.com/app1/ <br/> http://myapp.example.com/app1/|실패|다른 호스트|
|http://example.com:8080/app1/|실패|다른 포트|

### Internet Explorer 예외 사항
- 신뢰할 수 있는 사이트
  - 양쪽 도메인 모두 **높음** 단계의 보안 수준을 가진 경우 SOP 적용 X

- 포트
  - SOP 검사에 포트를 포함하지 않음

### 출처 상속
`about:blank`와 `javascript:` URL은 출처 서버에 대한 정보를 가지고 있지 않아, **해당 URL을 가지고 있는 문서의 출처를 상속**

<br/>

## ✔ 해결 방법
### 1. 출처 변경
스크립트로 [`document.domain`](https://developer.mozilla.org/ko/docs/Web/API/Document/domain) 값을 현재 도메인이나 현재 도메인의 상위 도메인으로 변경 가능   
상위 도메인으로 설정한 경우, 길이가 더 짧은 상위 도메인을 SOP에 사용

**(예시)**
`http://store.company.com/dir/other.html` 문서의 스크립트가 아래를 실행한 경우

```javascript
// OK
document.domain = "company.com";

// NO
document.domain = "othercompany.com";
```

`http://company.com/dir/page.html`도 같은 스크립트를 실행할 경우, SOP 통과 가능


**몇몇 브라우저가 지원하더라도, 보안 버그를 발생시킨느 등의 문제로 표준에서 제외되었고 사용하지 않는 게 좋음**

<br/>

### 2. 교차 출처 접근 허용
`교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)` 이용   
└ 추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제

- 즉, 리소스가 자신의 출처와 다를 때 **교차 출처 HTTP 요청을 실행**하므로 다른 출처의 리소스를 불러오려면 **올바른 CORS 헤더를 포함한 응답**을 반환해야 함

**[(예시)](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS#%EC%A0%91%EA%B7%BC_%EC%A0%9C%EC%96%B4_%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4_%EC%98%88%EC%A0%9C)**  
`https://bar.other` 리소스 소유자가 오직 `https://foo.example` 의 리소스 접근 요청만 허용하려는 경우

```javascript
Access-Control-Allow-Origin: https://foo.example
```

위 내용을 전송하면, `https://foo.example` 이외의 도메인은 cross-site 방식으로 리소스에 접근 불가

### 3. [`window.postMessage()`](https://developer.mozilla.org/ko/docs/Web/API/Window/postMessage)
한 window는 다른 window를 참조할 수 있고, targetWindow.postMessage()를 통해 다른 window에 MessageEvent 전송 가능   
이벤트를 받는 window는 이를 통해 필요에 따라 이벤트를 처리할 수 있음

- 그렇게 중요한 방법은 아님!

### 4. 프록시 서버
프록시 서버가 실제 서버에 요청을 보내서 받아 온 다음, 그것을 `Access-Control-Allow-Origin` 설정을 한 뒤 클라이언트에게 돌려줌

- 프록시 서버는 클라이언트와 서버 사이에서 정보 교환을 도와주는 서버
- 리소스 요청하고자 하는 서버의 `Access-Control-Allow-Origin` 속성 수정 불가능한 경우에 유용
- Apache/Nginx 같은 웹 서버에서 프록시 기능 활성화 가능하고, CRA(Create-React-App)를 사용하고 있다면 `package.json`의 `proxy`값을 설정하여 프록시 서버 기능 호라성화 가능
- 서버를 한 단계 더 거치므로 기존 요청보다 **느리다**


### JSONP(JSON with Padding)
데이터를 가공하는 콜백함수를 넘기는 방식

- 최신 브라우저에서는 거의 사용 안 하고, 보안 문제가 있어서 CORS를 권장

```html
<script src="http://company.com/example.json"></script>
```
CORS가 나오기 이전에 사용하던 방식으로, `<script>` 태그를 사용하면 SOP 정책을 피할 수 있으므로 JSON 데이터 받아올 때 태그 사용해서 받아올 수 있음

```html
<script>
  { name: 'john', age: 19 }
</script>
```

JSON 데이터의 포맷은 객체 형식이기 때문에 위와 같이 삽입   

```html
<script src="http://company.com/example.json?callback=callbackFunction"></script>
```

하지만 자바스크립트 문법에 맞지 않고, 애초에 요청 목적이 데이터 가공이기 때문에, 받은 JSON 데이터를 파라미터로 콜백함수에 넘겨서 위와 같이 실행   

```html
<script>callbackFunction(데이터)</script>
```

따라서, 위와 같이 사용

**(예제)**
```html
<html>
    <head>
    </head>
    <body>
        <div id = 'twitterFeed'></div>
        <script>
        function myCallback(dataWeGotViaJsonp){
            var text = '';
            var len = dataWeGotViaJsonp.length;
            for(var i=0;i<len;i++){
                twitterEntry = dataWeGotViaJsonp[i];
                text += '<p><img src = "' + twitterEntry.user.profile_image_url_https +'"/>' + twitterEntry['text'] + '</p>'
            }
            document.getElementById('twitterFeed').innerHTML = text;
        }
        </script>
        <script type="text/javascript" src="http://twitter.com/status/user_timeline/padraicb.json?count=10&callback=myCallback"></script>
    </body>
</html>
```

<br/>

## ✔ 참고
[MDN 동일 출처 정책 - 웹 보안](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy)   
[MDN 교차 출처 리소스 공유 (CORS)](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)   
[동일 출처 정책 (Same-Origin Policy)](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/security/sop.md)   
[What is JSONP, and why was it created?](https://stackoverflow.com/questions/2067472/what-is-jsonp-and-why-was-it-created)