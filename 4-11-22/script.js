const bodyEl = document.querySelector("body");






const mainEl = document.querySelector("main");

const cardCreated = ( imgUrl, num, name,  type  )=>{
    const card = document.createElement("div");
    card.className = "card";

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src",imgUrl);
    

    const numCard = document.createElement("p");
    numCard.textContent = "#" +num ;
    
    const nameCard = document.createElement ("h6");
    nameCard.textContent = name;
    
    const typeCard = document.createElement ("span");
    typeCard.textContent = "type: " +type;
    switch(type){
        case "electric":
            card.style = "background-color: #FCF7DE";
            break;
        case "water":
            card.style = "background-color: #DEF3FD";
            break;    
        case "ground":
            card.style = "background-color: #f4e7da";
            break;
        case "rock":
            card.style = "background-color: #d5d5d4 ";
            break; 
        case "fairy":
            card.style = "background-color: #fceaff ";
            break;
        case "poison":
            card.style = "background-color: #98d7a5 ";
            break;
        case "dragon":
            card.style = "background-color: #97b3e6  ";
            break;
        case "psychic":
            card.style = "background-color: #eaeda1  ";
            break; 
        case "flying":
            card.style = "background-color: #F5F5F5   ";
            break;
        case "fighting":
            card.style = "background-color: #E6E0D4  ";
            break;
        case "normal":
            card.style = "background-color: #F5F5F5  ";
            break;
        case "bug":
            card.style = "background-color :#f8d5a3"    
        case "fire":
            card.style = "background-color: #FDDFDF  ";
            break;
        case "grass":
            card.style = "background-color: #DEFDE0  ";
            break;
        case "ghost":
            card.style = "background-color: #705898  ";
            break;
        case "ice":
            card.style = "background-color:  #98d8d8 ";                                       
    } 

    card.append(imgCard, numCard, nameCard, typeCard);
    mainEl.append(card);
    
};

/*fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then((response) => response.json())
    .then((poke) => {
       
        poke.results.map((element)=>fetch(element.url)
       .then((res) =>res.json()
       .then((pokemon)=> 
        cardCreated(pokemon.sprites.back_default ,pokemon.id, pokemon.name,pokemon.types[0].type.name )
            
    
       )))  
    });
    
   */

    for (let index = 1; index <= 151; index++) {
        pokemons.push(`https://pokeapi.co/api/v2/pokemon/${index}/`);
      }
      
      let request = pokemons.map((url) => {
        return fetch(url).then((res) => res.json());
      });
      
      
      Promise.all(request)
        .then((res) =>
          res?.map((pokemon) => {
            if (!pokemon) {
              console.log("Error: Pokemon doesn't exist")
              return null;
            };
      
            return createCard(
                pokemon.sprites.back_default
                 ,pokemon.id, 
                 pokemon.name,
                 pokemon.types[0].type.name
              
            )
          }
      
          )
        ); 
      
      

   