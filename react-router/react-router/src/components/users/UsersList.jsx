import { useNavigate } from 'react-router'
import styles from './index.module.scss'

const UsersList = ({userData}) => {
    const navigate = useNavigate ();
const onMouseDownHandler = () =>  navigate(`/contacts/${userData.id}`)


    return <div onMouseDown={onMouseDownHandler} className={styles.UsersList}>
        <img src={userData.image} alt={userData.firstName}/>
        <h3>{userData.firstName}</h3>
        <span>{userData.username}</span>
    </div>
}


export default UsersList;