const cursor = document.querySelector(".cursor");
const noStalkerSection = document.querySelector(".no-stalker");

let currentX = 0;
let currentY = 0;

let targetX = 0;
let targetY = 0;

let started = false;
let cursorVisible = false;

// 마우스 위치 저장
document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;

// ⭐ 처음 움직일 때만 보이기
if (!cursorVisible) {
  cursor.style.opacity = 1;
  cursorVisible = true;
}

if (!started) {
  currentX = e.clientX;
  currentY = e.clientY;

  animate();
  started = true;
}
});

// 부드럽게 따라가기
function animate() {
  currentX += (targetX - currentX) * 0.15;
  currentY += (targetY - currentY) * 0.15;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mouseover", (e) => {
  const target = e.target;

  if (
    target.closest(
      'a, button, [role="button"], [data-cursor="hover"], .swiper-slide-active, .event-box'
    )
  ) {
    cursor.classList.add("hover");
  } else {
    cursor.classList.remove("hover");
  }
});

// 클릭 상태
document.addEventListener("mousedown", () => {
  cursor.classList.add("click");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("click");
});



// 마우스 스토커/ 지피티가 써줌 이해 안됨
var stars = [];
var lastX = 0;
var lastY = 0;

function createStar(x, y) {
  var el = document.createElement("div");

  el.style.position = "absolute";
  el.style.width = "50px";
  el.style.height = "50px";
  el.style.borderRadius = "50%";
  el.style.backgroundColor = "rgba(150,240,255,0.5)";
  el.style.border = "1.5px solid #f2f4f5";
  el.style.pointerEvents = "none";
  el.style.zIndex = "999";

  var star = {
    el: el,
    x: x - 15 + (Math.random() - 0.5) * 40,
    y: y - 15 + (Math.random() - 0.5) * 40,
    life: 100,
  };

  document.body.appendChild(el);
  stars.push(star);
}

document.addEventListener("mousemove", (e) => {
  const dx = e.pageX - lastX;
  const dy = e.pageY - lastY;
  const dist = Math.sqrt(dx * dx + dy * dy);

  const isInsideNoStalker = noStalkerSection?.contains(e.target);

  if (dist > 100 && !isInsideNoStalker) {
    // 숫자 키우면 덜 생김
    createStar(e.pageX, e.pageY);
    lastX = e.pageX;
    lastY = e.pageY;
  }
});

// ⭐ 이름 변경 (충돌 방지)
function starAnimate() {
  requestAnimationFrame(starAnimate);

  for (var i = stars.length - 1; i >= 0; i--) {
    var s = stars[i];

    s.life--;

    s.y -= 0.5 + Math.random() * 1;
    s.x += (Math.random() - 0.5) * 2;

    s.el.style.top = s.y + "px";
    s.el.style.left = s.x + "px";

    var scale = s.life / 100;
s.el.style.transform = `scale(${scale})`;

// ⭐ opacity 따로 제어 (핵심)
if (s.life > 60) {
  s.el.style.opacity = 1;
} else {
  s.el.style.opacity = s.life / 60;
}

    if (s.life <= 0 || s.y <= 0) {
      s.el.remove();
      stars.splice(i, 1);
    }
  }
}

// ⭐ 이거만 실행
starAnimate();
