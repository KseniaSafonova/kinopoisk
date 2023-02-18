import styles from './../styles/MainMenu.module.css'
import { Link } from "react-router-dom";

function MainMenu() {
    return (
        <div className={styles.container}>
            <Link to='/movies'><button className={styles.menuButton}>Фильмы</button></Link>
            <button className={styles.menuButton}>Сериалы</button>
            <button className={styles.menuButton}>Мультфильмы</button>
            <button className={styles.menuButton}>Фитнес</button>
            <button className={styles.menuButton}>Природа</button>
            <button className={styles.menuButton}>Лекции</button>
            <button className={styles.menuButton}>Кулинария</button>
            <button className={styles.menuButton}>Программы</button>
        </div>
    )
}

export default MainMenu;