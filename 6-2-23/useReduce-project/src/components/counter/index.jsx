import styles from './styles.module.scss'
import { useReducer } from 'react';

const initialValue = {count: 0}

const reducer = (state, action) =>{
    switch (action.type) {
        case 'increment':
            return {count :state.count +1};
        case 'decrement' :
            return {count :state.count -1};
        default :
         return (
            <><span>ERRORE</span></>
         )    
    }
}

const Counter = () => {
 const [state,dispacth] = useReducer( reducer ,initialValue);
    return (
        <div className={styles.Counter}>
                <h2>counter</h2>
                <h4>{state.count}</h4>
                <div className={styles.btnContainer}>
                    <button onClick={() => dispacth({type: 'increment'})}>+</button>
                    <button onClick={() => dispacth({type: 'decrement'})}>-</button>
                </div>
                

        </div>
    )
} 

export default Counter;