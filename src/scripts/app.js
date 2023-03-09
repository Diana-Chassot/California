const barOpn = document.querySelector(".bar--opn");
const btnBars = document.querySelector(".bars");
const navList =document.querySelector(".nav__list")
const menuList =document.querySelector(".header__list")
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
window.addEventListener('resize', function() {
    if (barOpn.classList.contains("fa-plus")) {
        navList.style.display = "none";
    }
  });
