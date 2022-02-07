<<<<<<< HEAD
const dropdownBtn = document.querySelector(".dropdown-btn");
let dropdownDescription = document.querySelector(".dropdown-description");

if (dropdownBtn) {
  dropdownBtn.addEventListener("click", () => {
    dropdownBtn.classList.toggle("is-active");
    dropdownDescription.classList.toggle("is-active");
=======
const dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownDescription = document.querySelector('.dropdown-description');

if (dropdownBtn) {
  dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('is-active');
    dropdownDescription.classList.toggle('is-active');
>>>>>>> 3de60675c5649e87243fada13f69e7af9451c500
  });
}
