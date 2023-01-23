/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw0QkFBNEI7QUFDbEMsTUFBTSw0QkFBNEI7QUFDbEMsTUFBTSxxQ0FBcUM7QUFDM0M7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0EsNkJBQTZCLGdCQUFnQjtBQUM3QztBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrQ0FBa0M7QUFDMUMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSwrQkFBK0I7QUFDdkM7QUFDQTtBQUNBLFFBQVEsaUNBQWlDO0FBQ3pDLFFBQVEsK0JBQStCO0FBQ3ZDLFFBQVEsa0NBQWtDO0FBQzFDO0FBQ0E7QUFDQSxRQUFRLGlDQUFpQztBQUN6QyxRQUFRLGlDQUFpQztBQUN6QyxRQUFRLGtDQUFrQztBQUMxQyxRQUFRLHFDQUFxQztBQUM3QztBQUNBO0FBQ0EsUUFBUSxvQ0FBb0M7QUFDNUMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSw0QkFBNEI7QUFDcEM7QUFDQTs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsVUFBVTs7QUFFM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsVUFBVTtBQUN2QztBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQSw2QkFBNkIsaUJBQWlCLEtBQUssaUJBQWlCO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGhlYWRlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgR291cm1ldCdzIERlbGlnaHRcIjtcbiAgaGVhZGVyRWxlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBjb25zdCBuYXZFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbiAgY3JlYXRlTGlzdChuYXZFbGVtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdChuYXZFbGVtKSB7XG4gIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBuYXZFbGVtLmFwcGVuZENoaWxkKGxpc3QpO1xuICBjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbiAgY3JlYXRlTGlzdEl0ZW1zKGxpc3RFbGVtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW1zKGxpc3RFbGVtKSB7XG4gIGxldCBuYXZzQXJyID0gW1xuICAgIHsgbmFtZTogXCJob21lXCIsIHRleHQ6IFwiSG9tZVwiIH0sXG4gICAgeyBuYW1lOiBcIm1lbnVcIiwgdGV4dDogXCJNZW51XCIgfSxcbiAgICB7IG5hbWU6IFwiY29udGFjdFwiLCB0ZXh0OiBcIkNvbnRhY3QgVXNcIiB9LFxuICBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdnNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7bmF2c0FycltpXS5uYW1lfS1saW5rYCk7XG4gICAgbGlzdEVsZW0uYXBwZW5kQ2hpbGQobGkpO1xuICAgIGNvbnN0IGxpRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25hdnNBcnJbaV0ubmFtZX0tbGlua2ApO1xuICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYS5ocmVmID0gYCMke25hdnNBcnJbaV0ubmFtZX1gO1xuICAgIGEudGV4dENvbnRlbnQgPSBgJHtuYXZzQXJyW2ldLnRleHR9YDtcbiAgICBsaUVsZW0uYXBwZW5kQ2hpbGQoYSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluKTtcblxuICBjb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBjcmVhdGVIb21lKG1haW5FbGVtKTtcbiAgY3JlYXRlTWVudShtYWluRWxlbSk7XG4gIGNyZWF0ZUNvbnRhY3QobWFpbkVsZW0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lKG1haW5FbGVtKSB7XG4gIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICBtYWluRWxlbS5hcHBlbmRDaGlsZChob21lKTtcblxuICBjb25zdCBob21lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbiAgY3JlYXRlSG9tZUNvbnRlbnQoaG9tZUVsZW0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lQ29udGVudChob21lRWxlbSkge1xuICBsZXQgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaG9tZUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcbiAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAxLnRleHRDb250ZW50ID1cbiAgICAnV2VsY29tZSB0byBcIlRoZSBHb3VybWV0XFwncyBEZWxpZ2h0LFwiJyArXG4gICAgXCJhIGNvenkgYW5kIGludGltYXRlIEZyZW5jaCBiaXN0cm8gbG9jYXRlZFwiICtcbiAgICBcImluIHRoZSBoZWFydCBvZiBkb3dudG93bi4gT3VyIG1lbnUgaXMgaW5zcGlyZWRcIiArXG4gICAgXCJieSBjbGFzc2ljIEZyZW5jaCBjdWlzaW5lLCBmZWF0dXJpbmcgZGlzaGVzIG1hZGVcIiArXG4gICAgXCJ3aXRoIG9ubHkgdGhlIGZyZXNoZXN0IGFuZCBoaWdoZXN0LXF1YWxpdHkgaW5ncmVkaWVudHMuXCI7XG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2NoZWYucG5nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyMDBweFwiKTtcbiAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAyLnRleHRDb250ZW50ID0gXCJDb21lIG9uIGRvd24gZm9yIHNvbWUgZGVsaWNpb3VzIGN1aXNpbmUhXCI7XG5cbiAgaG9tZUVsZW0uYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XG4gIGhvbWVFbGVtLmFwcGVuZENoaWxkKHAxKTtcbiAgaG9tZUVsZW0uYXBwZW5kQ2hpbGQocDIpO1xuICBob21lRWxlbS5hcHBlbmRDaGlsZChpbWcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KG1haW5FbGVtKSB7XG4gIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuICBtYWluRWxlbS5hcHBlbmRDaGlsZChtZW51KTtcblxuICBjb25zdCBtZW51RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbiAgY3JlYXRlTWVudUhlYWRlcihtZW51RWxlbSk7XG4gIGNyZWF0ZU1lbnVDb250ZW50KG1lbnVFbGVtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUhlYWRlcihtZW51RWxlbSkge1xuICBsZXQgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiRGlubmVyIE1lbnVcIjtcbiAgbWVudUVsZW0uYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDb250ZW50KG1lbnVFbGVtKSB7XG4gIGxldCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbWVudUVsZW0uYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG4gIGNvbnN0IG1lbnVMaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudSB1bFwiKTtcbiAgbGV0IHRpdGxlQXJyID0gW1wiQXBwZXRpemVyc1wiLCBcIlNhbGFkc1wiLCBcIkVudHJlZXNcIiwgXCJEZXNzZXJ0c1wiXTtcbiAgbGV0IGNvbnRlbnRBcnIgPSBbXG4gICAgW1xuICAgICAgeyBkaXNoOiBcIkZyaWVkIENhbGFtYXJpXCIsIHByaWNlOiA4IH0sXG4gICAgICB7IGRpc2g6IFwiQnJ1c2NoZXR0YVwiLCBwcmljZTogNyB9LFxuICAgICAgeyBkaXNoOiBcIkNyYWIgQ2FrZXNcIiwgcHJpY2U6IDEyIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICB7IGRpc2g6IFwiQ2FwcmVzZSBTYWxhZFwiLCBwcmljZTogOCB9LFxuICAgICAgeyBkaXNoOiBcIkdyZWVrIFNhbGFkXCIsIHByaWNlOiA5IH0sXG4gICAgICB7IGRpc2g6IFwiU3BpbmFjaCBTYWxhZFwiLCBwcmljZTogMTAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHsgZGlzaDogXCJGaWxldCBNaWdub25cIiwgcHJpY2U6IDI1IH0sXG4gICAgICB7IGRpc2g6IFwiTG9ic3RlciBUYWlsXCIsIHByaWNlOiAzNSB9LFxuICAgICAgeyBkaXNoOiBcIlBlc3RvIENoaWNrZW5cIiwgcHJpY2U6IDIwIH0sXG4gICAgICB7IGRpc2g6IFwiRWdncGxhbnQgUGFybWVzYW5cIiwgcHJpZTogMTggfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHsgZGlzaDogXCJDaG9jb2xhdGUgTW91c3NlXCIsIHByaWNlOiA3IH0sXG4gICAgICB7IGRpc2g6IFwiQ3LDqG1lIEJydWxlZVwiLCBwcmljZTogOCB9LFxuICAgICAgeyBkaXNoOiBcIlRpcmFtaXN1XCIsIHByaWNlOiA2IH0sXG4gICAgXSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlTWVudUxpc3QobWVudUxpc3RFbGVtLCBpLCB0aXRsZUFycltpXSwgY29udGVudEFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUxpc3QobWVudUxpc3RFbGVtLCBpbmRleCwgdGl0bGUsIGNvbnRlbnQpIHtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBtZW51TGlzdEVsZW0uYXBwZW5kQ2hpbGQobGkpO1xuICBjb25zdCBsaUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbWVudT51bD5saTpudGgtY2hpbGQoJHtpbmRleCArIDF9KWApO1xuXG4gIGxldCBsaUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbGlIZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgbGlFbGVtLmFwcGVuZENoaWxkKGxpSGVhZGVyKTtcblxuICBsZXQgaW5uZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsaUVsZW0uYXBwZW5kQ2hpbGQoaW5uZXJMaXN0KTtcblxuICBjb25zdCBpbm5lckxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgI21lbnU+dWw+bGk6bnRoLWNoaWxkKCR7aW5kZXggKyAxfSk+dWxgXG4gICk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpbm5lckxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGlubmVyTGkudGV4dENvbnRlbnQgPSBgJHtjb250ZW50W2ldLmRpc2h9IC0gJCR7Y29udGVudFtpXS5wcmljZX1gO1xuICAgIGlubmVyTGlzdEVsZW0uYXBwZW5kQ2hpbGQoaW5uZXJMaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdChtYWluRWxlbSkge1xuICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcbiAgbWFpbkVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgY29uc3QgY29udGFjdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XG4gIGxldCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gIGNvbnRhY3RFbGVtLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuXG4gIGxldCBjb250YWN0UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICBjb250YWN0UC50ZXh0Q29udGVudCA9XG4gICAgXCJDb250YWN0IHVzIGZvciBhbnkgcXVlc3Rpb25zIG9yIHRvIG1ha2UgYSByZXNlcnZhdGlvbi5cIjtcbiAgY29udGFjdEVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdFApO1xuXG4gIGNyZWF0ZUNvbnRhY3RJbmZvKGNvbnRhY3RFbGVtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdEluZm8oY29udGFjdEVsZW0pIHtcbiAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWluZm9cIik7XG4gIGNvbnRhY3RFbGVtLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIGNvbnN0IGluZm9FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWluZm9cIik7XG4gIGxldCBpbmZvQ29udGVudCA9IFtcbiAgICBcIlBob25lOiA1NTUtNTU1LTU1NTVcIixcbiAgICBcIkVtYWlsOiBnb3VybWV0c2RlbGlnaHRAZW1haWwuY29tXCIsXG4gICAgXCJBZGRyZXNzOiAxMjMgTWFpbiBTdCwgQW55dG93biBDYW5hZGFcIixcbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGluZm9Db250ZW50W2ldO1xuICAgIGluZm9FbGVtLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBDcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgZm9vdGVyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IFxcdTAwQTkgMjAyMyBUaWZmYW55IENoYW5gO1xuICBmb290ZXJFbGVtLmFwcGVuZENoaWxkKHApO1xufVxuXG5jcmVhdGVIZWFkZXIoKTtcbmNyZWF0ZU5hdigpO1xuY3JlYXRlTWFpbigpO1xuQ3JlYXRlRm9vdGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=