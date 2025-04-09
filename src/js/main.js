const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function toggleMenu() {
  document.querySelectorAll(".l-menu").forEach((menu) => {
    menu.classList.toggle("active");
  });
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

var onMouseMove = function () {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
};
document.addEventListener("mousemove", onMouseMove);

var cursor = document.querySelector(".cursor");
