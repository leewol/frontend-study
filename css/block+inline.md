# 📦 block & inline & inline-block

CSS의 box model은 각각 block과 inline /  
inner display type과 outer display type으로 나

<br/>

|                            | block                                                            | inline                          | inline-block                                    |
| -------------------------- | ---------------------------------------------------------------- | ------------------------------- | ----------------------------------------------- |
| 줄바꿈                     | O                                                                | X                               | X                                               |
| width, height              | O                                                                | X                               | O                                               |
| 수직 padding/margin/border | O                                                                | X                               | O                                               |
| 수평 padding/margin/border | O                                                                | O                               | O                                               |
| 예시                       | \<header\>,\<footer\>, \<p\>, \<li\>, \<table\>, \<div\>, \<h1\> | \<span\>, \<a\>, \<img\>, \<i\> | \<button\>, \<input\>, \<select\>, \<textarea\> |

<br />

### ➰ block

- 모양새를 쉽게 제어할 수 있어 화면 구성/레이아웃에 사용
- 상자가 한 줄 차지
- 상자는 컨테이너에서 사용 가능한 공간을 채우기 위해 인라인 방향으로 확장, 기본적으로 width 100%를 채움
- width, height 속성 적용
- padding, margin, border로 인해 다른 요소가 상자로부터 밀려남

### ➰ inline

- inline 속성 가진 태그가 연속으로 사용되는 경우, 좌우에 약 5px 가량 margin이 자동으로 발생
- 줄바꿈 되지 않음
- width, height 속성이 적용 X
  - 태그가 품고 있는 내부 요소의 부피에 맞춰진다
- 수직(top/bottom) padding, margin, border가 적용되지만 다른 인라인 상자가 해당 상자로부터 밀려나는 원인이 되지는 않음
  - **line-height**가 같은 역할을 함
- 수평(left/right) padding, margin, border가 적용되고, 다른 인라인 상자가 해당 상자로부터 밀려남

<br/>

## ✔ 참고

**blogs**  
[CSS inline, inline-block, block 란?](https://velog.io/@shin6403/CSS-inline-inline-block-block-%EB%9E%80)  
[block vs inline vs inline-block](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/css/block-inline-inline-block.md)

<br/>

**MDN**  
[The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
