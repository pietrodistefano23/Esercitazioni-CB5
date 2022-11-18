import { GET, POST, PATCH, DELETE } from './api.js'
import { q, createCard, uuidv4 } from './utils.js'


const url = "http://localhost:3000/pokemon"

// Form Post
const ul = q(".cards__list")
const form = document.forms.pokemon;
const elements = form.elements

// Form Patch 
const formPatch = document.forms.pokemonPatch;
const elementsFP = formPatch.elements;

formPatch.addEventListener("submit", (e) => {
	e.preventDefault();

	const id = elementsFP.id.value

	const data = {
		name: elementsFP.name.value,
		type: elementsFP.type.value
	}

	PATCH(url, id, data)
		.then(() => location.reload())
		.catch(e => console.log(e))
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = {
		id: uuidv4(),
		name: elements.name.value === "" ? "name" : elements.name.value,
		type: elements.type.value
	}

	POST(url, data)
		.then(() => location.reload())
});


window.onload = GET(url)
	.then(res => res.map(pkm => createCard(url, ul, pkm?.name, pkm?.type, pkm?.id, DELETE)));
