// nav
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class"
    // isOpen ? "ri-close-line" : "ri-menu-4-line"
  );
});

// click anywhere for remove nav
const menu = document.querySelector("#menu-btn");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("open");
  }
});
