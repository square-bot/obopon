const burger = document.querySelector(".burger");
const menu = document.querySelector(".links-wrapper");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  //   body.classList.toggle("active");
});
