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
/* menu sub-list */
headerItems.forEach(item => {
  const headerSubList = item.querySelector(".header__sub-list");
  const arrDown = item.querySelector(".arr-down");
  item.addEventListener('click', () => {
    headerSubList.style.display = headerSubList.style.display === 'block' ? 'none' : 'block';
    arrDown.style.display ="inline";
  });
  document.addEventListener("click", function (e) {
    if (!item.contains(e.target)) {
      headerSubList.style.display = "none";
      arrDown.style.display = "none";
    }
  });
});

