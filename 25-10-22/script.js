let operatore , numero1 , numero2;

alert("operazioni: \n 1 = +addizione \n 2 = -sottrazione \n 3 = *moltiplicazione \n 4 = /divisione");
operatore = prompt("che tipo di operazione vuoi svolgere: ");
operatore = parseInt(operatore);
numero1 = prompt("inserire primo numero");
numero1 = parseInt(numero1);
numero2 = prompt("inserire secondo numero");
numero2 = parseInt(numero2);

switch(operatore){
    case 1 :
        console.log(numero1+numero2);
        break;
    case 2 :
        console.log(numero1-numero2);
        break;
    case 3:
        console.log(numero1*numero2);
        break;
    case 4:
        console.log(numero1/numero2);
        break;
     default:
        console.log("Valore non valido riprova");               

}
