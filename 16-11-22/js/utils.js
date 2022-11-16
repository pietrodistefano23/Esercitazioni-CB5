const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const GET = async (BASE_URL) => {
	const res = await fetch(BASE_URL);
	return await res.json();
}

const POST = async (BASE_URL, body) => {
	return await fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
}

const DELETE = async (URL, id) => {
	return await fetch(`${URL}/${id}`, {
		method: "DELETE"
	})
}
// FUNZIONE CHE CREA LA MIA CARD
const createCard = (url, parent, name, type, id) => {
	const wrapperEl = c('li');  //creo elemento lista
	const cardEl = c("div")     //creo contenitore delle card
	const nameEl = c('p');		// elemento che conterrà il nome del Pokemon
	const typeEl = c('p');      // elemento che conterrà la tipologia del pokemon
	const btn = c('button');    // creo elemento button delete

	wrapperEl.className = "list__card" // do la classe all' elemento li


	nameEl.textContent = name
	typeEl.textContent = `type: ${type}` 
	typeEl.className ="typecard"
	btn.textContent = "Delete"

	btn.addEventListener("click", () => {   // al click del bottone viene eseguita la funzione DELETE
  		DELETE(url, id)
			.then(() => location.reload())
	})

	cardEl.append(nameEl, typeEl, btn);
	wrapperEl.append(cardEl);
	parent.appendChild(wrapperEl);
}

// API
/**
 * Create an unique hash code
 * @returns string
 */
function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);
}

export { c, q, GET, POST,DELETE,createCard, uuidv4 }