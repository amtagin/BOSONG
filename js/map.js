const mapTab = document.querySelectorAll(".map_tab li");
const mapList = document.querySelectorAll(".map_content");
const mapImg = document.querySelectorAll(".map_img");

mapTab.forEach((tab, index) => {
  tab.addEventListener("click", function () {

    // 리스트 초기화
    mapList.forEach((el) => {
      el.classList.remove("active");
    });

    // 리스트 켜기
    mapList[index].classList.add("active");

    // 탭 초기화
    mapTab.forEach((el) => {
      el.classList.remove("active");
    });

    // 탭 활성화
    tab.classList.add("active");

    
    mapImg.forEach((el) => {
      el.classList.remove("active");
    });

    mapImg[index].classList.add("active");

    document.querySelectorAll(".picon").forEach(el => {
      el.classList.remove("hover", "active");
    });
  });
});

const mapContents = document.querySelectorAll(".map_content");
const mapImgs = document.querySelectorAll(".map_img");

mapContents.forEach((content, i) => {
  const items = content.querySelectorAll("li");
  const targetMap = mapImgs[i];

  const ul = document.createElement("ul");
  ul.classList.add("picon_wrap");

  const icons = [];


  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("picon");

    li.style.left = item.dataset.x + "%";
    li.style.top = item.dataset.y + "%";

    li.innerHTML = `
      <img src="./images/position_icon.svg" alt="icon">
      <div class="picon_label">${item.dataset.name || item.textContent}</div>
    `;

    ul.appendChild(li);
    icons.push(li);
  });

  targetMap.appendChild(ul);

  // ⭐ 아이콘 생성 끝난 후에 이벤트 연결
  items.forEach((item, index) => {

    item.addEventListener("mouseenter", () => {
      icons[index].classList.add("hover");
    });

    item.addEventListener("mouseleave", () => {
      icons[index].classList.remove("hover");
    });
  });
});
