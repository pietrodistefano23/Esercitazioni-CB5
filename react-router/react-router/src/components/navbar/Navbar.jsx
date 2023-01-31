import { Link } from 'react-router-dom';
import styles from './index.module.scss'
const Navbar = () => {

    return (
        <div className={styles.Navbar}>
            <ul>
                <li>
                    <Link to='/contacts'>Lista utenti</Link>
                </li>
                <li>
                    <Link to='/messages'>Vai ai messaggi</Link>
                </li>
                <li>
                    <Link to='/post'>Vai ai post</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar ;