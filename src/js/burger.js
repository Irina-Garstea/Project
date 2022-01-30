const mainMenu = document.querySelector(".header-nav");
const openMenu = document.querySelector(".burger");
const closeMenu = document.querySelector(".x");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
  button.style.button = "flex";
}

function close() {
  mainMenu.style.display = "none";
}
