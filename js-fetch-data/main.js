console.log("#######prima lista#########")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>{
        for(let element of data){
            console.log(element.name);
            console.log(element.address);
            console.log(element.address.city);
            console.log("----------");
        }
    });
    

setTimeout(function() { fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>res.json())
    .then((data2)=>{
        for(let item of data2){
            console.log(item.id);
            console.log(item.title);
            console.log("---------");
        }
    }
    )
},3000
);

setTimeout(function()
{ console.log("#######SECONDA LISTA#######")
 }, 1000);
    