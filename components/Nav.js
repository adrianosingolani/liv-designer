import Link from 'next/link'

import styles from '../styles/Layout.module.css'
import navStyles from '../styles/Nav.module.css'

function Nav() {
    return (
        <nav className={`${navStyles.nav}`}>
            <ul>
                <li>
                    <Link href='#home'>home</Link>
                </li>
                <li>
                    <Link href='#about'>about</Link>
                </li>
                <li>
                    <Link href='#contact'>contact</Link>
                </li>
            </ul>
            <h1 className={styles.title}>liv kobayashi</h1>
        </nav>
    )
}

export default Nav