const togbut = document.getElementById("tog-but");
const closebut = document.getElementById("close-but");
const navMenu = document.getElementById("nav-menu");

if (togbut) {
  togbut.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}
if (closebut) {
  closebut.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}
const ul_link = document.querySelectorAll(".nav_list");
ul_link.forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  }),
);
