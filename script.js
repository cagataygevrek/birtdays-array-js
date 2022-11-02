let veri = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: 36,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: 34,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];

let rootSelect = document.querySelector("#root");

let totalBirthday = document.createElement("h2");
totalBirthday.innerHTML = veri.length + " birthdays today ";
rootSelect.appendChild(totalBirthday);

veri.forEach((veriAl) => {
  let createCard = document.createElement("div");
  createCard.classList.add("card");

  let veriIcerik = `
             <h1>${veriAl.name}</h1>
            <p>${veriAl.age} years</p>
            <img src="${veriAl.image}">
      
    
        `;
  createCard.innerHTML = veriIcerik;

  rootSelect.appendChild(createCard);
});

let buttonCreate = document.createElement("button");
buttonCreate.classList.add("button");
buttonCreate.textContent = "Clear All";
buttonCreate.addEventListener("click", () => {
  let cardlar = document.querySelectorAll(".card");
  cardlar.forEach((e) => {
    e.innerHTML = "";
  });

  let refreshCreate = document.createElement("button");
  refreshCreate.textContent = "Sayfayı Yenile";
  refreshCreate.classList.add("refreshCreate");
  refreshCreate.onclick = function () {
    document.querySelector("#root").insertAdjacentHTML =
      window.location.reload();
  };
  rootSelect.appendChild(refreshCreate);
  buttonCreate.style.display = "none";
});

buttonCreate.addEventListener("click", () => {
  let birthdaysDelete = document.querySelector("h2");
  birthdaysDelete.innerHTML = "0 birthdays today";
});

rootSelect.appendChild(buttonCreate);
