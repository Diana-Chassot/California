const barOpn = document.querySelector(".bar--icon");
const btnBars = document.querySelector(".btn-bars");
const navList = document.querySelector(".nav__list");

btnBars.addEventListener("click", togleClassActive);

function togleClassActive() {
  btnBars.classList.toggle("open");
  if (btnBars.classList.contains("open")) {
    navList.style.display = "flex";
    barOpn.classList.add("fa-plus");
  }
  else {
    navList.style.display = "none";
    barOpn.classList.remove("fa-plus");
  }
}
window.addEventListener('resize', function () {
  if (btnBars.classList.contains('open')) {
    navList.style.display = 'none';
    navList.classList.remove('open');
  }
});
document.addEventListener("click", function (e) {
  if (!navList.contains(e.target) && !btnBars.contains(e.target)) {
    barOpn.classList.remove("open");
    barOpn.classList.remove("fa-plus");
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

exploreButtons.forEach(function (button) {
  button.addEventListener("mouseover", function () {
    headerImages.forEach(function (image) {
      image.style.transform = "scale(1.2)";
    });
  });

  button.addEventListener("mouseout", function () {
    headerImages.forEach(function (image) {
      image.style.transform = "scale(1)";
    });
  });
});

/* const images = document.querySelectorAll('.latest-offers__item img');


window.addEventListener('scroll', () => {

  const scrollPosition = window.pageYOffset;

  images.forEach(image => {

    const translation = (scrollPosition - image.parentElement.offsetTop) * 0.5;

    image.style.transform = `translateY(${translation}px)`;
  });
}); */
