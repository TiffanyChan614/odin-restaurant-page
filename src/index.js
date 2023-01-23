function createHeader() {
  const contentDiv = document.querySelector("#content");
  let header = document.createElement("header");
  contentDiv.appendChild(header);

  const headerElem = document.querySelector("header");
  let title = document.createElement("h1");
  title.textContent = "The Gourmet's Delight";
  headerElem.appendChild(title);
}

function createNav() {
  const contentDiv = document.querySelector("#content");
  let nav = document.createElement("nav");
  contentDiv.appendChild(nav);

  const navElem = document.querySelector("nav");
  createList(navElem);
}

function createList(navElem) {
  let list = document.createElement("ul");
  navElem.appendChild(list);
  const listElem = document.querySelector("ul");
  createListItems(listElem);
}

function createListItems(listElem) {
  let navsArr = [
    { name: "home", text: "Home" },
    { name: "menu", text: "Menu" },
    { name: "contact", text: "Contact Us" },
  ];
  for (let i = 0; i < navsArr.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("id", `${navsArr[i].name}-link`);
    listElem.appendChild(li);
    const liElem = document.querySelector(`#${navsArr[i].name}-link`);
    let a = document.createElement("a");
    a.href = `#${navsArr[i].name}`;
    a.textContent = `${navsArr[i].text}`;
    liElem.appendChild(a);
  }
}

function createMain() {
  const contentDiv = document.querySelector("#content");
  let main = document.createElement("main");
  contentDiv.appendChild(main);

  const mainElem = document.querySelector("main");
  createHome(mainElem);
  createMenu(mainElem);
  createContact(mainElem);
}

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

function createMenu(mainElem) {
  let menu = document.createElement("section");
  menu.setAttribute("id", "menu");
  mainElem.appendChild(menu);

  const menuElem = document.querySelector("#menu");
  createMenuHeader(menuElem);
  createMenuContent(menuElem);
}

function createMenuHeader(menuElem) {
  let menuHeader = document.createElement("h2");
  menuHeader.textContent = "Dinner Menu";
  menuElem.appendChild(menuHeader);
}

function createMenuContent(menuElem) {
  let menuList = document.createElement("ul");
  menuElem.appendChild(menuList);

  const menuListElem = document.querySelector("#menu ul");
  let titleArr = ["Appetizers", "Salads", "Entrees", "Desserts"];
  let contentArr = [
    [
      { dish: "Fried Calamari", price: 8 },
      { dish: "Bruschetta", price: 7 },
      { dish: "Crab Cakes", price: 12 },
    ],
    [
      { dish: "Caprese Salad", price: 8 },
      { dish: "Greek Salad", price: 9 },
      { dish: "Spinach Salad", price: 10 },
    ],
    [
      { dish: "Filet Mignon", price: 25 },
      { dish: "Lobster Tail", price: 35 },
      { dish: "Pesto Chicken", price: 20 },
      { dish: "Eggplant Parmesan", prie: 18 },
    ],
    [
      { dish: "Chocolate Mousse", price: 7 },
      { dish: "Crème Brulee", price: 8 },
      { dish: "Tiramisu", price: 6 },
    ],
  ];

  for (let i = 0; i < titleArr.length; i++) {
    createMenuList(menuListElem, i, titleArr[i], contentArr[i]);
  }
}

function createMenuList(menuListElem, index, title, content) {
  let li = document.createElement("li");
  menuListElem.appendChild(li);
  const liElem = document.querySelector(`#menu>ul>li:nth-child(${index + 1})`);

  let liHeader = document.createElement("h3");
  liHeader.textContent = title;
  liElem.appendChild(liHeader);

  let innerList = document.createElement("ul");
  liElem.appendChild(innerList);

  const innerListElem = document.querySelector(
    `#menu>ul>li:nth-child(${index + 1})>ul`
  );
  for (let i = 0; i < content.length; i++) {
    let innerLi = document.createElement("li");
    innerLi.textContent = `${content[i].dish} - $${content[i].price}`;
    innerListElem.appendChild(innerLi);
  }
}

function createContact(mainElem) {
  let contact = document.createElement("section");
  contact.setAttribute("id", "contact");
  mainElem.appendChild(contact);

  const contactElem = document.querySelector("#contact");
  let contactHeader = document.querySelector("h2");
  contactHeader.textContent = "Contact Us";
  contactElem.appendChild(contactHeader);

  let contactP = document.querySelector("p");
  contactP.textContent =
    "Contact us for any questions or to make a reservation.";
  contactElem.appendChild(contactP);

  createContactInfo(contactElem);
}

function createContactInfo(contactElem) {
  let info = document.createElement("ul");
  info.setAttribute("id", "contact-info");
  contactElem.appendChild(info);

  const infoElem = document.querySelector("#contact-info");
  let infoContent = [
    "Phone: 555-555-5555",
    "Email: gourmetsdelight@email.com",
    "Address: 123 Main St, Anytown Canada",
  ];
  for (let i = 0; i < infoContent.length; i++) {
    let li = document.createElement("li");
    li.textContent = infoContent[i];
    infoElem.appendChild(li);
  }
}

function CreateFooter() {
  const contentDiv = document.querySelector("#content");
  let footer = document.createElement("footer");
  contentDiv.appendChild(footer);

  const footerElem = document.querySelector("footer");
  let p = document.createElement("p");
  p.textContent = `Copyright \u00A9 2023 Tiffany Chan`;
  footerElem.appendChild(p);
}

createHeader();
createNav();
createMain();
CreateFooter();
