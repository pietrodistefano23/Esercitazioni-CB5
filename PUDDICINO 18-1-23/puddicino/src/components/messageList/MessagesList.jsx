import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Message from "../message/Message";
import './index.css';


const MessagesList = (filterState) => {
    const [msgList, setMsgList] = useState([]);
  
    useEffect(() => {
      GET("posts").then(({ posts }) => setMsgList(posts));
    }, []);
  
    return (
      <div className="MessagesList">
        {msgList.map((msg) => (
          <Message data={msg} key={msg.id} />
        ))}
      </div>
    );
  };
  
  export default MessagesList;