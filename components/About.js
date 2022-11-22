import styles from '../styles/Layout.module.css'
import aboutStyles from '../styles/About.module.css'

function About() {
    return (
        <div className={aboutStyles.about}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3>designer</h3>
                    <h5>I value simple content structure, clean design patterns, and thoughtful interactions.</h5>
                    <p>UX, UI, Design Systems, Web, Mobile, Apps, Logos</p>
                </div>
                <div className={styles.card}>
                    <h3>front-end developer</h3>
                    <h5>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</h5>
                    <p>HTML, CSS, JavaScript</p>
                </div>
            </div>
            <div className={styles.grid} style={{ textAlign: 'justify' }}>
                {/* <div> */}
                <h2 style={{ textAlign: 'right' }}>about me</h2>
                <p>Since beginning of my journey as a freelance designer nearly 5 years ago, I&apos;ve done remote work for several companies and collaborated with talented people from Brazil and North America.</p>
                <p>I have a serious passion for UX/UI and I my goal is turning complex problems into simple, dynamic, beautiful and intuitive designs.</p>
                <p>I&apos;m quietly confident, naturally curious and perpetually working on improving my designing skills.</p>
                {/* </div> */}
            </div>
        </div>
    )
}

export default About
