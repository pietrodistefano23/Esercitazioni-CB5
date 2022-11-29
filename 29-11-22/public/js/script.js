const container = document.querySelector(".attori")
const url = "http://localhost:3000/attori"
function createCard  (items)  {
    const container = document.querySelector(".attori")

    for (let item of items){
    const cardEl = document.createElement("div");
    const imgEl =document.createElement("div");
    const nomeEl = document.createElement("h3");
    const cognomeEl = document.createElement("h3");
    const dataEl = document.createElement("h3");

    cardEl.className= "card";
    imgEl.className = "img"
    nomeEl.className = "nome";
    cognomeEl.className = "cognome";
    dataEl.className = "data";

    nomeEl.textContent = item.nome;
    cognomeEl.textContent = item.cognome;
    dataEl.textContent = item.data_nascita;

    cardEl.append(imgEl,nomeEl,cognomeEl,dataEl)
    container.append(cardEl);
}
};


fetch(url)
.then(resp=>resp.json()).then(res=> createCard(res));