const containerActor = document.querySelector(".attori");

const GET = async (url) => {
	const res = await fetch(url);
	return await res.json();
}

const url_actor = `http://localhost:3000/attori`;


// PORTO A DISPLAY I DATI
const createCard = (actor) => {

        const cardEl = document.createElement("div");
        const imgEl = document.createElement("div");
        const nameEl = document.createElement("h3");
        const cognomeEl = document.createElement("h3");
        const dataEl = document.createElement("h4");
        const deleteEl = document.createElement("button");
        const editEl = document.createElement("button");
        const idEl = document.createElement("p");


        cardEl.className = "card"
        imgEl.className = "card-img";
        nameEl.className = "name";
        cognomeEl.className = "surname";
        dataEl.className = "data-nascita";
        deleteEl.className = "delete-btn";
        editEl.className = "edit-btn";
        idEl.className = "id";

        nameEl.textContent = actor.nome;
        cognomeEl.textContent = actor.cognome;
        dataEl.textContent = actor.data_nascita;
        deleteEl.textContent = "delete";
        editEl.textContent = "edit";
        idEl.textContent = "ID: " + actor.id;

        cardEl.append(imgEl, idEl, nameEl, cognomeEl, dataEl, deleteEl, editEl);
        containerActor.appendChild(cardEl);


        const DELETE = async (url,id) => {
            const res = await fetch(url,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({'id':id})
            });
            return await res.json();
        };

          deleteEl.addEventListener("click", (e) => {
            const url = `http://localhost:3000/attore`;
            const id = actor.id;
            DELETE(url, id)
			.then(() => location.reload())
          });
    }



const POST = async (url, body_message) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
};

function createActor(body_message) {
  const url = `http://localhost:3000/attore`;

  return POST(url, body_message);
}

const actorName = document.querySelector(".actorName");
const actorSurname = document.querySelector(".actorSurname");
const actorYob = document.querySelector(".actorYob");
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const actor = {
    nome: actorName.value,
    cognome: actorSurname.value,
    data_nascita: actorYob.value
  };

  createActor(actor).then((message)=>{
    console.log("Post andata a buon fine!"); 
  });
});

window.onload = GET(url_actor).then(res => res.map(actor => createCard(actor)));