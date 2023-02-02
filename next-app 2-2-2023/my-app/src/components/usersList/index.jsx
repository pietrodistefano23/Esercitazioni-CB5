import styles from '../../styles/Userslist.module.scss'
import Link from 'next/link';

import { HiUser } from "react-icons/hi";
 const UsersList = ({data}) =>{
   
    return (
        <div className={styles.User}>
            <img src={data.image} />
            <h3>@ {data.username}</h3>
            <Link href={`/users/${data.id}`}><HiUser/></Link>
            
        </div>
    )
 }

 export default UsersList;