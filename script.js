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

function reponse() {
  let recherche = document.getElementById("search").value;
  console.log(recherche);

  if (recherche === "armes 5 étoiles" || recherche === "Armes 5 étoiles") {
    window.open("armes5.html");
  } else if (
    recherche === "armes 4 étoiles" ||
    recherche === "Armes 4 étoiles"
  ) {
    window.open("armes4.html");
  } else if (
    recherche === "artefact super rare" ||
    recherche === "Artefact super rare"
  ) {
    window.open("artefacts5.html");
  } else if (recherche === "artefact rare" || recherche === "Artefact rare") {
    window.open("artefacts4.html");
  } else if (recherche === "Personnage Geo" || recherche === "Personnage geo") {
    window.open("persoGeo.html");
  } else if (
    recherche === "Personnage Anemo" ||
    recherche === "Personnage anemo"
  ) {
    window.open("persoAnemo.html");
  } else if (
    recherche === "Personnage Cryo" ||
    recherche === "Personnage cryo"
  ) {
    window.open("persoCryo.html");
  } else if (
    recherche === "Personnage Pyro" ||
    recherche === "Personnage pyro"
  ) {
    window.open("persoPyro.html");
  } else if (
    recherche === "Personnage Hydro" ||
    recherche === "Personnage hydro"
  ) {
    window.open("persoHydro.html");
  } else if (
    recherche === "Personnage Electro" ||
    recherche === "Personnage electro"
  ) {
    window.open("persoElectro.html");
  }
}

function _menuChanger() {
  menuChanger.style.display = "block";
  menuChanger.style.backgroundColor = "#0000FF";
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
