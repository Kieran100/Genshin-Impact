let menuChanger = document.getElementById("menu");
let menuRetour = document.getElementById("menu");
menuChanger.addEventListener("mouseover", _menuChanger);
menuRetour.addEventListener("mouseleave", _menuRetour);

function _menuChanger() {
  let menu = document.getElementById("menu");
  menu.style.display = "block";
  menu.style.backgroundColor = " #1E90FF";
}
function _menuRetour() {
  let menu = document.getElementById("menu");
  menu.style.backgroundColor = "#F5DEB3";
}
