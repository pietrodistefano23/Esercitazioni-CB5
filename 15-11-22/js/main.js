import { c, q, GET, POST, uuidv4 } from './utils.js'
const url = "http://localhost:3000/pokemon"

const form = document.forms.pokemon;
const element = form.elements

const ul = q(".pokemonList")


form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = {
		id: uuidv4(),
		name: element.pkName.value,
		type: element.pkType.value,
        
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


window.onload = GET(url).then(res => 
    res.map(pk => ul.innerHTML += `<li> ${pk.name}: ${pk.type}</li>`));



