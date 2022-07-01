gsap.registerPlugin(ScrollTrigger);

gsap.from("#sideHeader1", {
  scrollTrigger: "#sideHeader1",
  duration: 1.25,
  x: -300,
  opacity: 0,
  paused: true,
  delay: 1,
});

gsap.from("#sideHeader2", {
  scrollTrigger: "#sideHeader2",
  duration: 1.25,
  x: -300,
  opacity: 0,
  paused: true,
  delay: 1,
});

gsap.from("#sideHeader3", {
  scrollTrigger: "#sideHeader3",
  duration: 1.25,
  x: -300,
  opacity: 0,
  paused: true,
  delay: 1,
});

gsap.from("#scrollHeader1", {
  scrollTrigger: "#scrollHeader1",
  y: 50,
  opacity: 0,
  paused: true,
  delay: 1,
});

gsap.from("#scrollHeader2", {
  scrollTrigger: "#scrollHeader2",
  y: 50,
  opacity: 0,
  paused: true,
  delay: 1,
});

gsap.from("#scrollHeader3", {
  scrollTrigger: "#scrollHeader3",
  y: 50,
  opacity: 0,
  paused: true,
  delay: 1,
});

gsap.from("#scrollHeader4", {
  scrollTrigger: "#scrollHeader4",
  y: 50,
  opacity: 0,
  paused: true,
  delay: 1,
});

gsap.from("#scrollHeader5", {
  scrollTrigger: "#scrollHeader5",
  y: 50,
  opacity: 0,
  paused: true,
  delay: 1,
});

gsap.from("#dropdown", {
    scrollTrigger: "#dropdown",
    y: -400,
    opacity: 0,
    paused: true,
    delay: 1,
  });

// get scroll to show navbar background only after carousel images are cleared, not working right now

let carousel = document.querySelector("#carousel-wrapper");
let navWrapper = document.querySelector("#nav-wrapper");

const fadeIn = gsap.fromTo(navWrapper, {backgroundColor: "#f6884600"}, {duration: 0.5, backgroundColor: "#f68846ff"});

ScrollTrigger.create({
    trigger: carousel,
    start: "bottom top",
    end: "max",
    animation: fadeIn,
    toggleActions: "play complete reverse reverse"
});

let targets = gsap.utils.toArray(".hamburger");

targets.forEach((obj) => {
  obj.anim = gsap.to(document.querySelector("#dropdown"), { y: 0, opacity: 1 }).reversed(true);
  obj.addEventListener("click", doCoolStuff);
});

function doCoolStuff() {
  this.anim.reversed(!this.anim.reversed());
}