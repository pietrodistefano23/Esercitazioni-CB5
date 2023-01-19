
import { useEffect } from 'react';
import { useState } from 'react';
import { GET } from '../../utils/http';
import Friend from '../friend';
import './index.css'

const FriendsList = () => {
const [friendsList, setFrinedsList] = useState([]);

useEffect(() => {
    GET (`users`)
    .then (({users})=> setFrinedsList(users.slice(0,9)) )
    
},[]);
    return (
        <>
        <div className="FriendsList">
                {friendsList.map((element) => (
                    <Friend  data= {element} key= {element.id}/>
                ))}
        </div>
        </>
    )
}


export default FriendsList;