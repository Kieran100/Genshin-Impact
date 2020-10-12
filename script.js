let menuChanger = document.getElementById("menu");
menuChanger.addEventListener("mouseover", _menuChanger);
menuChanger.addEventListener("mouseleave", _menuRetour);

function _menuChanger() {
  menuChanger.style.display = "block";
  menuChanger.style.backgroundColor = " #1E90FF";
}
function _menuRetour() {
  menuChanger.style.backgroundColor = "#F5DEB3";
}
