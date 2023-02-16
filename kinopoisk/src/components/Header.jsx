import styles from './../styles/Header.module.css';
import { BiSearch } from 'react-icons/bi';
import { FiGift } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.leftBlock}>
                <div>logo</div>
                <nav className={styles.nav}>
                    <a href='#'>Главная</a>
                    <a href='#'>Каталог</a>
                    <a href='#'>Магазин</a>
                    <a href='#'>Спорт</a>
                    <a href='#'>ТВ каналы</a>
                </nav>
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.search}><BiSearch size='1.5em' className={styles.search} /></div>
                <button className={styles.headerButton}>Месяц за 1Р</button>
                <div className={styles.addPromo}><FiGift size='1.5em' />Ввести промокод</div>
                <div className={styles.LogIn}><BiUserCircle size='1.5em' />Войти</div>
            </div>
        </header>
    )
}

export default Header;