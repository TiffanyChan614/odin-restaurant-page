function createHome(mainElem) {
  let home = document.createElement("section");
  home.setAttribute("id", "home");
  mainElem.appendChild(home);

  const homeElem = document.querySelector("#home");
  createHomeContent(homeElem);
}

function createHomeContent(homeElem) {
  let homeHeader = document.createElement("h2");
  homeHeader.textContent = "About Us";

  let p1 = document.createElement("p");
  p1.textContent =
    'Welcome to "The Gourmet\'s Delight,"' +
    "a cozy and intimate French bistro located" +
    "in the heart of downtown. Our menu is inspired" +
    "by classic French cuisine, featuring dishes made" +
    "with only the freshest and highest-quality ingredients.";

  let img = document.createElement("img");
  img.setAttribute("src", "../src/chef.png");
  img.setAttribute("width", "200px");

  let p2 = document.createElement("p");
  p2.textContent = "Come on down for some delicious cuisine!";

  homeElem.appendChild(homeHeader);
  homeElem.appendChild(p1);
  homeElem.appendChild(p2);
  homeElem.appendChild(img);
}

export { createHome };
