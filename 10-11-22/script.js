const bodyEl = document.querySelector("body"); 
const containerEl= document.getElementById("container");

const btn= document.getElementById("btn");
const advice=document.getElementById("advice");
const adviceId = document.createElement ("span")
const urlAdvice = "https://api.adviceslip.com/advice";
const getAdvise = (URL) =>{
    fetch(URL,{cache: "no-cache"})
    .then((res)=>res.json())
    
    .then((res)=>(adviceId.textContent ="ADVICE # "+ res.slip.id )+(advice.textContent=  res.slip.advice))
    .catch((e)=> console.log("Error"+e));
};

const onFirstLoad = () =>{
    btn.addEventListener("click",()=>{
        getAdvise(urlAdvice)
    });
};
const divisorEl = document.getElementById("divisor");

window.onload = onFirstLoad;

containerEl.append(adviceId,advice,btn);
bodyEl.append(containerEl)

