Shery.makeMagnet(".magnet", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#back", {
    mouseFollower: true,
    text: "click on me",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 1.49, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    aspect: { value: 1.8822947576656774 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationInt: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    marker: { value: true },
    scrollType: { value: 0 },
    goeVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1.59, range: [0, 10] },
    metaball: { value: 0.21, range: [0, 2] },
    discard_thershold: { value: 0, range: [0, 0.1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.47, range: [0, 2] },
    noise_scale: { value: 12.15, range: [0, 100] },
  },
  gooey: true,
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");

  var index = 0;

  var animating = false;

  document.querySelector("#main").addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });

      index === h1s.length - 1 ? (index = 0) : index++;

      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
