const formEl = document.forms.calcolatrice.elements; //form
const param1El = formEl.param1; //input primo numero
const param2El = formEl.param2; //input secondo numero
const btnEl = document.querySelectorAll(".btn"); //bottoni
const risEl = document.querySelector(".risultato"); //risultato

const GET = async (url) => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        risEl.textContent = "Risultato: " + data.risultato;
        console.log(data);});
  };

for(let i = 0; i<btnEl.length; i++) {

    btnEl[i].addEventListener("click", (e) => {
        e.preventDefault();
        const par1 = param1El.value;
        const par2 = param2El.value;
        const par3 = btnEl[i].classList[1];
        console.log("singolo bottone:" + btnEl[i]);
        console.log("array di classi del bottone:" + btnEl[i].classList);
        console.log("seconda classe nell'array del bottone:" + btnEl[i].classList[1]);

        let url = `http://localhost:3000/calcolatrice?param1=${par1}&param2=${par2}&param3=${par3}`;

        GET(url);
})};