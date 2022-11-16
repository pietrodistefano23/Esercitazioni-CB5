import { c, q, GET, POST,DELETE, createCard, uuidv4 } from './utils.js'
const url = "http://localhost:3000/pokemon"

const ul = q(".cards__list")
const form = document.forms.pokemon;
const element = form.elements




form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = {
		id: uuidv4(),
		name: element.pkmName.value,
		type: element.pkmType.value
	}

	POST(url, data)
		.then((response) => response.json())
		.then((res) => {
			console.log('Success:', res);
		})
		.catch((error) => {
			console.error('Error:', error);
		})
})


window.onload = GET(url).then(res => res.map(pkm => createCard(url,ul,pkm.name,pkm.type,pkm.id)));

