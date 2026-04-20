const intro = document.querySelector("#intro");
const video = document.querySelector(".intro_video");

// 이미 본 사람이면 바로 숨김
if (localStorage.getItem("introPlayed")) {
  intro.style.display = "none";
} else {
  // 영상 끝나면
  video.addEventListener("ended", () => {
    intro.classList.add("hide");

    // 다시 안 보이게 저장
    localStorage.setItem("introPlayed", "true");
  });

  // 혹시 영상 길이 안 맞을 때 대비 (7초 강제)
  setTimeout(() => {
    intro.classList.add("hide");
    localStorage.setItem("introPlayed", "true");
  }, 7000);
}
