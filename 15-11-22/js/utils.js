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
function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);
}
export { c, q, GET, POST, uuidv4 }