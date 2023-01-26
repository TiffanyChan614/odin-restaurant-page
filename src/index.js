import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import "./style.css";

function createHeader() {
  const topDiv = document.querySelector("#top");
  let header = document.createElement("header");
  topDiv.appendChild(header);

  const headerElem = document.querySelector("header");
  let title = document.createElement("h1");
  title.textContent = "The Gourmet's Delight";
  headerElem.appendChild(title);
}

function createNav() {
  const topDiv = document.querySelector("#top");
  let nav = document.createElement("nav");
  topDiv.appendChild(nav);

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

  const homeNav = document.querySelector("#home-nav");
  homeNav.classList.add("selected");
}

function createMain() {
  const contentDiv = document.querySelector("#content");
  let main = document.createElement("main");
  contentDiv.appendChild(main);

  const mainElem = document.querySelector("main");
  createHome(mainElem);
}

function CreateFooter() {
  const bottomDiv = document.querySelector("#bottom");
  let footer = document.createElement("footer");
  bottomDiv.appendChild(footer);

  const footerElem = document.querySelector("footer");
  let p = document.createElement("p");
  p.textContent = `Copyright \u00A9 2023 Tiffany Chan`;
  footerElem.appendChild(p);
}

function tabSwitch() {
  const main = document.querySelector("main");
  const home = document.querySelector("#home-nav");
  const menu = document.querySelector("#menu-nav");
  const contact = document.querySelector("#contact-nav");

  let funcArr = [createHome, createMenu, createContact];
  let tabArr = [home, menu, contact];

  for (let i = 0; i < funcArr.length; i++) {
    tabArr[i].addEventListener("click", () => {
      main.textContent = "";
      funcArr[i](main);
      for (let tab of tabArr) {
        if (tab === tabArr[i]) {
          tab.classList.toggle("selected", true);
        } else {
          tab.classList.toggle("selected", false);
        }
      }
    });
  }
}

createHeader();
createNav();
createMain();
CreateFooter();
tabSwitch();
