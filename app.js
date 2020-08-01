// window.onload = function () {
//   morphing.play();
// };

// var morphing = anime({
//   targets: ".morph1",
//   d: [
//     {
//       value:
//         "M404.337 150.612C336.27 184.378 263.49 154.927 190.861 157.151C119.305 159.342 44.4854 192.228 -19.4588 163.589C-87.1334 133.279 -135.81 69.1276 -165.708 -2.54682C-196.024 -75.2206 -212.431 -160.521 -188.111 -240.712C-164.755 -317.726 -88.6206 -360.049 -38.3418 -422.522C12.7433 -485.996 37.4289 -582.89 109.798 -610.872C182.19 -638.862 252.254 -587.793 320.765 -561.371C383.377 -537.223 453.858 -520.861 491.976 -463.48C529.2 -407.446 509.604 -327.582 522.015 -258.42C536.036 -180.283 592.417 -109.954 569.629 -30.7446C546.39 50.0295 476.557 114.786 404.337 150.612Z",
//     },
//     {
//       value:
//         "M412 124C343.933 157.766 266.629 143.276 194 145.5C122.444 147.691 42.9442 182.139 -21 153.5C-88.6746 123.19 -135.809 69.1277 -165.708 -2.54671C-196.024 -75.2205 -212.43 -160.521 -188.111 -240.711C-164.754 -317.726 -88.6202 -360.049 -38.3414 -422.521C12.7437 -485.996 37.4293 -582.89 109.799 -610.872C182.19 -638.862 252.254 -587.793 320.765 -561.37C383.377 -537.223 453.858 -520.861 491.977 -463.48C529.2 -407.446 509.604 -327.581 522.015 -258.42C536.036 -180.283 592.417 -109.954 569.629 -30.7445C546.39 50.0296 484.22 88.1736 412 124Z",
//     },
//     {
//       value:
//         "M404.337 150.612C336.27 184.378 263.49 154.927 190.861 157.151C119.305 159.342 44.4854 192.228 -19.4588 163.589C-87.1334 133.279 -135.81 69.1276 -165.708 -2.54682C-196.024 -75.2206 -212.431 -160.521 -188.111 -240.712C-164.755 -317.726 -88.6206 -360.049 -38.3418 -422.522C12.7433 -485.996 37.4289 -582.89 109.798 -610.872C182.19 -638.862 252.254 -587.793 320.765 -561.371C383.377 -537.223 453.858 -520.861 491.976 -463.48C529.2 -407.446 509.604 -327.582 522.015 -258.42C536.036 -180.283 592.417 -109.954 569.629 -30.7446C546.39 50.0295 476.557 114.786 404.337 150.612Z",
//     },
//   ],
//   duration: 5000,
//   direction: "alternate",
//   autoplay: true,
//   easing: "linear",
//   elasticity: 100,
//   loop: true,
//   //   easing: "easeInOutElastic",
//   //   duration: 5000,
//   //   loop: true,
//   //   autoplay: true;
// });

const hamburger = document.querySelector(".hamburger svg");
const mobileNavSlider = document.querySelector(".mobile_navbar");
const mobileNavLinks = document.querySelector(".mobile_nav_links");
const links = document.querySelectorAll(".mobile_nav_links a");
const rectOne = document.querySelector(".rect_1");
const rectTwo = document.querySelector(".rect_2");
const rectThree = document.querySelector(".rect_3");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  if (mobileNavSlider.classList.contains("active_mobile_navbar")) {
    mobileNavLinks.classList.remove("nav_links_active");
    body.style = "";
    setTimeout(() => {
      mobileNavSlider.classList.remove("active_mobile_navbar");
    }, 300);

    setTimeout(() => {
      mobileNavSlider.classList.remove("active_mobile_navbar_zindex");
    }, 1000);
  } else {
    mobileNavSlider.classList.add("active_mobile_navbar");
    mobileNavSlider.classList.add("active_mobile_navbar_zindex");
    mobileNavLinks.classList.add("nav_links_active");
    body.style.overflow = "hidden";
  }

  rectOne.classList.toggle("rect_1_active");
  rectTwo.classList.toggle("rect_2_active");
  rectThree.classList.toggle("rect_3_active");
});

let ExamCardWrapper = document.querySelectorAll(".exam_card_wrapper");

ExamCardWrapper.forEach((card) => {
  card.addEventListener("touchstart", () => {
    card.classList.add("touched_exam_card");
  });
});

ExamCardWrapper.forEach((card) => {
  card.addEventListener("touchstart", () => {
    card.classList.remove("touched_exam_card");
  });
});
