import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Message from "../message/Message";
import Filter from "../filter";
import './index.css';


const MessagesList = () => {
    const [msgList, setMsgList] = useState([]);
    const [filterState, setFilterState] = useState('');
  
    useEffect(() => {
      GET("posts").then(({ posts }) => setMsgList(posts));
    }, []);
  
    return (
      <div className="MessagesList">
        <Filter setFilterState = {setFilterState} />

        {
         
          msgList
          .filter((message)=>message.body.includes(filterState))
            .map((mess) => ( 
              <Message data={mess} key= {mess.id} />
            ))
          
        }
      </div>
    );
  };
  
  export default MessagesList;
  