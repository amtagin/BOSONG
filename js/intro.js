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

// const intro = document.querySelector("#intro");
// const video = document.querySelector(".intro_video");

// // 이미 본 사람이면 바로 숨김
// if (localStorage.getItem("introPlayed")) {
//   intro.style.display = "none";
// } else {

//   // 영상 끝나면
//   video.addEventListener("ended", () => {
//     intro.classList.add("hide");

//     // 다시 안 보이게 저장
//     localStorage.setItem("introPlayed", "true");
//   });

//   // 혹시 영상 길이 안 맞을 때 대비 (7초 강제)
//   setTimeout(() => {
//     intro.classList.add("hide");
//     localStorage.setItem("introPlayed", "true");
//   }, 7000);
// }
