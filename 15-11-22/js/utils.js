const c = (el)=> document.createElement(el);

const q = (el)=> document.querySelector(el);
const GET =async(BaseUrl)=>{
    const res = await fetch(BaseUrl);
    return await res.json();
}

const POST = async (BaseUrl,body)=>{
    return await fetch(BaseUrl,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
}
export { c, q, GET, POST }