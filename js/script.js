gsap.registerPlugin(ScrollTrigger);

gsap.from("#sideHeader1", {
    scrollTrigger: "#sideHeader1",
    duration: 1.25,
    x: -300, opacity: 0,
    paused: true,
    delay: 1
});

gsap.from("#sideHeader2", {
    scrollTrigger: "#sideHeader2",
    duration: 1.25,
    x: -300, opacity: 0,
    paused: true,
    delay: 1
});

gsap.from("#sideHeader3", {
    scrollTrigger: "#sideHeader3",
    duration: 1.25,
    x: -300, opacity: 0,
    paused: true,
    delay: 1
});

gsap.from("#scrollHeader1", {
    scrollTrigger: "#scrollHeader1",
    y: 50,
    opacity: 0,
    paused: true,
    delay: 1
})

gsap.from("#scrollHeader2", {
    scrollTrigger: "#scrollHeader2",
    y: 50,
    opacity: 0,
    paused: true,
    delay: 1})

gsap.from("#scrollHeader3", {
    scrollTrigger: "#scrollHeader3",
    y: 50,
    opacity: 0,
    paused: true,
    delay: 1})

gsap.from("#scrollHeader4", {
    scrollTrigger: "#scrollHeader4",
    y: 50,
    opacity: 0,
    paused: true,
    delay: 1})

gsap.from("#scrollHeader5", {
    scrollTrigger: "#scrollHeader5",
    y: 50,
    opacity: 0,
    paused: true,
    delay: 1})

// get scroll to show navbar background only after carousel images are cleared, not working right now
if (ScrollTrigger.isInViewport("#carousel-wrapper", false)) {
    gsap.from("#nav-wrapper", {
    background: transparent
})
}