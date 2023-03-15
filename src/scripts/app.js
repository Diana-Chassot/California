const barOpn = document.querySelector(".bar--opn");
const btnBars = document.querySelector(".bars");
const navList = document.querySelector(".nav__list");
const menuList = document.querySelector(".header__list");
const headerItems = document.querySelectorAll(".header__item");

btnBars.addEventListener("click", toggleIcon);

function toggleIcon() {

  if (barOpn.classList.contains("fa-bars")) {
    barOpn.classList.remove("fa-bars");
    barOpn.classList.add("fa-plus");
    navList.style.display = "flex";
  } else {
    barOpn.classList.remove("fa-plus");
    barOpn.classList.add("fa-bars");
    navList.style.display = "none";
  }

}
window.addEventListener('resize', function () {
  if (barOpn.classList.contains("fa-plus")) {
    navList.style.display = "none";
  }
});
/* Slider */
const btnLeft = document.querySelector(".arr-left");
const btnRight = document.querySelector(".arr-right");
const slides = document.querySelectorAll(".header__info");
const lines = document.querySelectorAll(".header__line");

let activeSlideIndex = 0;
let autoPlayInterval = null;

function updateSlider() {

  slides.forEach((slide) => {
    slide.classList.remove("header__info--active");
  });

  slides[activeSlideIndex].classList.add("header__info--active");

  lines.forEach((line, index) => {
    if (index === activeSlideIndex) {
      line.classList.add("header__line--active");
    } else {
      line.classList.remove("header__line--active");
    }
  });
  slides.forEach((slide, index) => {
    if (index === activeSlideIndex) {
      slide.classList.add("header__info--visible");
    } else {
      slide.classList.remove("header__info--visible");
    }
  });
}
btnLeft.addEventListener("click", () => {

  activeSlideIndex--;

  if (activeSlideIndex < 0) {
    activeSlideIndex = slides.length - 1;
  }

  updateSlider();
});

btnRight.addEventListener("click", () => {

  activeSlideIndex++;
  if (activeSlideIndex === slides.length) {
    activeSlideIndex = 0;
  }
  updateSlider();
});

lines.forEach((line, index) => {
  line.addEventListener("click", () => {
    activeSlideIndex = index;

    updateSlider();
  });
});
// autoplay
function autoPlay() {
  activeSlideIndex++;
  if (activeSlideIndex === slides.length) {
    activeSlideIndex = 0;
  }
  updateSlider();
}

 autoPlayInterval = setInterval(autoPlay, 5000); 
/* scale img */
  const headerImages = document.querySelectorAll(".header__img");
  const exploreButtons = document.querySelectorAll(".btn--explore");

  exploreButtons.forEach(function(button) {
    button.addEventListener("mouseover", function() {
      headerImages.forEach(function(image) {
        image.style.transform = "scale(1.1)";
      });
    });

    button.addEventListener("mouseout", function() {
      headerImages.forEach(function(image) {
        image.style.transform = "scale(1)";
      });
    });
  });
