const createContact = (mainElem) => {
  let contact = document.createElement("section");
  contact.id = "contact";
  mainElem.appendChild(contact);

  const contactElem = document.querySelector("#contact");
  let contactHeader = document.createElement("h2");
  contactHeader.textContent = "Contact Us";
  contactElem.appendChild(contactHeader);

  let contactP = document.createElement("p");
  contactP.textContent =
    "Contact us for any questions or to make a reservation.";
  contactElem.appendChild(contactP);

  createContactInfo(contactElem);
};

const createContactInfo = (contactElem) => {
  let info = document.createElement("ul");
  info.id = "contact-info";
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
};

export { createContact };
