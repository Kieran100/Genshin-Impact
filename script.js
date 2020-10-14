let menuChanger = document.getElementById("menu");
menuChanger.addEventListener("mouseover", _menuChanger);
menuChanger.addEventListener("mouseleave", _menuRetour);

let weaponsMenu = document.getElementById("weapons");
weaponsMenu.addEventListener("mouseover", openMenuWeapons);
weaponsMenu.addEventListener("mouseleave", closeMenuWeapons);

let persoMenu = document.getElementById("persos");
persoMenu.addEventListener("mouseover", openMenuPersos);
persoMenu.addEventListener("mouseleave", closeMenuPersos);

let artefMenu = document.getElementById("artef");
artefMenu.addEventListener("mouseover", openMenuArtefs);
artefMenu.addEventListener("mouseleave", closeMenuArtefs);

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

function closeMenuWeapons() {
  let subMenus = document.getElementsByClassName("sous");
  console.log(subMenus);
  for (let index = 0; index < subMenus.length; index++) {
    const menu = subMenus[index];
    console.log(menu);
    menu.style.display = "none";
  }
}

function openMenuWeapons() {
  let subMenus = document.getElementsByClassName("sous");
  console.log(subMenus);
  for (let index = 0; index < subMenus.length; index++) {
    const menu = subMenus[index];
    console.log(menu);
    menu.style.display = "block";
  }
}

function closeMenuPersos() {
  let subMenus = document.getElementsByClassName("sousp");
  console.log(subMenus);
  for (let index = 0; index < subMenus.length; index++) {
    const menu = subMenus[index];
    console.log(menu);
    menu.style.display = "none";
  }
}

function openMenuPersos() {
  let subMenus = document.getElementsByClassName("sousp");
  console.log(subMenus);
  for (let index = 0; index < subMenus.length; index++) {
    const menu = subMenus[index];
    console.log(menu);
    menu.style.display = "block";
  }
}

function closeMenuArtefs() {
  let subMenus = document.getElementsByClassName("sousA");
  console.log(subMenus);
  for (let index = 0; index < subMenus.length; index++) {
    const menu = subMenus[index];
    console.log(menu);
    menu.style.display = "none";
  }
}

function openMenuArtefs() {
  let subMenus = document.getElementsByClassName("sousA");
  console.log(subMenus);
  for (let index = 0; index < subMenus.length; index++) {
    const menu = subMenus[index];
    console.log(menu);
    menu.style.display = "block";
  }
}
