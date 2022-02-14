import { SingInButton } from '../SingInButton/SingInButton'
import styles from './Header.module.scss'

export function Header() {
    return (
        <header className={styles.headercontainer}>
            <div className={styles.headercontent}>
                <img src="/images/ig.news.svg" alt="" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
            <SingInButton/>
            </div>

        </header>

    )
}