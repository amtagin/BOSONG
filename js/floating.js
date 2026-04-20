document.addEventListener("DOMContentLoaded", () => {
    const fab = document.querySelector(".fab");
    const main = document.querySelector(".fab_main");
  
    if (!fab || !main) return;
  
    if (localStorage.getItem("fabOpen") === "true") {
      fab.classList.add("active");
    }
  
    main.addEventListener("click", () => {
      fab.classList.toggle("active");
      localStorage.setItem("fabOpen", fab.classList.contains("active"));
    });
  });