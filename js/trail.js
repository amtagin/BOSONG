const images = [
  "./images/sticker1.png",
  "./images/sticker2.png",
  "./images/sticker3.png",
  "./images/sticker4.png",
  "./images/sticker5.png",
  "./images/sticker6.png",
  "./images/sticker7.png",
];

const container = document.getElementById("section3");

let currentImageIndex = 0;

let trailX = 0;
let trailY = 0;

// 이미지 간 거리
let distanceThreshold = window.innerWidth < 1920 ? 150 : 220;

window.addEventListener("resize", () => {
  distanceThreshold = window.innerWidth < 1920 ? 150 : 220;
});

window.addEventListener("mousemove", (e) => {
  const dx = e.clientX - trailX;
  const dy = e.clientY - trailY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > distanceThreshold) {
    createTrail(e.clientX, e.clientY);
    trailX = e.clientX;
    trailY = e.clientY;
  }
});

function createTrail(x, y) {
  const img = document.createElement("img");
  img.classList.add("image-trail");
  img.src = images[currentImageIndex];
  container.appendChild(img);

  currentImageIndex = (currentImageIndex + 1) % images.length;

  gsap.set(img, {
    x: x,
    y: y,
    rotation: gsap.utils.random(-20, 20),
  });

  gsap.fromTo(
    img,
    {
        scale:0,
        opacity:0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.25,
      ease: "back.out(4)",
    }
  );

  gsap.to(img, {
    scale: 0.7,
    opacity: 0.9,
    duration: 1,
    delay: 0.1,
    ease: "power2.in",

    onComplete: () => {
      img.remove();
    },
  });
}
