import UsersList from "@/components/usersList";
import styles from '../../styles/users.module.scss';
import Link from "next/link";
const Users = ({users}) => {
console.log(users)
    return (
        <div className={styles.Users}>
            <h3>pagina statica</h3>
            <Link href='/'>Back</Link>
            <div className={styles.Container}>
            {users && users.map((user)=> (
                <UsersList data={user}/>
            ))}
            </div>
            
        </div>
    )
}
export default Users;

export async function getStaticProps () {
    const resUsers= await fetch('https://dummyjson.com/users');
    const dataUsers = await resUsers.json();

    return{
        props:{
            users: dataUsers.users,
        }
    }
}