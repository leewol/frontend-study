# 🖥 네이티브 객체(Native Object) vs 호스트 객체(Host Object)

<br>

![host and native object](hostandnative.png)

<br>

## ✔ Native Object

Host 환경이 아닌, `ECMAScirpt 명세`에서 의미론적인 부분을 완전히 `정의`해 놓은 객체

###### _ECMAScirpt: 자바스크립트 언어 규약_

<br>

- 애플리케이션 전역의 공통 기능 제공
- 애플리케이션의 환경과 관계없이 언제나 사용 가능
- 종류
  - Object (constructor), Date, Math, parseInt, eval, string methods like indexOf and replace, array methods, ...
  - 값 속성 : NaN, Null, undefined, globalThis
  - 함수 속성 : eval(), parseInt(), isNaN() - 객체에 붙지 않고 전역으로 호출하는 함수
  - 기초 객체(fundamental obj) : Object, Boolean, Function, Symbol - 모든 객체의 기본 객체
    - 오류 객체 : Error, SyntaxError
    - 숫자/날짜 객체 : Number, Math, Date
  - 텍스트 처리 객체 : String, RegExp
  - 인덱스 콜렉션 : 인덱스값으로 정렬된 콜렉션. Array 포함

<br>

## ✔ Host Object

ECMAScirpt의 실행 환경을 완성하기 위해 `Host 환경에서 제공`하는 객체

<br>

- OS, Web browser에 따라 제공 객체가 달라짐
- 네이티브가 아니면 모두 호스트 객체다
- 종류
  - window, document, location, history, XMLHttpRequest, setTimeout, getElementsByTagName, querySelectorAll, ...
  - 전역객체(Global object !== Global Objects): 모든 객체의 유일한 최상위 객체 (브라우저의 window, 서버의 global 객체)
  - BOM(Browser Object Model): 브라우저 탭 또는 브라우저 창의 모델을 생성, BOM의 최상위 객체는 window 객체(현재 브라우저 창 또는 탭을 표현)
  - DOM(Document Object Model): 현재 웹페이지의 모델을 생성, DOM의 최상위 객체는 document 객체로 전체 문서를 표현
  - Event, Ajax 등

<br>

## ✔ 참고

[네이티브 객체 vs 호스트 객체](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/javascript/native-host.md)  
[What is the difference between native objects and host objects?](https://stackoverflow.com/questions/7614317/what-is-the-difference-between-native-objects-and-host-objects)  
[\[TIL\] 호스트 객체(Host Objects)와 네이티브 객체(Native Objects)](https://velog.io/@bangina/FE%EB%A9%B4%EC%A0%91%EB%8C%80%EB%B9%84-%ED%98%B8%EC%8A%A4%ED%8A%B8-%EA%B0%9D%EC%B2%B4Host-Objects%EC%99%80-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EA%B0%9D%EC%B2%B4Native-Objects)   
[Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
