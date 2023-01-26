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
  let menuContent = document.createElement("div");
  menuContent.setAttribute("id", "menu-content");
  menuElem.appendChild(menuContent);

  const menuContentElem = document.querySelector("#menu-content");
  let menuText = document.createElement("div");
  menuText.setAttribute("id", "menu-text");
  menuContentElem.appendChild(menuText);

  const menuTextElem = document.querySelector("#menu-text");
  createMenuText(menuTextElem);

  let menuImage = document.createElement("div");
  menuImage.setAttribute("id", "menu-image");
  menuContentElem.appendChild(menuImage);

  const menuImageElem = document.querySelector("#menu-image");
  createMenuImage(menuImageElem);
}

function createMenuText(menuTextElem) {
  let menuList = document.createElement("ul");
  menuTextElem.appendChild(menuList);

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
      { dish: "Eggplant Parmesan", price: 18 },
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
  const liElem = document.querySelector(
    `#menu-text>ul>li:nth-child(${index + 1})`
  );

  let liHeader = document.createElement("h3");
  liHeader.textContent = title;
  liElem.appendChild(liHeader);

  let innerList = document.createElement("ul");
  liElem.appendChild(innerList);

  const innerListElem = document.querySelector(
    `#menu-text>ul>li:nth-child(${index + 1})>ul`
  );
  for (let i = 0; i < content.length; i++) {
    let innerLi = document.createElement("li");
    innerLi.textContent = `${content[i].dish} - $${content[i].price}`;
    innerListElem.appendChild(innerLi);
  }
}

function createMenuImage(menuImageElem) {
  let img1 = document.createElement("img");
  img1.setAttribute("src", "../src/food1.png");
  img1.setAttribute("alt", "Fried Calamari");
  let img2 = document.createElement("img");
  img2.setAttribute("src", "../src/food2.png");
  img2.setAttribute("alt", "Greek Salad");
  let img3 = document.createElement("img");
  img3.setAttribute("src", "../src/food3.png");
  img3.setAttribute("alt", "Lobster Tail");
  let img4 = document.createElement("img");
  img4.setAttribute("src", "../src/food4.png");
  img4.setAttribute("alt", "Crème Brulee");
  menuImageElem.appendChild(img1);
  menuImageElem.appendChild(img2);
  menuImageElem.appendChild(img3);
  menuImageElem.appendChild(img4);
}

export { createMenu };
