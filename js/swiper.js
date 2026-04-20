var swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 115,

    autoplay: {
        delay: 5000,
      },
      speed: 900,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
