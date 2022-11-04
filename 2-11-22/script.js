
const divPrice = document.querySelector(".price");
const divRate = document.querySelector(".rate");

import products  from "./product.js";


const cardCreated = ( title, imgUrl, imgAlt, description, price, rating, divContainer)=>{
    const card = document.createElement("div");
    card.className = "card";
    

    const titleCard = document.createElement("h1");
    titleCard.textContent = title;

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src",imgUrl);
    imgCard.setAttribute("alt",imgAlt);

    const descriptionCard = document.createElement("p");
    descriptionCard.textContent = description;

    const priceCard = document.createElement("p");
    priceCard.textContent = price;
    priceCard.className = "prezzo";

    const ratingCard = document.createElement("p");
    ratingCard.textContent = rating;

    card.append(titleCard, imgCard, descriptionCard, priceCard, ratingCard);
    switch(divContainer){
        case "rate":
            divRate.appendChild(card);
            break;
        case "price":
            divPrice.appendChild(card);
            break;
        default :
        divPrice.appendChild(card);
        break;
    }
    
    

}
 const bestRated = products.filter((element) => element.rating.rate > 3 );


 for(let item of bestRated){
    cardCreated(item.title,item.image,item.title,item.description,item.price,item.rating.rate,"rate")
   }

   const bestPrice = products.filter((element) => element.price > 20 );
   for(let item of bestPrice){
    cardCreated(item.title,item.image,item.title,item.description,item.price,item.rating.rate,"price")
   }





