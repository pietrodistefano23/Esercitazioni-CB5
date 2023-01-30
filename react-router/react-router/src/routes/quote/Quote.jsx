import styles from './styles.module.scss'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const Quote = () => {
const {quote} = useParams();

const [quoteData, setQuoteData] = useState ({}) ;

useEffect (() => 
{
    fetch (`https://dummyjson.com/users `)
    .then (res => res.json())
    .then (response => setQuoteData(response))
}
,[])

    return (

        <div className={styles.Contacts}>
            <h3>Hola {quoteData.firstName}</h3>
            {console.log(quote)}
            
        </div>
    )
}

export default Quote;