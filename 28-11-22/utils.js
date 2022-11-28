function func_somma() {
    const fai_somma = async () => {
        const url = "http://localhost:3000/somma?param1=2&param2=3";
        console.log("Async start");
        const res = await fetch(url);
        alert(res);
        return await res.json();
    }
    let result =  fai_somma(); 
}

