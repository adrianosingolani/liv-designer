import Home from './Home'
import About from './About'
import Contact from './Contact'

import styles from '../styles/Layout.module.css'

function Content() {

    return (
        <>
            <div id="home" className={styles.main}>
                <Home />
            </div>
            <div id="about" className={styles.main}>
                <About />
            </div>
            <div id="contact" className={styles.main}>
                <Contact />
            </div>
        </>
    )
}

export default Content
