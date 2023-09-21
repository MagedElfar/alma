$(window).on("load", function () {
  console.log('loaded');
  var options = {
    arrows: true,
    autoHeight: false,
    autoWidth: true,
    autoplay: true,
    drag: true,
    pagination: true,
    focus: 'center',
    type: "loop",
    trimSpace: true,
    // perPage: 3
    perPage: window.outerWidth > 575 ? 3 : 1
  };

  // var splide = new Splide(".splide", options).mount();
  // console.log(splide);
  var splide = new Splide(".splide", options).mount();

  $(window).on('resize', function () {
    if (window.outerWidth > 575) {
      options.perPage = 3
    } else {
      options.perPage = 1
    }

    splide = new Splide(".splide", options).mount();
  });
});



// 3D slider

let xPos = 0;

gsap
  .timeline()
  .set(".ring", { rotationY: 180, cursor: "grab" }) //set initial rotationY so the parallax jump happens off screen
  .set(".img", {
    // apply transform rotations to each image
    // rotateY: (i) => i * -36,
    rotateY: (i) => i * -51.5,
    // transformOrigin: "50% 50% 800px",
    transformOrigin: "50% 50% 650px",
    // z: -500,
    z: -650,
    backgroundImage: (i) =>
      // console.log(i),
      // "url(https://picsum.photos/id/" + (i + 32) + "/600/400/)",
      "url(/assets/images/3D-slider/" + (i + 1) + ".jpg)",
    backgroundPosition: (i) => getBgPos(i),
    backfaceVisibility: "hidden",
  })
  .from(".img", {
    duration: 1.5,
    // y: 200,
    y: 140,
    // opacity: 0,
    opacity: 0,
    stagger: 0.1,
    ease: "expo",
  })
  // .add(() => {
  //   $(".img").on("mouseenter", (e) => {
  //     let current = e.currentTarget;
  //     gsap.to(".img", {
  //       // opacity: (i, t) => (t == current ? 1 : 0.5),,
  //       opacity: 1,
  //       ease: "power3",
  //     });
  //   });
  //   $(".img").on("mouseleave", (e) => {
  //     gsap.to(".img", { opacity: 1, ease: "power2.inOut" });
  //   });
  // }, "-=0.5");

$(window).on("mousedown touchstart", dragStart);
$(window).on("mouseup touchend", dragEnd);

function dragStart(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set(".ring", { cursor: "grabbing" });
  $(window).on("mousemove touchmove", drag);
}

function drag(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;

  gsap.to(".ring", {
    rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
    onUpdate: () => {
      gsap.set(".img", { backgroundPosition: (i) => getBgPos(i) });
    },
  });

  xPos = Math.round(e.clientX);
}

function dragEnd(e) {
  $(window).off("mousemove touchmove", drag);
  gsap.set(".ring", { cursor: "grab" });
}

function getBgPos(i) {
  //returns the background-position string to create parallax movement in each image
  return (
    // 100 -
    70 -
    (gsap.utils.wrap(
      0,
      360,
      gsap.getProperty(".ring", "rotationY") - 180 - i * 36
      // gsap.getProperty(".ring", "rotationY") - 180 - i * 51.5
    ) /
      360) *
      // 500 +
      650 +
    "px 0px"
  );
}
