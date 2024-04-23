const favorites = [
  {
    name: "RUBY",
    type: "Género 1",
    age: 30,
  },
  {
    name: "BONES",
    type: "Género 2",
    age: 32,
  },
  {
    name: "POUYA",
    type: "Género 3",
    age: 34,
  },
  {
    name: "NIGHT LOVELL",
    type: "Género 4",
    age: 35,
  },
  {
    name: "NAYIB BUKELE",
    type: "Género 5",
    age: 45,
  },
  {
    name: "NIGHT LOVELL",
    type: "Género 6",
    age: 35,
  },
  {
    name: "SANCHEZ CEREN",
    type: "Género 7",
    age: 40,
  },
  {
    name: "OBAMA",
    type: "Género 8",
    age: 41,
  },
  {
    name: "TRUMP",
    type: "Género 9",
    age: 51,
  },
  {
    name: "CHICHARITO",
    type: "Género 10",
    age: 52,
  },
];

const displayFavorites = () => {
  const container = document.getElementById("favorites-container");
  if (container) {
    container.innerHTML = "";
    favorites.forEach((favorite) => {
      const div = document.createElement("div");
      div.classList.add("favorite");
      div.innerHTML = `
        <h2>${favorite.name}</h2>
        <p>Tipo: ${favorite.type}</p>
        <p>Edad: ${favorite.age}</p>
      `;
      container.appendChild(div);
    });
  }
};

displayFavorites();
