

const bodyEl = document.querySelector("body");
console.log(bodyEl);

const navEl = document.createElement("nav");
const divEl = document.createElement("div");
divEl.className = "firstDiv";
const imgEl = document.createElement("img");
const spanEl = document.createElement("span");
const spanEl2 = document.createElement("span"); 


imgEl.setAttribute("src","https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png");
imgEl.setAttribute("alt","netflix"); 
spanEl.textContent = "Home";
spanEl2.textContent = "Film";
divEl.append(imgEl,spanEl,spanEl2);
navEl.append(divEl);
bodyEl.append(navEl);

const mainEl = document.querySelector("main");
const divCata1 = document.querySelector(".catalogo1");
const divCata2 = document.querySelector(".catalogo2");
const divCata3 = document.querySelector(".catalogo3");





import content from "./listaogg.js";

const cardCreated = ( imgUrl, imgAlt,  rating, divContainer)=>{
    const card = document.createElement("div");
    card.className = "card";

    
    const imgCard = document.createElement("img");
    imgCard.setAttribute("src",imgUrl);
    imgCard.setAttribute("alt",imgAlt);

    

    const ratingCard = document.createElement("p");
    ratingCard.textContent = rating ;
    card.append( imgCard,imgAlt,  ratingCard);
    switch(divContainer){
        case "film":
            divCata1.append(card);
            break;
        case "tvseries" :
            divCata2.append(card);
            break;
        case "rating" :
            divCata3.append(card);   
        default :
        divCata3.append(card);    
    }
    mainEl.append(divCata1,divCata2,divCata3);
    bodyEl.append(mainEl);
} ;

const filmCard = content.filter((element) => element.type == "film");

for(let item of filmCard){
    cardCreated(item.image,"", "", "film");
};

const serieCard = content.filter((element) => element.type == "tvseries");

for(let item of serieCard){
    cardCreated(item.image,"", "", "tvseries");
};

const bestRate = content.filter((element) => element.rating >= 4);

for(let item of bestRate){
    cardCreated(item.image,"", "","rating");
}















