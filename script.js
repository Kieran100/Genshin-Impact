let menuChanger = document.getElementById("menu");
menuChanger.addEventListener("mouseover", _menuChanger);
menuChanger.addEventListener("mouseleave", _menuRetour);

function _menuChanger() {
  menuChanger.style.display = "block";
  menuChanger.style.fontFamily.fontcolor = "#fff";
  menuChanger.style.backgroundColor = "  #000";
}
function _menuRetour() {
  menuChanger.style.backgroundColor = "rgba(255, 255, 255, .4)";
}

function openMenu() {
  let open = document.getElementById("links");
  if (open.style.display === "block") {
    open.style.display = "none";
  } else {
    open.style.display = "block";
  }
}
