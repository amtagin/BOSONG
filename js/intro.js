const intro = document.querySelector("#intro");
const video = document.querySelector(".intro_video");

// 항상 보이게 시작
intro.style.display = "block";

// 영상 끝나면 숨김
video.addEventListener("ended", () => {
  intro.classList.add("hide");
});

// 혹시 대비 (7초 후 강제 종료)
setTimeout(() => {
  intro.classList.add("hide");
}, 7000);
