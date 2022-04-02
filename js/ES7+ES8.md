# ES7 ~ ES8의 특징

## ✔ ES7 (ES2016)

### `Array.prototype.includes`

```javascript
// 첫 번째 인자: 타겟 원소
// 두 번째 인자: 어느 인덱스부터 검사할 건지
array.includes(valueToFind[, fromIndex])
```

`includes()` 메서드는 배열이 특정 요소를 포함하고 있는지 판별

- `fromIndex`가 음수라면, `(array.length + fromIndex)` 로 이용

#### 예시

```javascript
const arr1 = [1, 2, 3];

arr1.includes(3); // true
arr1.includes(3, 3); // false
arr1.includes(3, -1); // true
```

<br>

### 거듭제곱(Exponentiation)

```javascript
x ** y;
```

- `BigInt`도 피연산자로 받을 수 있다는 점을 제외하면, `Math.pow()`와 동일

#### 예시

```javascript
2 ** 3; // 8
10 ** -1; // 0.1
NaN ** 2; // NaN
```

<br>

## ✔ ES8 (ES2017)

### async/await function

```javascript
async function name([param[, param[, ... param]]]) {
    statements
}
```

`AsyncFunction` 객체를 반환하는 하나의 비동기 함수를 정의

- \*암시적으로 `Promise` 사용하여 결과 반환
  - async 함수에 의해 반환된 값으로, 해결되거나 async 함수 내에서 발생하는 캐치되지 않은 예외로 거부되는 값
- `await` 식이 포함될 수 있음 (async 함수 내에서만 유효)
  - `async` 함수 실행을 일시 중지 하고, 전달된 `Promise`의 해결을 기다린 다음, `async` 함수 실행을 다시 시작하고, 완료 후 값을 반환
- 비동기 함수: 이벤트 루프를 통해 비동기적으로 작동하는 함수

```javascript
async function foo() {
  return 1;
}

// *위 코드는 아래와 같습니다.

function foo() {
  return Promise.resolve(1);
}
```

#### async/await function의 목적

1. 사용하는 여러 Promise의 동작을 동기스럽게 사용할 수 있게 함
2. 어떠한 동작을 여러 Promise의 그룹에서 간단하게 동작하게 함 - Callback Hell 탈출!

#### 예시

```javascript
const sequentialStart = async function () {
  console.log("***SEQUENTIAL START***");
  const one = await resolveAfter1Second();
  const three = await resolveAfter3Seconds();

  console.log(one);
  console.log(three);
};

sequentialStart(); // invoke async function
```

<br>

### `Object.entries()`

```javascript
Object.entries(obj);
```

`Object.entries()` 메서드는 `[key, value]` 쌍의 배열 반환

#### 예시

```javascript
const anObj = { 100: "a", 2: "b", 7: "c" };
Object.entries(anObj); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
```

<br>

### `Object.values()`

```javascript
Object.values(obj);
```

`Object.values()` 메소드는 value 만을 배열로 반환

#### 예시

```javascript
const obj = { one: 1, two: 2, three: 3 };
Object.values(obj); // [1, 2, 3]

const myStr = "Lufthansa";
Object.values(myStr); // ["L", "u", "f", "t", "h", "a", "n", "s", "a"]
```

<br>

### `Object.getOwnPropertyDescriptor()`

```javascript
Object.getOwnPropertyDescriptors(obj);
```

`Object.getOwnPropertyDescriptors()` 메서드는 주어진 객체의 모든 속성들의 설명자(descriptor)들을 반환

- 속성 설명자 (descriptor)
  - `value` : 속성과 관련된 값 (데이터 설명자)
  - `writable` : `참(true)`인 경우, 속성과 관련된 값이 변경될 수 있는 상태 (데이터 설명자)
  - `get` : 속성에 대한 `getter` 역할을 하는 함수, 정의되지 않은 경우에는 `undefined` (접근자 설명자)
  - `set` : 속성에 대한 `setter` 역할을 하는 함수, 정의되지 않은 경우에는 `undefined` (접근자 설명자)
  - `configurable` : `참(true)`인 경우, 객체로부터 속성 설명자가 변경 및 삭제될 수 있는 상태
  - `enumerable` ; `참(true)`인 경우, 열거 가능한 상태의 속성

#### 예시

```javascript
let myObj = {
  property1: "foo",
  property2: 42,
  property3: () => console.log("prop4"),
};

/*
{ property1: {…}, property2: {…}, property3: {…} }
  property1: {value: "foo", writable: true, enumerable: true, configurable: true}
  property2: {value: 42, writable: true, enumerable: true, configurable: true}
  property3: {value: ƒ, writable: true, enumerable: true, configurable: true}
  __proto__: Object
*/
```

<br>

### Trailing Commas

함수 선언 및 호출의 후행 쉼표 허용

- 버전 관리 이력이 간단해지고, 코드 편집이 편해짐
- 함수의 매개변수 정의나 호출에 쉼표만 있을 경우 `SyntaxError`가 발생
- rest 매개변수를 사용할 때는 trailing comma를 사용할 수 없음
- JSON은 ES5 이전의 JavaScript 문법을 기초로 하므로 JSON에서는 trailing comma를 사용할 수 없음

#### 예시

```javascript
function foo(bar, baz) {
  console.log(bar, baz);
}

// SyntaxError: missing formal parameter
function f(,) {}

// SyntaxError: parameter after rest parameter
function f(...p,) {}

// SyntaxError JSON.parse: unexpected character
JSON.parse('{"foo" : 1, }');
```

<br>

## ✔ 참고

[ES7 (ES2016) ~ ES8 (ES2017) 의 특징들(배하람님 github)](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/javascript/es7-es8.md)  
[ECMAScript-new-feature-list / ES2016](https://github.com/daumann/ECMAScript-new-features-list/blob/master/ES2016.MD)  
[ECMAScript-new-feature-list / ES2017](https://github.com/daumann/ECMAScript-new-features-list/blob/master/ES2017.MD)

#### MDN

[Array.prototype.includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)  
[거듭제곱 (\*\*)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)  
[async function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)  
[Object.entries()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)  
[Object.getOwnPropertyDescriptors()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)  
[Trailing commas](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Trailing_commas)
