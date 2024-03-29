
import { useEffect, useState } from "react";
import { UseFetch } from "../../hooks/UseFetch";
import { ENDPOINT } from "../../../endpoint";

export function Appliances () {
    const {data,error,loading,refetch} = UseFetch(ENDPOINT.APPLIANCES)
    return <p className="usersContainer">
        <h3>APPLIANCES</h3>
        <span>{data?.brand + '-' + data?.equipment}</span>
        <button onClick={refetch}>new Appliancess</button>
    </p>
    
}
