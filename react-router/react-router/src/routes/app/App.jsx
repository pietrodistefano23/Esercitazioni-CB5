import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h3>Home-page</h3>
      <Link to='/contacts'>contatti</Link>
    </div>
  );
}

export default App;
