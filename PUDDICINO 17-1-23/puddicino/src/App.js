import './App.css';
import MessageList from './components/messageList/index';
import NewMessage from './components/newMessage';

function App() {
  return (
    <div className="App">
      <NewMessage />
      <MessageList />
    </div>
  );
}

export default App;
