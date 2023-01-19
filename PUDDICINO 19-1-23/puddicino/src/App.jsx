import './App.css';
import { useState } from 'react';
import MessageList from './components/messageList/index';
import NewMessage from './components/newMessage';
import FriendsList from './components/friendsList';

function App() {
  const [filterState, setFilterState] = useState("");
  return (
    <div className="App">
      
      <div className='Main'>
        <FriendsList />
        <NewMessage />
        
        <MessageList setFilterState= {setFilterState}/> 
    
        
      </div>
      
    </div>
  );
}

export default App;
