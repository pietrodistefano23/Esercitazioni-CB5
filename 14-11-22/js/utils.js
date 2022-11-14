const GET = async URl =>{
    const response = await fetch(URl);
    const data = await response.json();
    return await data;
};

const getId = (n) =>{
    let id=n;
    if ( !id ) return null;
        if ( id < 10 ) {return `00${id}`}
        else if ( id < 100 ){ return `0${id}`}
        return id 
}

export {GET,getId};
