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

export { createMenu };
