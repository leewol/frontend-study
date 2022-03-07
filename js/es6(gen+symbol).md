# 🖥 ES6 - Symbol & Generator

## ✔ Symbol(심벌)

기존에 존재하던 6개의 타입(String, Number, Boolean, undefined, null, Object) 다음으로 ES6에서 도입된 **변경 불가능한 원시 타입의 값**

- 다른 값과 **절대 중복되지 않는 유일무이한 값**
  - 객체 프로퍼티 키로 사용 가능
- 생성
  - Symbol 함수 호출 (리터럴 표기법, new 연산자 이용 X)
  - 이때 생성된 심벌 값은 외부로 노출되지 않아 확인할 수 없음
- 객체처럼 접근하면 암묵적으로 래퍼 객체 생성
  - **래퍼 객체(wrapper object)**는 문자열, 숫자, 불리언, 심벌 같은 원시 값에 대해 객체처럼 접근하면 생성되는 임시 객체
  - 자바스크립트 엔진이 일시적으로 원시 값을 연관된 객체를 생성하여 생성된 객체로 **프로퍼티에 접근하거나 메서드를 호출하고 다시 원시 값으로** 되돌림
- 암묵적으로 String이나 Number 타입으로 변환되지 않음, `Boolean` 타입으로는 가능
- `Well-known Symbol` : 자바스크립트가 기본 제공 하는 빌트인 Symbol 값
  - 자바스크립트 내부 엔진 알고리즘에 사용

```javascript
// Symbol 함수 호출하여 생성
// 선택적으로 문자열을 인수로 전달 가능 (심벌 값에 대한 설명, 디버깅 용도)
const mySymbol1 = Symbol("mine");
const mySymbol2 = Symbol("mine");

// 값은 외부로 노출되지 않아 알 수 없음
console.log(typeof mySymbol1, mySymbol1); //symbol, Symbol()
console.log(mySymbol1 === mySymbol2); //false
console.log(mySymbol1.description); //'mine'
console.log(mySymbol1 + 1); //TypeError: Cannot convert a Symbol value to a number
console.log(mySymbol1 + ""); //TypeError: Cannot convert a Symbol value to a string
console.log(!mySymbol1); //true
```

### Symbol 메서드

- `Symbol.for` : 인수로 전달받은 문자열을 key로 사용하여 key와 Symbol 값의 쌍들이 저장되어 있는 전역 심벌 레지스트리(global symbol registry)에서 해당 key와 일치하는 Symbol 값 검색
  - 성공 시, 새로운 Symbol 값 반환하지 않고 검색된 Symbol 값 반환
  - 실패 시, 새로운 Symbol 값 생성하여 해당 메서드 인수 key로 전역 심벌 레지스트리에 저장 후 생성된 Symbol 값 반환
  - 애플리케이션 전역에서 중복되지 않는 Symbol 값을 단 하나만 생성하여 전역 심벌 레지스트리에서 공유 가능

 <br>
 
- `Symbol.keyFor` : 전역 심벌 레지스트리에 저장된 Symbol 값의 키 추출

```javascript
const s1 = Symbol.for("mine"); // 전역 심벌 레지스트리에 새로 생성
const s2 = Symbol.for("mine"); // 저장된 Symbol 값 반환

console.log(s1 === s2); //true
Symbol.keyFor(s1); //'mine'
```

### Symbol과 Property 은닉

- Symbol 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 `for ... in`, `Object.keys`, `Object.getOwnPropertyNames` 메서드로 찾을 수 없음
- `Object.getOwnPropertySymbols` 이용하여 프로퍼티 찾기 가능

<br>

## ✔ Generator (제너레이터)

코드 블록 실행을 **일시 중지 했다가 필요한 시점에 재개**할 수 있는 특수한 **함수**  
 일반 함수처럼 코드 블록을 실행하는 것이 아니라, **제너레이터 객체(이터러블이면서 동시에 이터레이터)**를 생성해 반환

- vs. 일반 함수
  - 함수 호출자에게 함수 실행 제어권 양도(yield) 가능
    - 일반 함수는 함수 호출 이후 함수를 일괄 실행 (호출자는 제어 불가)
  - 함수 호출자와 함수의 상태를 주고받을 수 있음
  - 제너레이터 객체 반환
- `function*` 키워드로 선언, 하나 이상의 `yield` 표현식 포함
  - 화살표 함수(=>), new 연산자 사용 X
- 프로미스 후속 처리 메서드 then/catch/finally 없이 비동기 처리 결과를 반환하도록 구현할 수 있음 _(Deep Dive 878p~ 참조)_
  - 그러나 ES8에 도입된 async/await가 더 간단하고 가독성이 좋음!

### 메서드

- `next` : 제너레이터 함수의 yield 표현식까지 코드 블록을 실행하고, yield 된 값을 value 프로퍼티 값으로, false를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체 반환
- `return` : 인수로 전달받은 값을 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체 반환
- `throw` : 인수로 전달받은 에러를 발생시키고, undefined를 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체 반환
- done 프로퍼티 : 제너레이터 함수가 끝까지 실행되었는가

```javascript
function* genFunc() {
  try {
    yield 1; // 여기까지
    yield 2;
    yield 3;
  } catch (e) {
    console.error(e);
  }
}

const generator = genFunc();

console.log(generator.next()); //{value: 1, done: false}
console.log(generator.next()); //{value: 2, done: false}
console.log(generator.throw("Error!")); //{value: undefined, done: true}, 끝나기 전에 실행해야
console.log(generator.return("End!")); //{value: 'End!', done: true}
```

<br>

```javascript
/******** next에 인수 전달 *********/
function* genFunc() {
  const x = yield 1;
  const y = yield x + 10;
  return x + y;
}

const generator = genFunc(0);

//처음 호출하는 next 메서드 인수 전달은 무시
let res = generator.next(100);
console.log(res); //{value: 1, done: false}

res = generator.next(10);
console.log(res); //{value: 20, done: false}

res = generator.next(20);
console.log(res); //{value: 30, done: true}
```

<br>

```javascript
//무한 이터러블 infiniteFibo를 생성하는 제너레이터 함수
const infiniteFibo = (function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
})();

for (const num of infiniteFibo) {
  if (num > 10000) break;
  console.log(num); // 1 2 3 5 8 ... 2584 4181 6765
}
```

<br>

## ✔ 참고

모던 자바스크립트 Deep Dive  
[ES6 (ES2015) 의 특징들](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/javascript/es6.md)
