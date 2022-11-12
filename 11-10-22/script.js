let value = 1;
let result = `https://pokeapi.co/api/v2/pokemon/${value}`;
fetch(result)
  .then((res) => res.json())
  .then((res) => cardCreated(res));

  const container = document.getElementById("container");
  const card = document.createElement("div");
  const img = document.createElement("img");
  const namePokemon = document.createElement("h3");
  const id = document.createElement("p");
  const type = document.createElement("h6");

  const cardCreated = (data) => {

    card.classList.add("card");
    card.classList.add(`bg-${data.types[0].type.name}`);
    img.src = data.sprites.front_default;
    namePokemon.textContent = data.name;
    id.textContent = "# " + createId(data.id);
    function createId (id) {
        if ( !id ) return null;
        if ( id < 10 ) {return `00${id}`}
        else if ( id < 100 ){ return `0${id}`}
        return id 
    }
    type.textContent = "Type: " + data.types[0].type.name;

    card.append(img, id, namePokemon, type);
    container.appendChild(card);

  }

  const prev = document.getElementById("prev-btn");
  const next = document.getElementById("next-btn");
  card.append(prev, next);

  next.addEventListener("click", () => {
    value++;

    result = `https://pokeapi.co/api/v2/pokemon/${value}`;
    fetch(result)
      .then((res) => res.json())
      .then((res) => cardCreated(res));

    if (next >= 10) next.disabled = true;
    if (next === 1) prev.disabled = true;
    else prev.disabled = false;
  });

  prev.addEventListener("click", () => {
    value--;

    result = `https://pokeapi.co/api/v2/pokemon/${value}`;
    fetch(result)
      .then((res) => res.json())
      .then((res) => cardCreated(res));

      if (next <= 2) prev.disabled = true;

  });


  window.onload = prev.disabled = true;



