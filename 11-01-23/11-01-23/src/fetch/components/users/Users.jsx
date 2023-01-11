import { useEffect, useState } from "react";
import { UseFetch } from "../../hooks/UseFetch";
import { ENDPOINT } from "../../../endpoint";

export function Users () {
    const {data,error,loading,refetch} = UseFetch(ENDPOINT.USERS)
    return <p className="usersContainer">
        <h3>USERS:</h3>
        {JSON.stringify( data )}
        <button onClick={refetch}>new User</button>
    </p>
    
}
