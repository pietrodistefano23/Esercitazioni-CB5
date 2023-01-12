import { useEffect, useState } from "react";
import { UseFetch } from "../../hooks/UseFetch";
import { ENDPOINT } from "../../../endpoint";

export function Address () {
    const {data,error,loading,refetch} = UseFetch(ENDPOINT.ADDRESS)
    return <p className="usersContainer">
        <h3>ADDRESS</h3>
        <span>{data?.city + '-' + data?.street_name}</span>
        <button onClick={refetch}>new Address</button>
    </p>
    
}