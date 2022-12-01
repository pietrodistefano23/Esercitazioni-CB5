const url_actor= "https://localhost:3000/attori"
console.log("2");
// const GET = async (url) => {
// 	const res = await fetch(url);
// 	return await res.json();
// }

const POST = async (url, body_message) => {
	return await fetch(url, {
	  method: "POST",
	  headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	  },
	  body: new URLSearchParams(body_message),
	});
  };
  

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

const cardContainer = document.querySelector ("containerCard")
const createAct=(data)=>{
	
    const cardEL= document.createElement ("div");
    const nome = document.createElement("span");
    const cognome = document.createElement("span");
    const data_nascita = document.createElement("span");
    const deleteEl = document.createElement ("button")
	const modEl = document.createElement("button");
	const idEl = document.createElement("span")

    nome.className = "nome";
    cognome.className = "cognome";
    data_nascita.className = "data";
	idEl.className = "idAct",
	
	idEl.textContent = data.id
    nome.textContent = data.nome;
    cognome.textContent = data.cognome;
    data_nascita.textContent = data.data_nascita;
	deleteEl.className = "delete"
    deleteEl.textContent = "Delete";

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



    cardEL.append(nome,cognome,data_nascita,deleteEl, modEl);
    cardContainer.append (cardEL);
};

function createActor(body_message) {
	const url = `http://localhost:3000/attore`;
  
	return POST(url, body_message);
  }
  
  const actorName = document.querySelector(".actName");
  const actorSurname = document.querySelector(".actSurname");
  const actorData = document.querySelector(".actData");
  const addBtn = document.querySelector(".add");
  
  addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const actor = {
	  nome: actorName.value,
	  cognome: actorSurname.value,
	  data_nascita: actorData.value
	};
  
	createActor(actor).then((message)=>{
	  console.log("Post andata a buon fine!"); 
	});
  });
  
  const GET = async (url) => {
	 	const res = await fetch(url);
	 	return await res.json();
	 }
  window.onload = GET(url_actor).then(res => res.map(actor => createCard(actor)));
