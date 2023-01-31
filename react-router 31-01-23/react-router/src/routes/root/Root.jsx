import { GET } from "../../utils/api";
import { useState, useEffect } from "react";
import UsersList from "../../components/users";

import styles from "./styles.module.scss"
import { Link } from "react-router-dom";
import { HiReply } from "react-icons/hi";

const Root = () => {
    const [userList, setUserList] = useState([]);

  useEffect(() => {
    GET("users?limit=10").then(({ users }) => setUserList(users));
  }, []);

    return (
       <div className={styles.Root}>
            {userList.map((user) => (
          <UsersList userData={user} key={user.id}  />
        ))}
        <div className={styles.back}>
        <Link to='/'><HiReply /></Link>
        </div>
        
       </div>
    )
}


export default Root ;