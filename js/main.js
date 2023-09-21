"use strict";

// Get all statistic elements
const statistics = document.querySelectorAll('.statistic');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Check if the element is in the viewport
    if (entry.isIntersecting) {
      // Get the target statistic element
      const statistic = entry.target;

      // Get the target count element within the statistic
      const countElement = statistic.querySelector('.count');

      // Get the target count value
      const countValue = parseFloat(countElement.textContent);

      // Start counting up to the target value
      let counter = 0;
      const countUp = setInterval(() => {
        if (counter >= countValue) {
          clearInterval(countUp);
        } else {
          counter += 0.1;
          countElement.textContent = counter.toFixed(1);
        }
      }, (400 / countValue));

      // Unobserve the target statistic element
      observer.unobserve(statistic);
    }
  });
});

// Observe each statistic element
statistics.forEach(statistic => {
  observer.observe(statistic);
});

// const carouselItems = document.querySelectorAll('.carousel-item');
// // const prevButton = document.querySelector('.prev-button');
// // const nextButton = document.querySelector('.next-button');

// let currentItem = 0;

// function showItem(index) {
//   if (index < 0) {
//     index = carouselItems.length - 1;
//   } else if (index >= carouselItems.length) {
//     index = 0;
//   }

//   const itemToHide = currentItem;
//   const itemToShow = index;

//   carouselItems[itemToHide].style.transform = `translateX(-100%)`;
//   carouselItems[itemToShow].style.transform = `translateX(0%)`;

//   currentItem = index;
// }

// prevButton.addEventListener('click', () => {
//   showItem(currentItem - 1);
// });

// nextButton.addEventListener('click', () => {
//   showItem(currentItem + 1);
// });

// -------------------------

// gsap.registerPlugin(Draggable, InertiaPlugin);

// var slideDelay = 1.5;
// var slideDuration = 0.3;
// var snapX;

// var slides = document.querySelectorAll(".slide");
// var autoPlayLimit = slides.length * 2;
// var autoPlayCount = 0;
// var prevButton = document.querySelector("#prevButton");
// var nextButton = document.querySelector("#nextButton");
// var progressWrap = gsap.utils.wrap(0, 1);

// var numSlides = slides.length;

// gsap.set(slides, {
//   backgroundColor:
//     "random([red, blue, green, purple, orange, yellow, lime, pink])",
//   xPercent: (i) => i * 100,
// });

// var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
// var timer = gsap.delayedCall(slideDelay, autoPlay);

// var animation = gsap.to(slides, {
//   xPercent: "+=" + numSlides * 100,
//   duration: 1,
//   ease: "none",
//   paused: true,
//   repeat: -1,
//   modifiers: {
//     xPercent: wrap,
//   },
// });

// var proxy = document.createElement("div");
// var slideAnimation = gsap.to({}, {});
// var slideWidth = 0;
// var wrapWidth = 0;
// resize();

// var draggable = new Draggable(proxy, {
//   trigger: ".slides-container",
//   inertia: true,
//   onPress: updateDraggable,
//   onDrag: updateProgress,
//   onThrowUpdate: updateProgress,
//   snap: {
//     x: snapX,
//   },
// });

// window.addEventListener("resize", resize);

// prevButton.addEventListener("click", function () {
//   animateSlides(1);
// });

// nextButton.addEventListener("click", function () {
//   animateSlides(-1);
// });

// function updateDraggable() {
//   timer.restart(true);
//   slideAnimation.kill();
//   this.update();
// }

// function animateSlides(direction) {
//   timer.restart(true);
//   slideAnimation.kill();

//   var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);

//   slideAnimation = gsap.to(proxy, {
//     x: x,
//     duration: slideDuration,
//     onUpdate: updateProgress,
//   });
// }

// function autoPlay() {
//   if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
//     timer.restart(true);
//   } else {
//     autoPlayCount++;
//     if (autoPlayCount < autoPlayLimit) {
//       animateSlides(-1);
//     }
//   }
// }

// function updateProgress() {
//   animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
// }

// function resize() {
//   var norm = gsap.getProperty(proxy, "x") / wrapWidth || 0;

//   slideWidth = slides[0].offsetWidth;
//   wrapWidth = slideWidth * numSlides;
//   snapX = gsap.utils.snap(slideWidth);

//   gsap.set(proxy, {
//     x: norm * wrapWidth,
//   });

//   animateSlides(0);
//   slideAnimation.progress(1);
// }

// -------------------------

// let xPos = 0;

// gsap
//   .timeline()
//   .set(".ring", { rotationY: 180, cursor: "grab" }) //set initial rotationY so the parallax jump happens off screen
//   .set(".img", {
//     // apply transform rotations to each image
//     // rotateY: (i) => i * -36,
//     rotateY: (i) => i * -51.5,
//     // transformOrigin: "50% 50% 800px",
//     transformOrigin: "50% 50% 650px",
//     // z: -500,
//     z: -650,
//     backgroundImage: (i) =>
//       // console.log(i),
//       // "url(https://picsum.photos/id/" + (i + 32) + "/600/400/)",
//       "url(/assets/images/3D-slider/" + (i + 1) + ".jpg)",
//     backgroundPosition: (i) => getBgPos(i),
//     backfaceVisibility: "hidden",
//   })
//   .from(".img", {
//     duration: 1.5,
//     // y: 200,
//     y: 140,
//     // opacity: 0,
//     opacity: 0,
//     stagger: 0.1,
//     ease: "expo",
//   })
//   // .add(() => {
//   //   $(".img").on("mouseenter", (e) => {
//   //     let current = e.currentTarget;
//   //     gsap.to(".img", {
//   //       // opacity: (i, t) => (t == current ? 1 : 0.5),,
//   //       opacity: 1,
//   //       ease: "power3",
//   //     });
//   //   });
//   //   $(".img").on("mouseleave", (e) => {
//   //     gsap.to(".img", { opacity: 1, ease: "power2.inOut" });
//   //   });
//   // }, "-=0.5");

// $(window).on("mousedown touchstart", dragStart);
// $(window).on("mouseup touchend", dragEnd);

// function dragStart(e) {
//   if (e.touches) e.clientX = e.touches[0].clientX;
//   xPos = Math.round(e.clientX);
//   gsap.set(".ring", { cursor: "grabbing" });
//   $(window).on("mousemove touchmove", drag);
// }

// function drag(e) {
//   if (e.touches) e.clientX = e.touches[0].clientX;

//   gsap.to(".ring", {
//     rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
//     onUpdate: () => {
//       gsap.set(".img", { backgroundPosition: (i) => getBgPos(i) });
//     },
//   });

//   xPos = Math.round(e.clientX);
// }

// function dragEnd(e) {
//   $(window).off("mousemove touchmove", drag);
//   gsap.set(".ring", { cursor: "grab" });
// }

// function getBgPos(i) {
//   //returns the background-position string to create parallax movement in each image
//   return (
//     // 100 -
//     70 -
//     (gsap.utils.wrap(
//       0,
//       360,
//       gsap.getProperty(".ring", "rotationY") - 180 - i * 36
//       // gsap.getProperty(".ring", "rotationY") - 180 - i * 51.5
//     ) /
//       360) *
//       // 500 +
//       650 +
//     "px 0px"
//   );
// }

//parallax slider









if (window.innerWidth > 1024) {
  console.log("tfkld;s")
  const htmlElement = document.querySelector('html');
  const lang = htmlElement.getAttribute('lang');

  gsap.registerPlugin(ScrollTrigger)

  var sections = gsap.utils.toArray(".parallax-div");
  var action = gsap.timeline({
    scrollTrigger: {
      trigger: ".parallax-sec",
      pin: true,
      scrub: 0.2,
      // vertical scrolling based on width of #wrap.
      end: () => "+=" + document.querySelector(".parallax-sec").offsetWidth
    }
  })

  if (lang === "en") {
    action.to(sections, { xPercent: -100 * (sections.length), duration: 1, ease: "none" })

  } else {

    action.to(sections, { xPercent: 100 * (sections.length), duration: 1, ease: "none" })

  }
}
// const parallaxDiv = $(".parallax-sec > div")

// let formats = document.querySelectorAll(".parallax-div");

// gsap.to(formats, {
//   xPercent: -100 * (formats.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".parallax-sec",
//     pin: true,
//     scrub: 1,
//     end: () => "+=" + document.querySelector(".parallax-sec").offsetWidth
//   }
// });

