import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";

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
  createNavDivs(navElem);
}

function createNavDivs(navElem) {
  let navsArr = [
    { name: "home", text: "Home" },
    { name: "menu", text: "Menu" },
    { name: "contact", text: "Contact Us" },
  ];

  for (let i = 0; i < navsArr.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", `${navsArr[i].name}-nav`);
    div.textContent = navsArr[i].text;
    navElem.appendChild(div);
  }
}

function createNavList(navElem) {
  let list = document.createElement("ul");
  navElem.appendChild(list);
  const listElem = document.querySelector("ul");
  createNavListItems(listElem);
}

function createNavListItems(listElem) {
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

function CreateFooter() {
  const contentDiv = document.querySelector("#content");
  let footer = document.createElement("footer");
  contentDiv.appendChild(footer);

  const footerElem = document.querySelector("footer");
  let p = document.createElement("p");
  p.textContent = `Copyright \u00A9 2023 Tiffany Chan`;
  footerElem.appendChild(p);
}

function tabSwitch() {
  const main = document.querySelector("#main");
  const home = document.querySelector("#home-nav");
  const menu = document.querySelector("#menu-nav");
  const contact = document.querySelector("#contact-nav");

  let funcArr = [createHome, createMenu, createContact];
  let tabArr = [home, menu, contact];

  for (let i = 0; i < funcArr.length; i++) {
    tabArr[i].addEventListener("click", () => {
      main.textContent = "";
      funcArr[i];
    });
  }
}

createHeader();
createNav();
createMain();
CreateFooter();
tabSwitch();
