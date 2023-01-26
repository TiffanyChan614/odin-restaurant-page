import Chef from "./chef.png";

function createHome(mainElem) {
  let home = document.createElement("section");
  home.id = "home";
  mainElem.appendChild(home);

  const homeElem = document.querySelector("#home");
  createHomeContent(homeElem);
}

function createHomeContent(homeElem) {
  let homeHeader = document.createElement("h2");
  homeHeader.textContent = "About Us";

  let span = document.createElement("span");
  span.textContent = "The Gourmet's Delight";
  span.id = "name";

  let p1 = document.createElement("p");
  p1.textContent = "Welcome to ";
  p1.appendChild(span);
  p1.append(
    ", a cozy and intimate French bistro located " +
      "in the heart of downtown. Our menu is inspired " +
      "by classic French cuisine, featuring dishes made " +
      "with only the freshest and highest-quality ingredients."
  );

  const chef = new Image();
  chef.src = Chef;
  chef.alt = "Adam Smith: Our head chef";

  let p2 = document.createElement("p");
  p2.textContent = "Come on down for some delicious cuisine!";
  p2.id = "come-msg";

  homeElem.appendChild(homeHeader);
  homeElem.appendChild(p1);
  homeElem.appendChild(chef);
  homeElem.appendChild(p2);
}

export { createHome };
