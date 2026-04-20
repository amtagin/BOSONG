const filterBtn = document.querySelectorAll(".filter-wrapper a");
const event = document.querySelectorAll(".event-box");

filterBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // 버튼 active 처리
    filterBtn.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");

    const filter = btn.dataset.filter;

    event.forEach((item) => {
      if (filter === "*" || item.matches(filter)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});
