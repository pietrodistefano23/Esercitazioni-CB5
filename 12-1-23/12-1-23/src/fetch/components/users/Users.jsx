import { useEffect, useState } from "react";
import { UseFetch } from "../../hooks/UseFetch";
import { ENDPOINT } from "../../../endpoint";

export function Users () {
    const {data,error,loading,refetch} = UseFetch(ENDPOINT.USERS)
    return <p className="usersContainer">
        <h3>USERS:{data?.first_name + data?.last_name}</h3>
        <span>{data?.gender }</span>
        
        <button onClick={refetch}>new User</button>
    </p>
    
}
