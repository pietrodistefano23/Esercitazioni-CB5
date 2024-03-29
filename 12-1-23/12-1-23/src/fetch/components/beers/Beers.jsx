
import { useEffect, useState } from "react";
import { UseFetch } from "../../hooks/UseFetch";
import { ENDPOINT } from "../../../endpoint";

export function Beers () {
    const {data,error,loading,refetch} = UseFetch(ENDPOINT.BEERS)
    return <p className="usersContainer">
        <h3>BEERS</h3>
        <span>{data?.brand + '-' + data?.name}</span>
        <button onClick={refetch}>new Beers</button>
    </p>
    
}
