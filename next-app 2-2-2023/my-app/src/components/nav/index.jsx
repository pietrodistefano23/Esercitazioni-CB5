import Link from "next/link"

import styles from '@/styles/Nav.module.scss'

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <h3>Links</h3>
            <ul>
                <li><Link href='/users'>Users</Link></li>

            </ul>
        </div>
    )
}

export default Nav;