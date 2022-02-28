# ⚙ Module System

### 여러가지 기능들에 관한 코드가 모여 있는 하나의 파일 (코드를 분리하기 위한 방법)

<br>

이전에 웹에서 사용되던 JS는 module 개념 없이 한 파일에 모두 작성됨  
하지만 서버 사이드에서 사용한다면 이는 생산성 면에서 문제가 될 것이므로  
**모듈화**가 필요했고, 그 기준을 통일하기 위해 여러 모듈 시스템이 등장

<br>

## ✔ 사용 이유

- **유지보수성 (Maintainablity)**
  - 각 기능이 모듈화가 잘 되어 있다면, 기능 간 의존성이 줄어 기능을 개선하거나 수정할 때 편리
- **네임스페이스화 (Namespacing)**
  - 네임스페이스(Namespace)
    - 한 덩어리의 데이터에 이름을 붙여 충돌 가능성을 줄이고, 쉽게 참조할 수 있게 하는 개념
    - ex) namespace A의 a, b, c와 namespace B의 a, b, c는 동일한 이름을 가지지만 다른 네임스페이스에 존재하여 충돌 가능성이 낮음
  - 여러 스크립트가 한 페이지 내에 있는 코드는 전역 변수가 많아질수록 이름이 겹칠 우려가 높아지고, 어느 곳에서든 접근이 가능해져 코드의 신뢰성이 떨어질 수 있음. 모듈로 분리하면 각 모듈의 네임스페이스를 가지므로 신뢰성 확보!
- **재사용성 (Reusability)**
  - 전혀 다른 프로젝트에서 똑같은 기능(코드) 재사용 가능

<br>

```html:index.html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
    <body>
    	<script>
    		function helloWorld() {
    			return 'Hello World!'
    		}
    		alert(helloWorld())
    	</script>
    </body>
</html>
```

```html:index.html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
        <script src="helloWorld.js"></script>
	</head>
    <body>
    	<script>
    	    alert(helloWorld())
    	</script>
    </body>
</html>
```

```javascript:helloWorld.js
function helloWorld() {
    return 'Hello World!'
}
```

<br>

## ✔ Common JS (Common JavaScript)

- `module.exports`
- **서버 사이드**에서 사용
  - 서버 사이드 자바스크립트 런타임인 node.js의 독자적인 방식
- 첫 require 시에만 실행하고 cache 되므로 **여러 번** 실행할 모듈은 **함수형**으로 작성해야 함
- 의존성 패키지, 모듈, json 파일 사용 가능
- **동기적** 작동

```javascript:lee.js
// *** 기본적인 작성법 *** //
const name = 'Lee';
const age = 20;
const nationality = 'Korea';

module.exports = {
    name,
    age,
    nationality,
};
```

### module

- `예약어`라고 하고, 다양한 속성이 있음
- `exports` 객체를 가짐
- `module.exports`는 빈 객체를 참조

```javascript:kim.js
// *** 변수명으로 export *** //
const name = 'Kim';
const age = 23;
const nationality = 'Korea';

exports.name = name;
exports.age = age;
exports.nationality = nationality;

// Not allowed
exports = 4;
```

### exports

- `exports`는 module.exports를 참조
- require는 항상 module.exports를 return 받음
- exports 자체에 다른 값을 대입하는 건, 더 이상 module.exports 객체를 가리키는 것이 아니므로 허용되지 않음!

```javascript:helloWorld.js
// *** 변수명으로 export *** //
module.exports = () => {
    console.log('Hello World!');
}

// const helloWorld = () => {
// 	console.log('Hello World!')
// }

// module.exports = {
// 	helloWorld
// }
```

```javascript:index.js
const student = require('./lee');
const tutor = require('./kim');
const welcome = require('./helloWorld');

console.log(student);
// { name: 'Lee', age: 20, nationality: 'Korea' }
console.log(tutor);
// { name: 'Kim', age: 23, nationality: 'Korea' }
// 모듈을 Object로 만들고, 각 key-value를 지정해서 내보냄
welcome.helloWorld();
// Hello World!
```

## ✔ AMD (Asynchronous Module Definition)

- `define`
- **클라이언트 사이드**에서 주로 사용 (서버도 OK)
  - Common JS는 동기적, 클라이언트 사이드인 브라우저에서는 필요한 모듈이 모두 다운로드될 때까지 아무것도 할 수 없는 입장이 되므로 해당 방법 채택
- **비동기적** 작동
- webpack 같은 모듈 번들러를 통한 **모듈 번들링** 필요

  - 모듈 번들링: 웹 애플리케이션을 구성하는 수많은 파일(자원)을 하나의 파일로 병합/압축 해주는 것
  - 모듈 번들러: 모듈 번들링하여 결과물을 만드는 도구

- [예제 코드 실행]('./AMD_TEST') _출처:[\[메디스트림 개발팀\]](https://careers.medistream.co.kr/d147af1e-89d7-481f-87e1-88be95484959)_
  - 예제 코드 실행 위해 [LATEST RELEASE -> Download](https://requirejs.org/docs/download.html#requirejs) 후 열리는 파일의 내용을 복사하여 require.js 파일 생성 후 붙여넣기 필요

## ✔ UMD (Universal Module Definition)

- Common JS와 AMD를 합친 모듈 시스템
  - 두 가지 모두 사용 가능 -> Common JS/AMD 두 가지 모듈을 만들 필요가 없음
  - 서로 호환되지 않는 문제 해결하기 위함
- 여러 모듈 로더에서 사용 가능
- 엄밀히 말하면 디자인 패턴에 가까움
- [공식 UMD 소스 코드](https://github.com/umdjs/umd/blob/master/templates/returnExports.js)

```javascript
// 공식 UND 소스 코드
(function (root, factory) {
  // *********** AMD PART => define 사용 *********** //
  if (typeof define === "function" && define.amd) {
    define(["b"], factory);
    // ****** CJS PART => module.exports 사용 ****** //
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("b"));
    // * 두 가지 방식 모두가 아니라면 winodow 객체에 모듈을 내보냄 * //
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.b);
  }
})(typeof self !== "undefined" ? self : this, function (b) {
  // Use b in some fashion.

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {};
});
```

- UMD 구성
  - 모듈 로더를 확인하는 즉시 실행 함수: root(전역 범위), factory(모듈을 선언하는 함수) 2개의 파라미터를 가짐
    - 1번째 인자 root: 클라이언트 사이드에서 구현할 값이 undefined가 아니라면 self(window), 맞다면 this를 return
    - 2번째 인자 모듈 생성 익명 함수: 빈 객체 리터럴을 리턴하는 함수를 보내어 각각의 환경에서 각 모듈을 사용할 수 있게 함
- AMD 부분 : `define()`이 함수, `define.amd` 속성의 객체를 가짐
- CJS 부분 : `module`이 객체, `module.exports` 속성의 객체를 가짐

## ✔ ESM (ECMAScript Module)

- `export` & `import`
- 모든 브라우저가 지원하는 것은 아님
  - Babel의 `@babel/plugin-transform-modules-commonjs`를 통해 변환시켜서 사용
- ES6부터 언어 자체에 모듈을 탑재해 편리해짐
  - 앞서 보았던 것처럼 시스템을 위한 코드가 별도로 필요하다면 매우 번거로움
- 하지만 Common JS가 일반적으로 많이 사용되었고, 두 모듈의 **동작 방식이 크게 달라서** require를 import로 대체할 수 없음
  - node.js는 ES Module과 Common JS를 **같이 사용하기에 부적절**
    <br>

```javascript:moduleA.js
const A = () => {};
export default A;
```

```javascript:moduleB.js
export const B = () => {};
```

```javascript:index.js
import A from 'moduleA';
import { B } from 'moduleB';
```

- named export
  - 여러 번 사용 가능
  - import에서 {}로 묶어서 불러와야 함
- default export
  - 모듈 내에서 한 번만 사용 가능
  - 내보낸 이름 그대로 import에서 바로 사용 가능
- `as`로 별칭(alias) 줄 수 있음
- `*` 와일드 카드로 한 번에 불러오거나 내보내기 가능

<br>

## ✔ 정리

> 1. CJS (CommonJS)에서 패키지 개념을 처음 제안하여 node.js 에서 사실상 표준으로 먼저 자리 잡았습니다.
> 2. AMD (Asynchronous Module Definition) CommonJS 에서 분리된 프로젝트로 클라이언트 사이드에서 사용하기 위한 방법론으로 비동기 개념을 추가한 개념입니다.
> 3. UMD (Universal Module Definition) AMD와 CommonJS 모두 사용 가능합니다.
>    AMD는 클라이언트 사이드에서 많이 사용되고, CommonJS는 서버 사이드에서 많이 사용되기 때문에, UMD를 사용하면 두 개의 모듈을 따로 만들 필요가 없습니다.
> 4. ESM (ECMAScript Module) ES6 자바스크립트 모듈 기능으로 추가되어 공식적인 표준을 제공하고 있습니다.

<br>

## ✔ 참고

[\[메디스트림 개발팀\] JavaScript Modules](https://careers.medistream.co.kr/d147af1e-89d7-481f-87e1-88be95484959)  
[\[JavaScript\] CJS, AMD, UMD, ESM](https://beomy.github.io/tech/javascript/cjs-amd-umd-esm/)  
엘리스 AI트랙 학습 자료 - Node.js 기초  
[AMD, CommonJS, UMD 모듈](https://www.zerocho.com/category/JavaScript/post/5b67e7847bbbd3001b43fd73)  
[모듈 시스템: CommonJS, AMD, UMD, ES6](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/javascript/module.md)  
[\[IT용어\] NameSpace(네임스페이스)란?](https://java119.tistory.com/65)
