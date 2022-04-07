// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const navSelect = document.getElementById("nav-link");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
navSelect.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

//setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
