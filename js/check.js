const check = document.querySelectorAll(".check_list li");
check.forEach(function (li) {
  li.addEventListener("click", function () {
    li.classList.toggle("active");
  });
});
