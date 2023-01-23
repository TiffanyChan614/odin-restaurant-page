/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
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




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
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




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)(mainElem);
  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)(mainElem);
  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)(mainElem);
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

  let funcArr = [_home__WEBPACK_IMPORTED_MODULE_0__.createHome, _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu, _contact__WEBPACK_IMPORTED_MODULE_2__.createContact];
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsNkNBQVUsRUFBRSw2Q0FBVSxFQUFFLG1EQUFhO0FBQ3REOztBQUVBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdChtYWluRWxlbSkge1xuICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcbiAgbWFpbkVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgY29uc3QgY29udGFjdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XG4gIGxldCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gIGNvbnRhY3RFbGVtLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuXG4gIGxldCBjb250YWN0UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICBjb250YWN0UC50ZXh0Q29udGVudCA9XG4gICAgXCJDb250YWN0IHVzIGZvciBhbnkgcXVlc3Rpb25zIG9yIHRvIG1ha2UgYSByZXNlcnZhdGlvbi5cIjtcbiAgY29udGFjdEVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdFApO1xuXG4gIGNyZWF0ZUNvbnRhY3RJbmZvKGNvbnRhY3RFbGVtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdEluZm8oY29udGFjdEVsZW0pIHtcbiAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWluZm9cIik7XG4gIGNvbnRhY3RFbGVtLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIGNvbnN0IGluZm9FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWluZm9cIik7XG4gIGxldCBpbmZvQ29udGVudCA9IFtcbiAgICBcIlBob25lOiA1NTUtNTU1LTU1NTVcIixcbiAgICBcIkVtYWlsOiBnb3VybWV0c2RlbGlnaHRAZW1haWwuY29tXCIsXG4gICAgXCJBZGRyZXNzOiAxMjMgTWFpbiBTdCwgQW55dG93biBDYW5hZGFcIixcbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGluZm9Db250ZW50W2ldO1xuICAgIGluZm9FbGVtLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVDb250YWN0IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lKG1haW5FbGVtKSB7XG4gIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICBtYWluRWxlbS5hcHBlbmRDaGlsZChob21lKTtcblxuICBjb25zdCBob21lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbiAgY3JlYXRlSG9tZUNvbnRlbnQoaG9tZUVsZW0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lQ29udGVudChob21lRWxlbSkge1xuICBsZXQgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaG9tZUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcbiAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAxLnRleHRDb250ZW50ID1cbiAgICAnV2VsY29tZSB0byBcIlRoZSBHb3VybWV0XFwncyBEZWxpZ2h0LFwiJyArXG4gICAgXCJhIGNvenkgYW5kIGludGltYXRlIEZyZW5jaCBiaXN0cm8gbG9jYXRlZFwiICtcbiAgICBcImluIHRoZSBoZWFydCBvZiBkb3dudG93bi4gT3VyIG1lbnUgaXMgaW5zcGlyZWRcIiArXG4gICAgXCJieSBjbGFzc2ljIEZyZW5jaCBjdWlzaW5lLCBmZWF0dXJpbmcgZGlzaGVzIG1hZGVcIiArXG4gICAgXCJ3aXRoIG9ubHkgdGhlIGZyZXNoZXN0IGFuZCBoaWdoZXN0LXF1YWxpdHkgaW5ncmVkaWVudHMuXCI7XG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2NoZWYucG5nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyMDBweFwiKTtcbiAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAyLnRleHRDb250ZW50ID0gXCJDb21lIG9uIGRvd24gZm9yIHNvbWUgZGVsaWNpb3VzIGN1aXNpbmUhXCI7XG5cbiAgaG9tZUVsZW0uYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XG4gIGhvbWVFbGVtLmFwcGVuZENoaWxkKHAxKTtcbiAgaG9tZUVsZW0uYXBwZW5kQ2hpbGQocDIpO1xuICBob21lRWxlbS5hcHBlbmRDaGlsZChpbWcpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIb21lIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51KG1haW5FbGVtKSB7XG4gIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuICBtYWluRWxlbS5hcHBlbmRDaGlsZChtZW51KTtcblxuICBjb25zdCBtZW51RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbiAgY3JlYXRlTWVudUhlYWRlcihtZW51RWxlbSk7XG4gIGNyZWF0ZU1lbnVDb250ZW50KG1lbnVFbGVtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUhlYWRlcihtZW51RWxlbSkge1xuICBsZXQgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiRGlubmVyIE1lbnVcIjtcbiAgbWVudUVsZW0uYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDb250ZW50KG1lbnVFbGVtKSB7XG4gIGxldCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbWVudUVsZW0uYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG4gIGNvbnN0IG1lbnVMaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudSB1bFwiKTtcbiAgbGV0IHRpdGxlQXJyID0gW1wiQXBwZXRpemVyc1wiLCBcIlNhbGFkc1wiLCBcIkVudHJlZXNcIiwgXCJEZXNzZXJ0c1wiXTtcbiAgbGV0IGNvbnRlbnRBcnIgPSBbXG4gICAgW1xuICAgICAgeyBkaXNoOiBcIkZyaWVkIENhbGFtYXJpXCIsIHByaWNlOiA4IH0sXG4gICAgICB7IGRpc2g6IFwiQnJ1c2NoZXR0YVwiLCBwcmljZTogNyB9LFxuICAgICAgeyBkaXNoOiBcIkNyYWIgQ2FrZXNcIiwgcHJpY2U6IDEyIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICB7IGRpc2g6IFwiQ2FwcmVzZSBTYWxhZFwiLCBwcmljZTogOCB9LFxuICAgICAgeyBkaXNoOiBcIkdyZWVrIFNhbGFkXCIsIHByaWNlOiA5IH0sXG4gICAgICB7IGRpc2g6IFwiU3BpbmFjaCBTYWxhZFwiLCBwcmljZTogMTAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHsgZGlzaDogXCJGaWxldCBNaWdub25cIiwgcHJpY2U6IDI1IH0sXG4gICAgICB7IGRpc2g6IFwiTG9ic3RlciBUYWlsXCIsIHByaWNlOiAzNSB9LFxuICAgICAgeyBkaXNoOiBcIlBlc3RvIENoaWNrZW5cIiwgcHJpY2U6IDIwIH0sXG4gICAgICB7IGRpc2g6IFwiRWdncGxhbnQgUGFybWVzYW5cIiwgcHJpZTogMTggfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHsgZGlzaDogXCJDaG9jb2xhdGUgTW91c3NlXCIsIHByaWNlOiA3IH0sXG4gICAgICB7IGRpc2g6IFwiQ3LDqG1lIEJydWxlZVwiLCBwcmljZTogOCB9LFxuICAgICAgeyBkaXNoOiBcIlRpcmFtaXN1XCIsIHByaWNlOiA2IH0sXG4gICAgXSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlTWVudUxpc3QobWVudUxpc3RFbGVtLCBpLCB0aXRsZUFycltpXSwgY29udGVudEFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUxpc3QobWVudUxpc3RFbGVtLCBpbmRleCwgdGl0bGUsIGNvbnRlbnQpIHtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBtZW51TGlzdEVsZW0uYXBwZW5kQ2hpbGQobGkpO1xuICBjb25zdCBsaUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbWVudT51bD5saTpudGgtY2hpbGQoJHtpbmRleCArIDF9KWApO1xuXG4gIGxldCBsaUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbGlIZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgbGlFbGVtLmFwcGVuZENoaWxkKGxpSGVhZGVyKTtcblxuICBsZXQgaW5uZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsaUVsZW0uYXBwZW5kQ2hpbGQoaW5uZXJMaXN0KTtcblxuICBjb25zdCBpbm5lckxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgI21lbnU+dWw+bGk6bnRoLWNoaWxkKCR7aW5kZXggKyAxfSk+dWxgXG4gICk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpbm5lckxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGlubmVyTGkudGV4dENvbnRlbnQgPSBgJHtjb250ZW50W2ldLmRpc2h9IC0gJCR7Y29udGVudFtpXS5wcmljZX1gO1xuICAgIGlubmVyTGlzdEVsZW0uYXBwZW5kQ2hpbGQoaW5uZXJMaSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBoZWFkZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIEdvdXJtZXQncyBEZWxpZ2h0XCI7XG4gIGhlYWRlckVsZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5hdik7XG5cbiAgY29uc3QgbmF2RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gIGNyZWF0ZU5hdkRpdnMobmF2RWxlbSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkRpdnMobmF2RWxlbSkge1xuICBsZXQgbmF2c0FyciA9IFtcbiAgICB7IG5hbWU6IFwiaG9tZVwiLCB0ZXh0OiBcIkhvbWVcIiB9LFxuICAgIHsgbmFtZTogXCJtZW51XCIsIHRleHQ6IFwiTWVudVwiIH0sXG4gICAgeyBuYW1lOiBcImNvbnRhY3RcIiwgdGV4dDogXCJDb250YWN0IFVzXCIgfSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdnNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7bmF2c0FycltpXS5uYW1lfS1uYXZgKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBuYXZzQXJyW2ldLnRleHQ7XG4gICAgbmF2RWxlbS5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkxpc3QobmF2RWxlbSkge1xuICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbmF2RWxlbS5hcHBlbmRDaGlsZChsaXN0KTtcbiAgY29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG4gIGNyZWF0ZU5hdkxpc3RJdGVtcyhsaXN0RWxlbSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkxpc3RJdGVtcyhsaXN0RWxlbSkge1xuICBsZXQgbmF2c0FyciA9IFtcbiAgICB7IG5hbWU6IFwiaG9tZVwiLCB0ZXh0OiBcIkhvbWVcIiB9LFxuICAgIHsgbmFtZTogXCJtZW51XCIsIHRleHQ6IFwiTWVudVwiIH0sXG4gICAgeyBuYW1lOiBcImNvbnRhY3RcIiwgdGV4dDogXCJDb250YWN0IFVzXCIgfSxcbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke25hdnNBcnJbaV0ubmFtZX0tbGlua2ApO1xuICAgIGxpc3RFbGVtLmFwcGVuZENoaWxkKGxpKTtcbiAgICBjb25zdCBsaUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuYXZzQXJyW2ldLm5hbWV9LWxpbmtgKTtcbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEuaHJlZiA9IGAjJHtuYXZzQXJyW2ldLm5hbWV9YDtcbiAgICBhLnRleHRDb250ZW50ID0gYCR7bmF2c0FycltpXS50ZXh0fWA7XG4gICAgbGlFbGVtLmFwcGVuZENoaWxkKGEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgY29uc3QgbWFpbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY3JlYXRlSG9tZShtYWluRWxlbSk7XG4gIGNyZWF0ZU1lbnUobWFpbkVsZW0pO1xuICBjcmVhdGVDb250YWN0KG1haW5FbGVtKTtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IGZvb3RlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwLnRleHRDb250ZW50ID0gYENvcHlyaWdodCBcXHUwMEE5IDIwMjMgVGlmZmFueSBDaGFuYDtcbiAgZm9vdGVyRWxlbS5hcHBlbmRDaGlsZChwKTtcbn1cblxuZnVuY3Rpb24gdGFiU3dpdGNoKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLW5hdlwiKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1uYXZcIik7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtbmF2XCIpO1xuXG4gIGxldCBmdW5jQXJyID0gW2NyZWF0ZUhvbWUsIGNyZWF0ZU1lbnUsIGNyZWF0ZUNvbnRhY3RdO1xuICBsZXQgdGFiQXJyID0gW2hvbWUsIG1lbnUsIGNvbnRhY3RdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnVuY0Fyci5sZW5ndGg7IGkrKykge1xuICAgIHRhYkFycltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBmdW5jQXJyW2ldO1xuICAgIH0pO1xuICB9XG59XG5cbmNyZWF0ZUhlYWRlcigpO1xuY3JlYXRlTmF2KCk7XG5jcmVhdGVNYWluKCk7XG5DcmVhdGVGb290ZXIoKTtcbnRhYlN3aXRjaCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9