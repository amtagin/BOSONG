gsap.registerPlugin(ScrollTrigger);

gsap.to("#section3", {
  y: "-100%",
  ease: "none",

  scrollTrigger: {
    trigger: "#section2",
    start: "top top+=110",
    end: "+=50%",
    scrub: true,
    pin: true,
  },
});

gsap.to(".wave svg", {
  x: "-25%",
  ease: "none",
  scrollTrigger: {
    trigger: "#section2",
    start: "top top+=110",
    end: "+=50%",
    scrub: true,
  },
});
