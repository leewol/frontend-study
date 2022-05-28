const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d"); // context에 그려진다

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ? lineJoin : 선들이 만나는 모서리 모양
// ? lineCap : 선의 끝 모양
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(evt) {
  // mousedown일 때만 함수가 실행됨
  if (!isDrawing) return;

  console.log(evt);

  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // start from
  ctx.lineTo(evt.offsetX, evt.offsetY); // go to
  ctx.stroke();
  [lastX, lastY] = [evt.offsetX, evt.offsetY];
}

canvas.addEventListener("mousedown", (evt) => {
  isDrawing = true;
  [lastX, lastY] = [evt.offsetX, evt.offsetY];
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
