//#########ESERCIZIO 1 ###################
/*function calc(num1,num2, operator = "+"){
    switch(operator){
        case "+" :
            result = num1+num2;
            return result;
        case "-":
            result = num1 - num2;
            return result;
        case "*":
            result = num1 * num2;
            return result;
        case "/":
            result = num1 / num2;
            return result;
        case "m":
            result = (num1 + num2)/2;
            return result;                
    }  
}
console.log(calc(7,9,"*"));
*/
//#########ESERCIZIO 2 ####################

let superHero = {
    name:"Tony",
    lastName: "Stark",
    knowAs: "Iron Man",
    specialGift: ["Genio","Miliardario","Playboy","Filantropo"],
    rich: true,
};

//console.log(superHero);
//console.log(superHero.specialGift[2]);
const superHeroKeys = Object.keys(superHero);
console.log(superHeroKeys);




