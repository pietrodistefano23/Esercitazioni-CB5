import { useReducer } from "react";


const initState = {count: 0};

function reducer(state ,action){
    switch (action.type){
        case 'increment':
            return {
                count : state.count +1
            };
            case 'decrement':
                return {
                    count : state.count -1
                };
            default: {

            }    
                
    }
}


export function Counter(){
  const  [state,dispatch] = useReducer(reducer,initState)

return (
    <div className="counter">
        <p>
            Count : {state.count}
        </p>
        <button onClick={() => dispatch({type: 'increment'})}>🔼</button>
        <button onClick={() => dispatch({type: 'decrement'})}>🔽</button>
    </div>
)
}
