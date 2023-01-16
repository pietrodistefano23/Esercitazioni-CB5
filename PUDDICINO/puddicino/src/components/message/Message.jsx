import { useEffect } from "react";
import { useState } from "react";
import { GET } from "../../utils/http";
import Button from "../button/index";
import './index.css';

const Message = ({ data }) => {
    const [user, setUser] = useState({});
  
    useEffect(() => {
      GET(`users/${data.userId}`).then((user) => setUser(user));
    }, []);
  
    return (
      <div className="Message">

        <div className="MessageContainer">

            <img src={user.image} alt={user.firstName} />
        
            <div className="Message__textContent">
                <p className="userId">@{user.firstName}</p>
                <h4 className="messageTitle">{data.title}</h4>
                <p className="messageText">{data.body}</p>
            </div>
        </div>
        
        <Button />

      </div>
    );
  };
  
  export default Message;