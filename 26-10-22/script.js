
//######Dichiarazione variabili#####

let datiArr = ["Pietro","Di Stefano",20,"diploma"];
console.log(datiArr);

//######Esercizio 1#############

datiArr.splice (2,1,"23/06/02");
console.log(datiArr);

//######Esercizio 2#############

let up = "Pietro, Di Stefano ";
up = up.toUpperCase();
datiArr.splice(0,2, up);
console.log(datiArr);

//######Esercizio 3#############
let num = 7;
let src = "";
for(let i=0;i<num;i++){
    for(let j=0;j<num-i;j++){
        src += "#";
    }
    src += "\n";
}
console.log(src);












  