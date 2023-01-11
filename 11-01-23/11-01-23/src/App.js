import './App.css';
import { Users } from './fetch/components/users/Users';
import { Address } from './fetch/components/address/Adrress';
import { Appliances } from './fetch/components/appliances/Appliances';
import { Beers } from './fetch/components/beers/Beers';
function App() {
  return (
    <div className="App">
    <Users />
    <Address />
    <Beers />
    <Appliances />
    </div>
  );
}

export default App;
