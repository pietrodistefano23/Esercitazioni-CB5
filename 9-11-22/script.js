const bodyEl= document.querySelector("body");
const cardCreated = ( data )=>{
    const card = document.createElement("div");
    card.className = "card";
    card.classList.add(data.types[0].type.name)

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src",data.sprites.front_default);
    

    const idCard = document.createElement("p");
    idCard.textContent = "#"+ createId(data.id)
    function createId(id){
        if(!id) return null;
        if(id<10) {return `00${id}`}
        else if(id<100) {return `0${id}`}
        return id
    }
    
    const nameCard = document.createElement ("h6");
    nameCard.textContent = data.name;
    
    const typeCard = document.createElement ("span");
    typeCard.textContent = "type: "+ data.types[0].type.name;
    

    card.append(imgCard, idCard, nameCard, typeCard);
    bodyEl.append(card);
    
};
const urlArray = [];
for(let i=0;i<=150;i++){
    urlArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
}



Promise.all(
    urlArray.map((url)=>
    fetch(url)
    .then((res)=> res.json())
    .then((res) => cardCreated(res))
    )
    );

    

