const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },    //Liste over brukerne
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

let filteredUsers = users;

// Hent HTML #id med getElementById
const userUl = document.getElementById("users");
const searchInput = document.getElementById("name");
const filterBtn = document.getElementById("filter");
const ageInput = document.getElementById("age");

const createTableUI = (users) => {
  userUl.innerHTML = null;       // Lager tabellen 
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};


searchInput.onkeyup = (e) => {
  createTableUI(      // Gjør det mulig for brukeren å søke og matchende vil linke opp
    (filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    ))
  );
};


filterBtn.onclick = (e) => {
  createTableUI(          // samme med minimumsalder
    (filteredUsers = users.filter((user) => user.age >= ageInput.value))
  );
};

const main = () => {
  createTableUI(users);
};

main();