"use strict"

const argvs = process.argv 
const argv = argvs.slice(2) 
const operator = argv[0] 
const num1 = parseFloat(argv[1]) 
const num2 = parseFloat(argv[2]) 
 
if (operator === "sum"){ 
    console.log(  operator + " = " + (num1 + num2)); 
} 
if (operator === "sub"){ 
    console.log( operator + " = " + (num1 - num2)); 
} 
if (operator === "div"){ 
    if (num2 = 0){ 
        console.log("Error") 
    } else{ 
        console.log( operator + " = " + (num1 / num2)); 
    } 
} 
if (operator === "multipl"){ 
    console.log( operator + " = " + (num1 * num2)); 
}