# **DOCTYPE (Document Type)**

**HTML이 어떤 버전으로 작성되었는지 미리 선언하여, 웹 브라우저가 내용을 올바르게 표시**할 수 있도록 한다. 웹 브라우저는 호환 모드와 표준 모드 중 무엇으로 렌더링할지 결정하기 위해서 DOCTYPE을 참조하고, DOCTYPE을 선언해주지 않으면 호환 모드로 동작한다.   
HTML5에서 DOCTYPE의 유일한 목적은 완전 표준 모드를 활성화하는 것이다.   


_*렌더링(rendering): HTML, CSS, JavaScript 등 개발자가 작성한 문서를 브라우저에서 그래픽 형태로 출력하는 과정_   

## **호환 모드 VS. 표준 모드**

**- 호환 모드(Quirks mode)**
- 기존 방식 기반 웹사이트를 표현하기 위해 Navigator 4와 Internet Explorer 5의 비표준 동작들을 에뮬레이션한다.

**- 표준 모드(Standards mode)**

- 완전 표준 모드(full standards mode; 표준 모드): HTML, CSS에 의해 웹페이지 표시
- 거의 표준 모드(almost standards mode): 소수의 호환 모드 요소만 지원   

_(참고할 이야기)_
_과거 웹페이지는 Netscape Navigator용과 Microsoft Internet Explorer용 두 가지 버전이 있었다. 웹 개발자들은 당시에 두 가지 브라우저를 지원하는 코드를 각각 짜야 했고, 두 회사의 과도한 경쟁으로 소스 코드는 더욱 복잡해져 갔다. 이러한 과정에서 W3C은 웹 표준을 제정해 나갔다. Internet Explorer가 대부분의 점유율을 차지하면서 안정화되나 싶었지만, 최신 브라우저들의 등장으로 또 호환성 문제가 발생하면서 본격적으로 웹 표준이 확산되기 시작했다. 당시 기존 브라우저들은 새로운 표준을 기반으로 해서는 대부분의 웹사이트들을 표현할 수 없었다. 따라서, 브라우저들은 새 표준 기반 사이트와 예전 방식 기반 사이트를 렌더링하기 위한 두 가지 모드를 제공하게 된다. 이것이 표준 모드와 호환 모드이다._   

## **DTD (Document Type Definition)**

> 문서 형식을 정의해놓은 것으로 DOCTYPE을 명시할 때 사용한다. 즉, HTML 문서가 어떤 문서 형식을 따르는지 DOCTYPE에서 DTD를 지정하는 것이다.

##### HTML 4.01 Strict

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

##### HTML5

```html
<!DOCTYPE html>
```

위 HTML5의 예시를 사용한다면 현재 모든 브라우저들은 완전 표준 모드로 렌더링할 것이다.   
따라서, 더 복잡한 DOCTYPE은 굳이 사용할 필요가 없다.   
만약 다른 DOCTYPE를 사용한다면, 해당 페이지가 거의 표준 모드나 호환 모드로 렌더링되어 크로스 브라우징 이슈가 발생할 위험이 있다.

## 참고
- [Must-Know-About-Frontend](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/html/doctype.md)
- [MDN 호환 모드와 표준 모드](https://developer.mozilla.org/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- [웹 역사 웹툰 - 웹 표준이 중요한 이유](https://www.thisisgame.com/webzine/nboard/213/?n=56672)
- [랜더링](https://velog.io/@kimu2370/%EB%9E%9C%EB%8D%94%EB%A7%81)
- [Recommended Doctype Declarations to use in your Web document](https://www.w3.org/QA/2002/04/valid-dtd-list.html)
