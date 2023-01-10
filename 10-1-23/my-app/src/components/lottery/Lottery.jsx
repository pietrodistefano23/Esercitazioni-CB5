import { useState } from "react";


export function Lottery(){
    const [number,setNumber] = useState();
    
    const pickANumber = () =>Math.round(Math.random()*91)
    
    const lotteryButtonClick = ()=>{
        
        const newNumber = pickANumber();
        setNumber(newNumber)
        
    } 
    
    function LotteryButton (props){
        const {wasDrow,...attributes} = props;
        return <button disabled = {!!wasDrow}
        onClick = {lotteryButtonClick}
        {...attributes}
        >{!!wasDrow ? 'Numero estratto' : 'Estrai numero'}
        </button>
     }
     
     return <div className="lottery">
        <table>
            <tr>
                <td className="first">{number}</td>
                <td className="second"></td>
                <td className="third"></td>
                <td className="fourth"></td>
                <td className="fifth"></td>
                <td className="sixth"></td>
            </tr>
        </table>
        <LotteryButton wasDrow={false}/>
     </div>
} 