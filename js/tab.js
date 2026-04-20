const tabList = document.querySelectorAll(".tab_menu li");
const contentList = document.querySelectorAll(".content_wrap");

tabList.forEach((tab, index) => {
  tab.addEventListener("click", function () {

    // 초기화
    contentList.forEach((el) => {
      el.classList.remove("active");
    });

    // 컨텐츠 켜기
    contentList[index].classList.add("active");

    // 탭 초기화
    tabList.forEach((el) => {
      el.classList.remove("active");
    });

    // 클릭 시 활성화
    tab.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tabIndex = params.get("tab");

  if (tabIndex !== null) {
    const tabs = document.querySelectorAll(".tab_menu li");
    const contents = document.querySelectorAll(".service_wrap");

    const i = Number(tabIndex);

    // 초기화
    tabs.forEach(el => el.classList.remove("active"));
    contents.forEach(el => el.classList.remove("active"));

    // 활성화
    if (tabs[i]) {
      tabs[i].classList.add("active");
      contents[i].classList.add("active");
    }
  }
});