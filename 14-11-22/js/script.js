import { GET,getId } from "./utils.js";

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

    card.className = "card";
    card.classList.add(`bg-${data.types[0].type.name}`);
    img.src = data.sprites.front_default;
    namePokemon.textContent = data.name;
    id.textContent = "# " + getId(data.id);
    type.textContent = "Type: " + data.types[0].type.name;

    card.append(img, id, namePokemon, type);
    container.appendChild(card);
}

const prev = document.getElementById("prev-btn");
  const next = document.getElementById("next-btn");
  card.append(prev, next);

  next.addEventListener("click", () => {
   if(value<10){
        value++ ;
        result = `https://pokeapi.co/api/v2/pokemon/${value}`;
    fetch(result)
      .then((res) => res.json())
      .then((res) => cardCreated(res));
      if (value === 10){
        next.disabled = true
     }else prev.disabled = false;
   }

    

    
   
    
  });

  prev.addEventListener("click", () => {
    if(value>1){
        value-- ;
        result = `https://pokeapi.co/api/v2/pokemon/${value}`;
    fetch(result)
      .then((res) => res.json())
      .then((res) => cardCreated(res));

     if (value === 1){
        prev.disabled = true
     }else next.disabled = false;

    }
    
    

    /*result = `https://pokeapi.co/api/v2/pokemon/${value}`;
    fetch(result)
      .then((res) => res.json())
      .then((res) => cardCreated(res));

      if (next <= 2) prev.disabled = true;*/

  });


  window.onload = prev.disabled = true;
