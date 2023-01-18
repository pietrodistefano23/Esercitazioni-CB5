import './App.css';
import { useState } from 'react';
import MessageList from './components/messageList/index';
import NewMessage from './components/newMessage';
import FriendsList from './components/friendsList';
import Filter from './components/filter';

function App() {
  const [filterState, setFilterState] = useState("");
  return (
    <div className="App">
      
      <div className='Main'>
        <FriendsList />
        <NewMessage />
        {/* <Filter setFilterState={setFilterState}/> */}
        <MessageList /> 
        {/* <div className="popularSection">
        <MessageList nPost={5} />
      </div> */}
        
      </div>
      
    </div>
  );
}

export default App;
