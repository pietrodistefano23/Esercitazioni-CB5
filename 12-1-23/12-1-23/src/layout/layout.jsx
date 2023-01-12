import { Users } from "../fetch/components/users/Users";
import { Beers } from "../fetch/components/beers/Beers";
import { Address } from "../fetch/components/address/Adrress";
import { Appliances } from "../fetch/components/appliances/Appliances";
import { Counter } from "../counter/Counter";
import { useState } from "react";


export function Layout() {
    const [componentToRender, setComponentToRender]= useState('default')

    const selectChangeHandler = (e) =>{
        setComponentToRender(e.target.value)
    }
    const defaultComponents = () =>{
        <div>Seleziona un componente</div>
    }
    const componentMap = {
        users : Users,
        beers : Beers,
        address : Address,
        appliances : Appliances,
        counter : Counter,
        default : defaultComponents
    }
   
    const DynamiComponent = componentMap[componentToRender]

    return <div className="Layout">
        
        <form>
            <select defaultValue={'default'} onChange={selectChangeHandler}>
                <option value="users" >users</option>
                <option value="beers">Beers</option>
                <option value="address">Address</option>
                <option value="appliances">Appliances</option>
                <option value="counter">Counter</option>
            </select>
        </form>

        <DynamiComponent />
      
    </div>

}