import styles from './styles.module.scss'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GET } from '../../utils/api';

import { HiPhoneIncoming } from "react-icons/hi";
import { HiReply } from "react-icons/hi";

const Quote = () => {
    const params = useParams();
    console.log(params.quotes)

    const [dataCard,setdataCard] = useState({});

    useEffect (() => {
        GET(`users/${params.quotes}`)
        .then(res => setdataCard(res))
        
    }
    
    ,[])




    return (
        <div className="container">

            <div className={styles.Card}>
                {console.log(dataCard)}
            <img src={dataCard.image} alt={dataCard.firstName}/>
            <div className={styles.data}>
                <h3>
                    {dataCard.firstName}
                </h3>
                <span>
                    {`@${dataCard.username}`}
                </span>
                <ul>
                    <li><HiPhoneIncoming />{dataCard.phone}</li>
                    <li>{dataCard.email}</li>
                </ul>
                <Link to={'/contacts'}><HiReply/></Link>
                
           </div>
        </div>
        
        </div>
        
    )
}

export default Quote;