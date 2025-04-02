const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function toggleMenu() {
  document.querySelectorAll(".l-menu").forEach((menu) => {
    menu.classList.toggle("active");
  });
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
